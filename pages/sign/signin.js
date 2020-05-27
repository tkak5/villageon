import Layout from '../../components/layout'
import Head from 'next/head'
import styles from '../../styles/sign.module.scss'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Router from 'next/router'

import initFirebase from '../../components/initFirebase'
import firebase from "firebase/app"
import 'firebase/auth'
require('firebase/auth')

initFirebase()

export default function SignIn () {
    const [mail, setMail] = useState([])
    const [password, setPassword] = useState([])
    const [MailError, setMailError] = useState("")
    const [PasswordError, setPasswordError] = useState("")
    const [error, setError] = useState("sample")
    const [mount, setMount] = useState(true)
    const [togglePassword, setTogglePassword] = useState(false)

    useEffect(() => {
        if (mount) {
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

    const changeMail = event => {
        const mail = event.target.value
        setMail(mail)
    }
    const changePassword = event => {
        const password = event.target.value
        setPassword(password)
    }
    const handleSubmit = () => {
        setMailError("")
        setPasswordError("")
        firebase.auth().signInWithEmailAndPassword(mail, password).then(
            function() {
                Router.push("/user/details")
            }).catch(
            function(error) {
                if (error.code == "auth/invalid-email") {
                    setMailError("メールアドレスの形式が不正確です")
                } else if (error.code == "auth/user-disabled") {
                    setMailError("ユーザーが無効になっています")
                }　else if (error.code == "auth/user-not-found") {
                    setMailError("このメールアドレスは使われていません")
                }　else if (error.code == "auth/wrong-password") {
                    setPasswordError("パスワードが間違っています")
                }
            })
    }

    const togglePasswordDisplay = () => {
        setTogglePassword(!togglePassword)
    }

    return (
        <Layout>
            <Head>
                <title>SignIn</title>
            </Head>
                <article className={styles.signWrapper}>
                    <h1 className={styles.title}>ログイン</h1>
                    <form className={styles.form}>
                        <input className={styles.input} type="text" placeholder="email" onChange={changeMail} />
                        <p className={styles.alert}>{MailError}</p>
                        <div className={styles.passBlock}>
                            <input className={styles.passInput} type={togglePassword ? "text" : "password"} placeholder="パスワード" onChange={changePassword} />
                            <input className={styles.passButton} type="button" value={togglePassword ? "非表示" : "表示"} onClick={togglePasswordDisplay}/>
                        </div>
                        <p className={styles.alert}>{PasswordError}</p>
                        <input className={styles.checked} type="button" value="ログイン" onClick={handleSubmit} />
                    </form>
                    <div className={styles.bottom}>
                        <Link href="/sign/signup" >
                            <a><button className={styles.button}>アカウントを作成する</button></a>
                        </Link>
                    </div>
                </article>
        </Layout>
    )
}