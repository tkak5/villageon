import Layout from '../../components/layout'
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
import { set } from 'date-fns'
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

export default function admin({ allPostsData }) {
    const [user, setUser] = useState("")
    const [mount, setMount] = useState(true)
    
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
                        if (!doc.data().admin) {
                            Router.push("/")
                        } else {
                            
                        }
                    } else {
                    }
                })
            }
        }        
    })


    return (
        <Layout>
            <Head>
                <title>admin</title>
            </Head>
            <article className={styles.userWrapper}>
                <div className={styles.detailWrapper}>
                    <p>admin</p>
                </div>
            </article>
        </Layout>
    )
}