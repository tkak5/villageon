import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import initFirebase from '../../components/initFirebase'
import firebase from "firebase/app"
import 'firebase/auth'
import { useState, useEffect } from 'react'
require('firebase/auth')
require("firebase/firestore")

initFirebase()
var db = firebase.firestore()


export async function getServerSideProps() {
    const eventData = await db.collection('events').orderBy("date").get().then(function(querySnapshot) {
        var datas = {}
        querySnapshot.docs.forEach(doc => {
          datas[doc.id] = doc.data()
        })
        return datas
    })
    return {
        props: {
            eventData
        }
    }
}

export default function Sample () {
    const router = useRouter()
    const { pid } = router.query
    return (
        <div>{pid}</div>
    )
}