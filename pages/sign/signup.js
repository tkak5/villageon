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
    const [LastName, setLastName] = useState("")
    const [FirstName, setFirstName] = useState("")
    const [gender, setGender] = useState("")
    //error
    const [mailError, setMailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [LastNameError, setLastNameError] = useState("")
    const [FirstNameError, setFirstNameError] = useState("")
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
        setFirstNameError("")
        setLastNameError("")
        setMailError("")
        setPasswordError("")
        setAlert("")
        firebase.auth().createUserWithEmailAndPassword(mail, password).then(
            function() {
                var user = firebase.auth().currentUser
                user.updateProfile({
                    displayName: `${LastName} ${FirstName}`
                })
                db.collection("users").doc(user.uid).set({
                    apllication: [],
                    admin: false,
                    gender: gender,
                    first: FirstName,
                    last: LastName,
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
        setFirstNameError("")
        setLastNameError("")
        setMailError("")
        setPasswordError("")
        setAlert("")
        if (!FirstName) {
            setFirstNameError("入力してください")
            
        } 
        if (!LastName) {
            setLastNameError("入力してください")
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
            <article className={styles.signWrapper}>
                <h1 className={styles.title}>アカウントの作成</h1>
                <form className={styles.form}> 
                    <div className={styles.nameWrapper}>
                        <input className={styles.name} type="text" placeholder="姓" onChange={changeLastName} />
                        <input className={styles.name} type="text" placeholder="名" onChange={changeFirstName} />
                    </div>
                    <div className={styles.nameWrapper}>
                        <p className={styles.alert}>{LastNameError}</p>
                        <p className={styles.alert}>{FirstNameError}</p>
                    </div>
                    <input className={styles.input} type="text" placeholder="メールアドレス" onChange={changeMail} />
                    <p className={styles.alert}>{mailError}</p>
                    <div className={styles.passBlock}>
                        <input className={styles.passInput} type={togglePassword ? "text" : "password"} placeholder="パスワード" onChange={changePassword} />
                        <input className={styles.passButton} type="button" value={togglePassword ? "非表示" : "表示"} onClick={togglePasswordDisplay}/>
                    </div>
                    <p className={styles.alert}>{passwordError}</p>
                    <div className={styles.genderWrapper}>
                        <label className={styles.genderLeft}>
                            <input type="radio" value="男" name="gender" id="man" onChange={changeGender} />
                            <lavel>男</lavel> 
                        </label>
                        <label className={styles.genderRight}>
                            <input type="radio" value="女" name="gender" onChange={changeGender} />
                            <lavel>女</lavel>
                        </label>
                    </div>
                </form>
                <div className={styles.agree}>
                    <input id="agree" className="checkBox" type="checkbox" onClick={toggleChack} />
                    <label for="agree">利用規約、プライバシーポリシーに同意する</label>
                </div>
                <Link href="/info/tos"><a className={styles.link} target="blank">利用規約</a></Link>
                <Link href="/info/privacy"><a className={styles.link} target="blank">プライバシーポリシー</a></Link>
                <p className={styles.alert}>{alert}</p>
                <input
                    className={check && FirstName && LastName && mail && password && gender ? styles.checked : styles.unChecked}
                    type="button"
                    value="作成する"
                    onClick={check && FirstName && LastName && mail && password && gender ? handleSubmit : checkAlert} />
                <div className={styles.bottom}>
                    <Link href="/sign/signin">
                        <a><button className={styles.button}>ログイン</button></a>
                    </Link>
                </div>
            </article>
        </Layout>
    )
}