import Layout, { phoneNumber, url }from '../../components/layout'
import Application from '../../components/user/application'
import Admin from '../../components/user/admin'
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



export async function getServerSideProps() {
    const allEventsData = await db.collection('events').orderBy("date").get().then(function(querySnapshot) {
        var datas = []
        querySnapshot.docs.forEach(doc => {
          datas.push(doc.data())
        })
        return datas
    })
    return {
      props: {
        allEventsData
      }
    }
  }




  export default function details({ allEventsData }) {
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
    //useEffect
    const [mount, setMount] = useState(true)
    //database
    const [userData, setUserData] = useState("")

    

    
    useEffect(() => {
        if (mount) {
            firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                    // User is signed in.
                    setUser(user)
                    db.collection('users').doc(user.uid).get().then(function(doc) {
                        if (doc.exists) {
                            setUserData(doc.data())
                        }
                        setMount(false)
                    })
                } else {
                    if (process.browser) {
                        Router.push("/")
                    }
                    // No user is signed in.
                }
            })
            return function cleanup() {
                setMount(false)
            }
        }        
    })


    

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



    return (
        <Layout>
            <Head>
                <title>details</title>
            </Head>
            <div className="">
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
                        <div className="flex flex-col justify-center items-center">
                            <p className="text-red-500 text-center">現在予約しているイベントはキャンセルされません。</p>
                            <p className="text-red-500 text-center">予約をしている場合は必ずキャンセルしてから削除してください。</p>
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
                            <input className="border-solid border-2 rounded p-2 mt-1 bg-blue-200　outline-none" type="button" onClick={submitDelete} value="削除"/>
                        </div>
                    </AnimateHeight>
                </div>
            </article>
            <Application
                events={allEventsData}
                user={user}
            />
            {userData.admin &&
                <Admin
                    events={allEventsData}
                    user={user}
                />
            }
            <style jsx>{`
                .sample {
                    animation: rotation 2s ease 0s 1 alternate none running;                  
                } 
                @keyframes rotation {
                    0% {
                        opacity:0;
                    }
                    100% {
                        opacity:1;
                    }
                }
            `}
            </style>
            </div>
        </Layout>
    )
}