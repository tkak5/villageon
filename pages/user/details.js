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

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
      props: {
        allPostsData
      }
    }
  }




export default function details({ allPostsData }) {
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
            if (user) {
                db.collection("users").doc(user.uid).get().then(function(doc) {
                    if (doc.exists) {
                        setEvents(doc.data().events)
                        setAdmin(doc.data().admin)
                        if (admin) {
                            var mensName = {}
                            const womensName = {}
                            const mensEmail = {}
                            const womensEmail = {}
                            db.collection('events').get().then(function(querySnapshot) {
                                querySnapshot.docs.forEach(doc => {
                                    const nameForMens = []
                                    const emailForMens = []
                                    doc.data().mens.forEach(man => {
                                        nameForMens.push(man.name)
                                        emailForMens.push(man.mail)
                                    })
                                    
                                    const nameForWomens = []
                                    const emailForWomens = []
                                    doc.data().womens.forEach(woman => {
                                        nameForWomens.push(woman.name)
                                        emailForWomens.push(woman.mail)
                                    })
                                    
                                    mensName[doc.id] = nameForMens
                                    mensEmail[doc.id] = emailForMens
                                                                        
                                    womensName[doc.id] = nameForWomens
                                    womensEmail[doc.id] = emailForWomens
                                })
                                setMensName(mensName)
                                setMensEmail(mensEmail)
                                
                                setWomensName(womensName)
                                setWomensEmail(womensEmail)
                                
                            })
                        }
                        setMount(false)
                    } else {
                    }
                })
            }
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
        user.updateProfile({
            displayName: `${newLast} ${newFirst}`
        }).then(function() {
            setToggleId("")
            setNewFirst("")
            setNewLast("")
        }) .catch(function(error) {
            setNameError(error.message)
        })
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
        if (year < Number(eventId.substr(0,4))) {
            submitCancel(eventId, eventDate, eventPlace, eventTitle, eventGender, eventPrice)
        } else if (year == Number(eventId.substr(0,4)) && month < Number(eventId.substr(4,2))) {
            submitCancel(eventId, eventDate, eventPlace, eventTitle, eventGender, eventPrice)
        } else if (month == Number(eventId.substr(4,2)) && day+3 < Number(eventId.substr(6,2))) {
            submitCancel(eventId, eventDate, eventPlace, eventTitle, eventGender, eventPrice)
        } else {
            setCancelErrorId(eventId)
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
            <article className={styles.userWrapper}>
                <div className={styles.detailWrapper}>
                    {/*name block*/}
                    <div className={styles.contents}>
                        <div className={styles.contentLeft}>
                            <p className={styles.label}>名前</p>
                            <p className={styles.link} id="name" onClick={changeId}>編集</p>
                        </div>
                        <div className={styles.contentRight}>
                            <p>{user.displayName}</p>
                            <AnimateHeight
                                duration={300}
                                height={toggleId === "name" ? 'auto' : 0}>
                                <div>
                                    <input type="text" placeholder="姓" onChange={changeLast} className={styles.inputName}/>
                                    <input type="text" placeholder="名" onChange={changeFirst} className={styles.inputName}/>
                                </div>
                                <p className={styles.alert}>{nameError}</p>
                                <input className={styles.inputButton} type="button" onClick={submitName} value="変更"/>
                            </AnimateHeight>
                            <div>
                            </div>
                        </div>
                    </div>
                    {/*mail block*/}
                    <div className={styles.contents}>
                        <div className={styles.contentLeft}>
                            <p className={styles.label}>メールアドレス</p>
                            <p className={styles.link} id="mail" onClick={changeId}>編集</p>
                        </div>
                        <div className={styles.contentRight}>
                            <p>{user.email}</p>
                            <AnimateHeight
                                duration={300}
                                height={toggleId === "mail" ? 'auto' : 0}>
                                <div>
                                    <input className={styles.input} type="text" placeholder="新しいメールアドレス" onChange={changeMail}/>
                                </div>
                                <p className={styles.alert}>{mailError}</p>
                                <input className={styles.inputButton} type="button" onClick={submitMail} value="変更"/>
                            </AnimateHeight>
                            <AnimateHeight
                                duration={300}
                                height={reAuth ? 'auto' : 0}>
                                    <div>
                                        <p>時間が経っているためパスワードを入力してください</p>
                                        <div className={styles.passBlock}>
                                            <input className={styles.inputPass} placeholder="現在のパスワード" type={passwordToggle ? "password" : "text"} onChange={changePassword}/>
                                            <input className={styles.passButton} type="button" onClick={togglePassword} value={passwordToggle ? "表示" : "非表示"}/>
                                        </div>
                                    </div>
                                    <p className={styles.alert}>{passwordError}</p>
                                    <input className={styles.inputButton} type="button" onClick={submitMailAfterReAuth} value="認証"/>
                            </AnimateHeight>
                            <div>
                            </div>
                        </div>
                    </div>
                    {/*password block*/}
                    <div className={styles.contents}>
                        <div className={styles.contentLeft}>
                            <p className={styles.label}>パスワード</p>
                            <p className={styles.link} id="password" onClick={changeId}>編集</p>
                        </div>
                        <div className={styles.contentRight}>
                            <p>●●●●●●</p>
                            <AnimateHeight
                                duration={300}
                                height={toggleId === "password" ? 'auto' : 0}>
                                <div className={styles.passBlock}>
                                    <input
                                        className={styles.inputPass}
                                        placeholder="現在のパスワード"
                                        type={passwordToggle ? "password" : "text"}
                                        onChange={changePassword}/>
                                    <input className={styles.passButton} type="button" onClick={togglePassword} value={passwordToggle ? "表示" : "非表示"}/>
                                </div>
                                <p className={styles.alert}>{passwordError}</p>
                                <div className={styles.passBlock}>
                                    <input
                                        className={styles.inputPass}
                                        placeholder="新しいパスワード"
                                        type={newPasswordToggle ? "password" : "text"}
                                        onChange={changeNewPassword}/>
                                    <input className={styles.passButton} type="button" onClick={toggleNewPassword} value={newPasswordToggle ? "表示" : "非表示"}/>
                                </div>
                                <p className={styles.alert}>{newPasswordError}</p>
                                <input className={styles.inputButton} type="button" onClick={submitPasswordAfterReAuth} value="変更"/>
                            </AnimateHeight>
                        </div>
                    </div>
                    {/* verifyed block */}
                    <div className={styles.contents}>
                        <div className={styles.contentLeft}>
                            <p className={styles.label}>メール認証</p>
                        </div>
                        <div className={styles.contentRight}>
                            <p>{user.emailVerified ? "認証済み" : "未認証"}</p>
                            <p
                                className={user.emailVerified ? styles.none : styles.link}
                                onClick={user.emailVerified ? handleNone : submitVerification}
                                >
                                    {user.emailVerified ? "" : verifyMessage}
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.signOut}>
                    <p className={styles.link} onClick={handleSignOut}>ログアウト</p>
                    <p id="delete" className={styles.delete} onClick={changeId}>アカウントを削除する</p>
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
            <article className={styles.userWrapper}>
                <div className={styles.detailWrapper}>
                    <h2>参加予定のイベントリスト</h2>
                    {events ? events.map(event =>
                            <li key={event.id} className={styles.eventList}>
                                <div>
                                    <Link href="/posts/[id]" as={`/posts/${event.id}`}>
                                        <a>{event.title}</a>
                                    </Link>
                                    <p>{event.date}</p>
                                    <p>{event.place}</p>
                                    <div className={styles.fee}>
                                        <p className={styles.mens}>{event.gender == "man" ? "男性" : "女性"}</p>
                                        <p>1人</p>
                                        <p>{event.price}円</p>
                                    </div>
                                    {cancelId !== event.id ? 
                                        <div>
                                            <input type="button" value="キャンセル" id={event.id} onClick={displayCancel}/>
                                        </div>
                                    :
                                        <div>
                                            {cancelErrorId !== event.id ?
                                                <div>
                                                    <p>上記のイベントの予約をキャンセルしますがよろしいですか</p>
                                                    <div>
                                                        <input type="button" value="はい" onClick={(e) => judgeCancel(event.id, event.date, event.place, event.title, event.gender, event.price, e)}/>
                                                        <input type="button" value="いいえ" onClick={hideCancel}/>
                                                    </div>
                                                </div>
                                            :
                                                <div>
                                                    <p>web上でキャンセル可能な日にちを超えています。</p>
                                                    <p>お手数ですが以下の電話番号までご連絡ください</p>
                                                    <p>{phoneNumber}</p>
                                                </div>
                                            }
                                        </div>
                                    }
                                </div>
                            </li>
                    ) : ""}
                </div>
                {admin ?
                    <div className={styles.detailWrapper}>
                        <h2>イベントリスト</h2>
                        <ul className={styles.mainWrapper}>
                            {allPostsData.map(({ id, date, title }) => (
                                
                                <li className={styles.eventList} key={`admin${id}`}>
                                    <h3>{title}</h3>
                                    <p>{date}</p>
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