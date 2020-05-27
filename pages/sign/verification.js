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
require("firebase/firestore")

initFirebase()
var db = firebase.firestore()

export default function verification() {
    const [user, setUser] = useState("")
    const [mount, setMount] = useState(true)
    const [verification, setVerification] = useState(false)

    useEffect(() => {
        if (mount) {
            firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                    // User is signed in.
                    setUser(user)
                } else {
                    // No user is signed in.
                }
            })
        }
        return function cleanup() {
            setMount(false)
        }
    })

    const submitVerification = ()　=> {
        var actionCodeSettings = {
            url: "http://localhost:3000/user/details",
        }
        user.sendEmailVerification(actionCodeSettings).then(function() {
            setVerification(true)
        }).catch(function(error) {
        })
    }


    return (
        <Layout>
            <Head>
                <title>verification</title>
            </Head>
            <article className={styles.signWrapper}>
                <h2>ご登録頂いたメールアドレスに確認メールを送りました。</h2>
                <p className={styles.alert}>こちらのメールから改めてログインすることでご予約が可能となります。</p>
                <p>しばらくしてもメールが届かない場合は以下のボタンをクリックしてください。</p>
                <input type="button" value={verification ? "送信しました" : "再送信"} onClick={verification ? "" : submitVerification}/>
            </article>
        </Layout>
    )
}