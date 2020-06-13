import Layout, { url } from '../../components/layout'
import Head from 'next/head'
import styles from '../../styles/sign.module.scss'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Router from 'next/router'

import initFirebase from '../../components/initFirebase'
import firebase from "firebase/app"
import 'firebase/auth'
require('firebase/auth')
require("firebase/firestore")

initFirebase()
var db = firebase.firestore()

export default function SignUp () {
    //input
    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")
    const [togglePassword, setTogglePassword] = useState(false)
    const [lastName, setLastName] = useState("")
    const [firstName, setFirstName] = useState("")
    const [gender, setGender] = useState("")
    //error
    const [mailError, setMailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [nameError, setNameError] = useState("")
    const [genderError, setGenderError] = useState("")
    const [check, setCheck] = useState(false)
    const [alert, setAlert] = useState("")
    //db
    const [mount, setMount] = useState(true)
    //verification

    useEffect(() => {
        if (mount) {
            var user = firebase.auth().currentUser
            if (user) {
                if (process.browser) {
                    Router.push("/user/details")
                }
            }
            
            firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                    // User is signed in.
                    if (process.browser) {
                        Router.push("/")
                    }
                } else {
                    // No user is signed in.
                }
            })
            
        }
        return function cleanup() {
            setMount(false)
        }
    })

    
    const changeLastName = event => {
        const LastName = event.target.value
        setLastName(LastName)
    }

    const changeFirstName = event => {
        const FirstName = event.target.value
        setFirstName(FirstName)
    }

    const changeMail = event => {
        const mail = event.target.value
        setMail(mail)
    }
    const changePassword = event => {
        const password = event.target.value
        setPassword(password)
    }
    const handleSubmit = () => {
        setNameError("")
        setMailError("")
        setPasswordError("")
        setAlert("")
        firebase.auth().createUserWithEmailAndPassword(mail, password).then(
            function() {
                var user = firebase.auth().currentUser
                user.updateProfile({
                    displayName: `${lastName} ${firstName}`
                })
                db.collection("users").doc(user.uid).set({
                    apllication: [],
                    admin: false,
                    gender: gender,
                    first: firstName,
                    last: lastName,
                    mail: mail
                }).then(function(){
                }).catch(function(error){
                })
                submitVerification()
            }).catch(
            function(error) {
                var errorCode = error.code
                var errorMessage = error.message
                if (errorCode == 'auth/invalid-email') {
                    setMailError("正しいメールアドレスを入力してください")
                } else if (errorCode == 'auth/email-already-in-use') {
                    setMailError("既に使われています")
                } else if (errorCode == 'auth/weak-password') {
                    setPasswordError("6文字以上で設定してください")
                } else if (errorCode == 'auth/operation-not-allowed') {
                    setMailError("メールアドレスを入力してください")
                } else {
                    setPasswordError(errorMessage)
                }
                
            }
        )
    }

    const checkAlert = () => {
        setNameError("")
        setMailError("")
        setPasswordError("")
        setAlert("")
        if (!firstName || !lastName) {
            setNameError("入力してください")
            
        } 
        if (!mail) {
            setMailError("入力してください")
        } 
        if (!password) {
            setPasswordError("入力してください")
        } 
        if (!check) {
            setAlert("利用規約に同意してください")
        }
        if (gender) {
            setGenderError("入力してください")
        }
    }

    const toggleChack = () => {
        setCheck(!check)
        setAlert("")
    }
    
    const changeGender = (event) => {
        var gender = event.target.value
        setGender(gender)
    }

    const submitVerification = ()　=> {
        var actionCodeSettings = {
            url: `${url}/user/details`,
        }
        var user = firebase.auth().currentUser
        user.sendEmailVerification(actionCodeSettings).then(function() {
            if (process.browser) {
                Router.push("/sign/verification")
            }
    }
        )
    }

    const togglePasswordDisplay = () => {
        setTogglePassword(!togglePassword)
    }

    return (
        <Layout>
            <Head>
                <title>SignUp</title>
            </Head>
            <article className="
                flex flex-col justify-center items-center bg-white w-full my-6 p-6 shadow
                sm:max-w-lg sm:mx-auto sm:rounded">
                <h1 className="">アカウントの作成</h1>
                <div className="flex flex-col w-full justify-center items-center">
                    <input className="w-full border-solid border-2 rounded p-2 outline-none my-1 max-w-sm" type="text" placeholder="姓" onChange={changeLastName} />
                    <input className="w-full border-solid border-2 rounded p-2 outline-none my-1 max-w-sm" type="text" placeholder="名" onChange={changeFirstName} />
                </div>
                <p className="text-red-600">{nameError}</p>
                <input className="border-solid border-2 rounded p-2 w-full outline-none max-w-sm my-1" type="text" placeholder="メールアドレス" onChange={changeMail} />
                <p className="text-red-600">{mailError}</p>
                <div className="border-solid border-2 rounded p-2 w-full flex max-w-sm my-1">
                    <input className="w-4/5 outline-none" type={togglePassword ? "text" : "password"} placeholder="パスワード(半角英数字記号6~32文字)" onChange={changePassword} />
                    <input className="w-1/5 outline-none bg-white opacity-50" type="button" value={togglePassword ? "非表示" : "表示"} onClick={togglePasswordDisplay}/>
                </div>
                <p className="text-red-600">{passwordError}</p>
                <div className="flex justify-between w-full max-w-sm">
                    <label className="w-5/12 border-solid border-2 rounded p-2 outline-none my-1 flex items-center">
                        <input type="radio" value="男" name="gender" id="man" onChange={changeGender} />
                        <lavel className="pl-4">男</lavel> 
                    </label>
                    <label className="w-5/12 border-solid border-2 rounded p-2 outline-none my-1 flex items-center">
                        <input type="radio" value="女" name="gender" onChange={changeGender} />
                        <lavel className="pl-4">女</lavel>
                    </label>
                </div>
                <div className={styles.agree}>
                    <input id="agree" className="checkBox" type="checkbox" onClick={toggleChack} />
                    <label for="agree">利用規約、プライバシーポリシーに同意する</label>
                </div>
                <Link href="/info/tos"><a className={styles.link} target="blank">利用規約</a></Link>
                <Link href="/info/privacy"><a className={styles.link} target="blank">プライバシーポリシー</a></Link>
                <p className={styles.alert}>{alert}</p>
                <input
                    className="border-none rounded p-2 w-full outline-none max-w-sm my-1 bg-blue-200 cursor-pointer"
                    type="button"
                    value="作成する"
                    onClick={check && firstName && lastName && mail && password && gender ? handleSubmit : checkAlert} />
                <Link href="/sign/signin">
                    <a className="w-full max-w-sm my-4"><input type="button" value="ログイン" className="cursor-pointer border-solid border-2 rounded p-2 w-full outline-none max-w-sm my-1 bg-white"/></a>
                </Link>
            </article>
        </Layout>
    )
}