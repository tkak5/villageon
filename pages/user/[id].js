import Layout, { phoneNumber, url }from '../../components/layout'
import Head from 'next/head'
import styles from '../../styles/user.module.scss'
import { useState, useEffect } from 'react'
import AnimateHeight from 'react-animate-height'
import Router from 'next/router'
import Link from 'next/link'
import { getSortedPostsData } from '../../lib/posts'

import initFirebase from '../../components/initFirebase'
import firebase from "firebase/app"
import 'firebase/auth'
require('firebase/auth')
require("firebase/firestore")

initFirebase()
var db = firebase.firestore()
var getOptions = {
    source: 'cache'
}

export async function getStaticPaths() {
    const ids = await db.collection('users').get().then(function(querySnapshot) {
        var ids = []
        querySnapshot.docs.forEach(doc => {
          ids.push(doc.id)
        })
        return ids
    })

    const paths = ids.map(id => {
        return {
            params: {
                id: id
            }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}) {
    const allEventsData = await db.collection('events').orderBy("date").get().then(function(querySnapshot) {
        var datas = []
        querySnapshot.docs.forEach(doc => {
          datas.push(doc.data())
        })
        return datas
    })
    const userInfo = await db.collection('users').doc(params.id).get().then(function(doc) {
        if (doc.exists) {
            return doc.data()
        }
    })
    return {
      props: {
        allEventsData,
        userInfo
      }
    }
  }




export default function details({ allEventsData, userInfo }) {
    const [user, setUser] = useState("")
    const [verifyMessage, setVerifyMessage] = useState("認証メールを送る")
    const [toggleId, setToggleId] = useState("")
    //name
    const [nameError, setNameError] = useState("")
    const [newFirst, setNewFirst] = useState("")
    const [newLast, setNewLast] = useState("")
    //mail
    const [newMail, setNewMail] = useState("")
    const [mailError, setMailError] = useState("")
    const [reAuth, setReAuth] = useState(false)
    //password
    const [password, setPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [newPasswordError, setNewPasswordError] = useState("")
    const [passwordToggle, setPasswordToggle] = useState(true)
    const [newPasswordToggle, setNewPasswordToggle] = useState(true)
    //database
    const [admin, setAdmin] = useState(false) 
    const [events, setEvents] = useState([])
    //useEffect
    const [mount, setMount] = useState(true)
    //cancel
    const [cancelId, setCancelId] = useState("")
    const [canceledId, setCanceledId] = useState([])
    const [cancelErrorId, setCancelErrorId] = useState([])
    //admin
    const [mensName, setMensName] = useState({})
    const [womensName, setWomensName] = useState({})
    const [mensEmail, setMensEmail] = useState({})
    const [womensEmail, setWomensEmail] = useState({})
    const [eventId, setEventId] = useState("")
    const [eventMensName, setEventMensName] = useState([])
    const [eventMensMail, setEventMensMail] = useState([])
    const [eventWomensName, setEventWomensName] = useState([])
    const [eventWomensMail, setEventWomensMail] = useState([])

    

    
    useEffect(() => {
        if (mount) {
            firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                    // User is signed in.
                    setUser(user)
                } else {
                    if (process.browser) {
                        Router.push("/")
                    }
                    // No user is signed in.
                }
            })
        }        
    })

    useEffect(() => {
        if (user) {
            db.collection("users").doc(user.uid).get().then(function(doc) {
                if (doc.exists) {
                    setEvents(doc.data().events)
                }
            })
        }
    },[canceledId])
    

    const changeFirst = event => {
        setNewFirst(event.target.value)
    }

    const changeLast = event => {
        setNewLast(event.target.value)
    }

    //change displayname to newer
    const submitName = event => {
        if (newLast && newFirst) {
            user.updateProfile({
                displayName: `${newLast} ${newFirst}`
            }).then(function() {
                setToggleId("")
                setNewFirst("")
                setNewLast("")
            }) .catch(function(error) {
                setNameError(error.message)
            })
        } else {
            setNameError("入力してください")
        }
    }

    //change email to newer
    const submitMail = () => {
        user.updateEmail(newMail).then(
            function() {
                setToggleId("")
                setNewMail("")
                setMailError("")
            }).catch(function(error) {
                if (error.code == "auth/invalid-email") {
                    setMailError("メールアドレスの形式が正しくないです")
                } else if (error.code == "auth/email-already-in-use") {
                    setMailError("既に使われています")
                } else if (error.code == "auth/requires-recent-login") {
                    setReAuth(true)
                }
            }
        )
    }

    const submitMailAfterReAuth = () => {
        var cred = firebase.auth.EmailAuthProvider.credential(user.email, password)
        user.reauthenticateWithCredential(cred).then(
            function(){
                submitMail()
                setPasswordError("")
                setToggleId("")
                setReAuth(false)
            }).catch(function(error){
                if (error.code == "auth/wrong-password") {
                    setPasswordError("パスワードが違います")
                } else {
                    setPasswordError(error.message)
                }
            })
    }

    const changeMail = (event) => {
        var mail = event.target.value
        setNewMail(mail)
    }

    //change password to newer
    const submitPasswordAfterReAuth = () => {
        var cred = firebase.auth.EmailAuthProvider.credential(user.email, password)
        user.reauthenticateWithCredential(cred).then(
            function(){
                setPasswordError("")
                submitPassword()
                
            }).catch(function(error){
                if (error.code == "auth/wrong-password") {
                    setPasswordError("パスワードが違います")
                } else {
                    setPasswordError(error.message)
                }
            })
    }

    const submitPassword = () => {
        user.updatePassword(newPassword).then(function() {
            setPassword("")
            setPasswordError("")
            setToggleId("")
            setReAuth(false)
        }).catch(function(error) {
            if (error.code == "auth/weak-password") {
                setNewPasswordError("6文字以上で設定してください")
            } else {
                setNewPasswordError(error.message)
            }
        })
    }

    //switch password display or none
    const togglePassword = () => {
        setPasswordToggle(!passwordToggle)
    }

    //switch newpassword display or none
    const toggleNewPassword = () => {
        setNewPasswordToggle(!newPasswordToggle)
    }

    
    const changePassword = (event) => {
        var pass = event.target.value
        setPassword(pass)
    }

    const changeNewPassword = (event) => {
        var pass = event.target.value
        setNewPassword(pass)
    }

    //send verification for mail
    const submitVerification = ()　=> {
        var actionCodeSettings = {
            url: `${url}/user/details`,
        }
        user.sendEmailVerification(actionCodeSettings).then(function() {
            setVerifyMessage("認証メールを送信しました。")
        }).catch(function(error) {
            setVerifyMessage(error.code)
        })
    }

    //signout
    const handleSignOut = () => {
        firebase.auth().signOut().then(function() {
            Router.replace("/")
          }).catch(function(error) {
            // An error happened.
          });
    }

    //reauthentication

    //damy
    const handleNone = () => {
    }

    // toggle setting id
    const changeId = (event) => {
        var newId = event.target.id
        if (newId == toggleId) {
            setToggleId("")
        } else {
            setToggleId(newId)
        }
    }

    //delete account
    const submitDelete = () => {
        var cred = firebase.auth.EmailAuthProvider.credential(user.email, password)
        user.reauthenticateWithCredential(cred).then(
            function(){
                setPasswordError("")
                db.collection("users").doc(user.uid).delete().then(function() {
                    user.delete()
                })
            }).catch(function(error){
                if (error.code == "auth/wrong-password") {
                    setPasswordError("パスワードが違います")
                } else {
                    setPasswordError(error.message)
                }
            })
    }


    //apper display to cancel
    const displayCancel = () => {
        var id = event.target.id
        setCancelId(id)
    }
    const hideCancel = () => {
        setCancelId("")
    }

    const judgeCancel = (eventId, eventDate, eventPlace, eventTitle, eventGender, eventPrice) => {
        var today = new Date()
        var year = today.getFullYear()
        var month = today.getMonth()+1
        var day = today.getDate()
        var eventYear = Number(eventId.substr(0,4))
        var eventMonth = Number(eventId.substr(4,2))
        var eventDay = Number(eventId.substr(6,2))
        var array = [2,4,6,9,11]
        var dayLeft
        if (month == 2) {
            dayLeft = 29 - day
        } else if (array.includes(month)) {
            dayLeft = 30 - day
        } else {
            dayLeft = 31 - day
        }
        if (year == eventYear && month == eventMonth && day+3 >= eventDay) {
            setCancelErrorId(eventId)
        } else if (year == eventYear && month+1 == eventMonth && dayLeft + eventDay <= 3) {
            setCancelErrorId(eventId)
        } else {
            submitCancel(eventId, eventDate, eventPlace, eventTitle, eventGender, eventPrice)
        }
    }

    const submitCancel = (eventId, eventDate, eventPlace, eventTitle, eventGender, eventPrice) => {
        db.collection("users").doc(user.uid).update({
            events: firebase.firestore.FieldValue.arrayRemove({
                id: eventId,
                date: eventDate,
                place: eventPlace,
                title: eventTitle,
                gender: eventGender,
                price: eventPrice
            })
        }).then(function(){
            setCanceledId(eventId)
        }).catch(function(error){
        })
        if (eventGender == "man") {
            db.collection("events").doc(cancelId).update({
                mens: firebase.firestore.FieldValue.arrayRemove({
                    id: user.uid,
                    mail: user.email,
                    name: user.displayName,
                })
            }).then(function(){
            }).catch(function(error){
            })
        } else {
            db.collection("events").doc(cancelId).update({
                womens: firebase.firestore.FieldValue.arrayRemove({
                    id: user.uid,
                    mail: user.email,
                    name: user.displayName,
                })
            }).then(function(){
            }).catch(function(error){
            })
        }
    }

    const changeEventId = (event) => {
        var id = event.target.id
        setEventId(id)
        setEventMensName(mensName[id])
        setEventMensMail(mensEmail[id])
        setEventWomensName(womensName[id])
        setEventWomensMail(womensEmail[id])
    }

    return (
        <Layout>
            <Head>
                <title>details</title>
            </Head>
            <article className="bg-white p-6 mt-6 sm:max-w-lg sm:mx-auto">
                <div className="w-full">
                    {/*name block*/}
                    <div className=" border-b-2 py-4">
                        <p className="text-center font-semibold">名前</p>
                        <p className="text-center">{user.displayName}</p>
                        <p className="text-blue-600 cursor-pointer text-xs text-center" id="name" onClick={changeId}>編集</p>
                        <AnimateHeight
                            duration={300}
                            height={toggleId === "name" ? 'auto' : 0}>
                            <div className="flex flex-col jusify-center items-center">
                                <input type="text" placeholder="姓" onChange={changeLast} className="border-solid border-2 rounded p-2 w-full outline-none max-w-sm"/>
                                <input type="text" placeholder="名" onChange={changeFirst} className="border-solid border-2 rounded p-2 mt-1 w-full outline-none max-w-sm"/>
                                <p className="text-red-600 text-center">{nameError}</p>
                                <input className="border-solid border-2 rounded p-2 mt-1 bg-blue-200　outline-none" type="button" onClick={submitName} value="変更"/>
                            </div>
                        </AnimateHeight>
                    </div>
                    {/*mail block*/}
                    <div className="border-b-2 py-4">
                        <p className="text-center font-semibold">メールアドレス</p>
                        <p className="text-center">{user.email}</p>
                        <p className="text-blue-600 cursor-pointer text-xs text-center" id="mail" onClick={changeId}>編集</p>
                        <AnimateHeight
                            duration={300}
                            height={toggleId === "mail" ? 'auto' : 0}>
                                <div className="flex flex-col justify-center items-center">
                                    <input className="border-solid border-2 rounded p-2 w-full outline-none max-w-sm" type="text" placeholder="新しいメールアドレス" onChange={changeMail}/>
                                    <p className="text-red-600 text-center">{mailError}</p>
                                    <input className="border-solid border-2 rounded p-2 mt-1 bg-blue-200　outline-none" type="button" onClick={submitMail} value="変更"/>
                                </div>
                        </AnimateHeight>
                        <AnimateHeight
                            duration={300}
                            height={reAuth ? 'auto' : 0}>
                                <div className="flex flex-col justify-center items-center">
                                    <p>時間が経っているためパスワードを入力してください</p>
                                    <div className="border-solid border-2 rounded p-2 w-full flex max-w-sm">
                                        <input className="w-4/5 outline-none" placeholder="現在のパスワード" type={passwordToggle ? "password" : "text"} onChange={changePassword}/>
                                        <input className="w-1/5 outline-none bg-white opacity-50" type="button" onClick={togglePassword} value={passwordToggle ? "表示" : "非表示"}/>
                                    </div>
                                    <p className="text-red-600 text-center">{passwordError}</p>
                                    <input className="border-solid border-2 rounded p-2 mt-1 bg-blue-200　outline-none" type="button" onClick={submitMailAfterReAuth} value="認証"/>
                                </div>
                        </AnimateHeight>
                    </div>
                    {/*password block*/}
                    <div className="border-b-2 py-4">
                        <p className="text-center font-semibold">パスワード</p>
                        <p className="text-center">●●●●●●</p>
                        <p className="text-blue-600 cursor-pointer text-xs text-center" id="password" onClick={changeId}>編集</p>
                        <AnimateHeight
                            duration={300}
                            height={toggleId === "password" ? 'auto' : 0}>
                                <div className="flex flex-col justify-center items-center">
                                    <div className="border-solid border-2 rounded p-2 w-full flex max-w-sm">
                                        <input
                                            className="w-4/5 outline-none"
                                            placeholder="現在のパスワード"
                                            type={passwordToggle ? "password" : "text"}
                                            onChange={changePassword}/>
                                        <input className="w-1/5 outline-none bg-white opacity-50" type="button" onClick={togglePassword} value={passwordToggle ? "表示" : "非表示"}/>
                                    </div>
                                    <p className="text-red-600 text-center">{passwordError}</p>
                                    <div className="border-solid border-2 rounded p-2 w-full flex mt-1 max-w-sm">
                                        <input
                                            className="w-4/5 outline-none"
                                            placeholder="新しいパスワード"
                                            type={newPasswordToggle ? "password" : "text"}
                                            onChange={changeNewPassword}/>
                                        <input className="w-1/5 outline-none bg-white opacity-50" type="button" onClick={toggleNewPassword} value={newPasswordToggle ? "表示" : "非表示"}/>
                                    </div>
                                    <p className="text-red-600 text-center">{newPasswordError}</p>
                                    <input className="border-solid border-2 rounded p-2 mt-1 bg-blue-200　outline-none" type="button" onClick={submitPasswordAfterReAuth} value="変更"/>
                                </div>
                        </AnimateHeight>
                    </div>
                    {/* verifyed block */}
                    <div className="border-b-2 py-4">
                        <div className="">
                            <p className="text-center font-semibold">メール認証</p>
                            <p className="text-center">{user.emailVerified ? "認証済み" : "未認証"}</p>
                            <p
                                className="text-blue-600 cursor-pointer text-xs text-center"
                                onClick={user.emailVerified ? handleNone : submitVerification}
                                >
                                    {user.emailVerified ? "" : verifyMessage}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="py-4">
                    <p className="text-blue-600 cursor-pointer text-center" onClick={handleSignOut}>ログアウト</p>
                    <p id="delete" className="text-red-600 cursor-pointer text-center" onClick={changeId}>アカウントを削除する</p>
                    <AnimateHeight
                        duration={300}
                        height={toggleId === "delete" ? 'auto' : 0}>
                        <div>
                            <input
                                placeholder="現在のパスワード"
                                type={passwordToggle ? "password" : "text"}
                                onChange={changePassword}/>
                            <input type="button" onClick={togglePassword} value="表示"/>
                        </div>
                        <p className={styles.alert}>{passwordError}</p>
                        <input type="button" onClick={submitDelete} value="削除"/>
                    </AnimateHeight>
                </div>
            </article>
            <article className="bg-white p-6 mt-6 mb-6 sm:max-w-lg sm:mx-auto">
                <div className="w-full">
                    <h2 className="text-center">参加予定のイベントリスト</h2>
                    <ul>
                        {userInfo.events.map((event) => (
                            <li key={event.id} className="list-none border-t-2 py-4">
                            <div>
                                <Link href="/posts/[id]" as={`/posts/${event.id}`}>
                                    <a><h3 className="text-blue-600 text-center">{event.title}</h3></a>
                                </Link>
                                <p className="text-center">{event.date}</p>
                                <p className="text-center">{event.place}</p>
                                <div className={styles.fee}>
                                    <p className="text-center">{event.gender == "man" ? "男性" : "女性"}</p>
                                    <p className="text-center">1人</p>
                                    <p className="text-center">{event.price}円</p>
                                </div>
                                {cancelId !== event.id ? 
                                    <div className="flex flex-col justify-center items-center">
                                        <p id={event.id} onClick={displayCancel} className="text-red-600 cursor-pointer text-center">キャンセル</p>
                                    </div>
                                :
                                    <div>
                                        {cancelErrorId !== event.id ?
                                            <div>
                                                <p className="text-center">上記のイベントの予約をキャンセルしますがよろしいですか</p>
                                                <div className="flex justify-center">
                                                    <input className="border-solid border-2 rounded p-2 mt-1 bg-white　outline-none mx-1" type="button" value="はい" onClick={(e) => judgeCancel(event.id, event.date, event.place, event.title, event.gender, event.price, e)}/>
                                                    <input className="border-solid border-2 rounded p-2 mt-1 bg-white　outline-none mx-1" type="button" value="いいえ" onClick={hideCancel}/>
                                                </div>
                                            </div>
                                        :
                                            <div>
                                                <p className="text-center">web上でキャンセル可能な日にちを超えています。</p>
                                                <p className="text-center">お手数ですが以下の電話番号までご連絡ください</p>
                                                <p className="text-center">{phoneNumber}</p>
                                            </div>
                                        }
                                    </div>
                                }
                            </div>
                        </li>
                        ))}
                    </ul>
                </div>
                {userInfo.admin ?
                    <div className={styles.detailWrapper}>
                        <h2>イベントリスト</h2>
                        <ul className={styles.mainWrapper}>
                            {allEventsData.map((event) => (
                                
                                <li className={styles.eventList} key={`admin${event.id}`}>
                                    <h3>{event.title}</h3>
                                    <p>{event.date}</p>
                                    <div>
                                        <p>合計人数 {event.mens.length + event.womens.length}人</p>
                                        <p>男性参加者</p>
                                        <div className={styles.adminUsers}>
                                            <div className={styles.adminName}>
                                                {event.mens.map((man) => (
                                                    <div>
                                                       <p>{man.name}</p>
                                                        <p>{man.mail}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <p>女性参加者</p>
                                        <div className={styles.adminUsers}>
                                            <div className={styles.adminName}>
                                                {event.womens.map((woman) => (
                                                    <div>
                                                        <p>{woman.name}</p>
                                                        <p>{woman.mail}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    {/*
                                    <p onClick={changeEventId} id={id} className={styles.link}>詳細</p>
                                    {eventId == id ? 
                                        <div>
                                            <p>合計人数 {eventMensName.length + eventWomensName.length}人</p>
                                            <p>男性参加者</p>
                                            <div className={styles.adminUsers}>
                                                <div className={styles.adminName}>
                                                    {eventMensName.map((name) => (
                                                        <p>{name}</p>
                                                    ))}
                                                </div>
                                                <div className={styles.adminMail}>
                                                    {eventMensMail.map((mail) => (
                                                        <p>{mail}</p>
                                                    ))}
                                                </div>
                                            </div>
                                            <p>女性参加者</p>
                                            <div className={styles.adminUsers}>
                                                <div className={styles.adminName}>
                                                    {eventWomensName.map((name) => (
                                                        <p>{name}</p>
                                                    ))}
                                                </div>
                                                <div className={styles.adminMail}>
                                                    {eventWomensMail.map((mail) => (
                                                        <p>{mail}</p>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    :
                                    <div></div>}
                                                    */}
                                </li>
                            ))}
                        </ul>
                    </div>
                :
                <div></div>
                }
            </article>
        </Layout>
    )
}