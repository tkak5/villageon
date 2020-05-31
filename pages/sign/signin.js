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
    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")
    const [mailError, setMailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
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
        if (!mail) {
            setMailError("入力してください")
        }
        if (!password) {
            setPasswordError("入力してください")
        }
        if (mail && password) {
            firebase.auth().signInWithEmailAndPassword(mail, password).then(function() {
                Router.push("/user/details")
            }).catch(function(error) {
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
    }

    const togglePasswordDisplay = () => {
        setTogglePassword(!togglePassword)
    }

    return (
        <Layout>
            <Head>
                <title>SignIn</title>
            </Head>
                <article className="
                    flex flex-col justify-center items-center bg-white w-full my-6 p-6 shadow
                    sm:max-w-lg sm:mx-auto sm:rounded">
                    <h1 className="text-center">ログイン</h1>
                    <input className="border-solid border-2 rounded p-2 w-full outline-none max-w-sm my-1" type="text" placeholder="email" onChange={changeMail} />
                    <p className="text-red-600">{mailError}</p>
                    <div className="border-solid border-2 rounded p-2 w-full flex max-w-sm my-1">
                        <input className="w-4/5 outline-none" type={togglePassword ? "text" : "password"} placeholder="パスワード" onChange={changePassword} />
                        <input className="w-1/5 outline-none bg-white opacity-50" type="button" value={togglePassword ? "非表示" : "表示"} onClick={togglePasswordDisplay}/>
                    </div>
                    <p className="text-red-600">{passwordError}</p>
                    <input className="border-none rounded p-2 w-full outline-none max-w-sm my-1 bg-blue-200 cursor-pointer" type="button" value="ログイン" onClick={handleSubmit} />
                    <Link href="/sign/signup">
                        <a className="w-full max-w-sm my-4"><input type="button" value="アカウントを作成する" className="cursor-pointer border-solid border-2 rounded p-2 w-full outline-none max-w-sm my-1 bg-white"/></a>
                    </Link>
                </article>
        </Layout>
    )
}