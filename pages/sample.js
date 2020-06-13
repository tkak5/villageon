import Layout, { phoneNumber, url }from '../components/layout'
import Head from 'next/head'

import initFirebase from '../components/initFirebase'
import firebase from "firebase/app"
import 'firebase/auth'
require('firebase/auth')
require("firebase/firestore")

initFirebase()
var db = firebase.firestore()

export default function Sample (props) {
    return (
        <Layout>
            <Head>
                <title>sample</title>
            </Head>
            <div>{props.user.uid}</div>
        </Layout>
    )
}