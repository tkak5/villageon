import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Link from 'next/link'
import styles from '../styles/index.module.scss'
import { getSortedPostsData } from '../lib/posts'
import Spinner from '../components/spinner'

import initFirebase from '../components/initFirebase'
import firebase from "firebase/app"
import 'firebase/auth'
import { useEffect, useState } from 'react'
require('firebase/auth')
require("firebase/firestore")
require("firebase/storage")

initFirebase()
var db = firebase.firestore()
var storage = firebase.storage()
var storageRef = storage.ref()


export async function getServerSideProps() {
  //const allPostsData = "title"

  const allEventsData = await db.collection('events').orderBy("date").get().then(function(querySnapshot) {
    var datas = []
    querySnapshot.docs.forEach(doc => {
      datas.push(doc.data())
    })
    return datas
  })

  
  //const allPostsData = getSortedPostsData()
  
  return {
    props: {
      allEventsData,
    }
  }
}

function Event(props) {
  const [imgUrl, setImgUrl] = useState("")
  const [mount, setMount] = useState(true)
  useEffect(() => {
    if (mount) {
      storageRef.child(`${props.event.id}.png`).getDownloadURL().then(function(url) {
        setImgUrl(url)
        setMount(false)
      }).catch(function(error) {
        storageRef.child('noimage.png').getDownloadURL().then(function(url) {
          setImgUrl(url)
          setMount(false)
        })
      })
    }
  })
  return (
    <li className="p-4 md:w-1/2" key={props.event.id}>
      <Link href="/posts/[pid]" as={`/posts/${props.event.id}`}>
        <a>
          <div className="h-full border-2 border-gray-200 shadow rounded-lg overflow-hidden">
            <img src={imgUrl} className="w-full object-cover object-center"/>
            <div className="p-6 bg-white">
              <h2 className="tacking-widest text-xs title-font font-medium text-gray-500 md-1">{props.event.date}</h2>
              <h1 className="title-font text-lg font-medium text-gray-900 md-3">{props.event.title}</h1>
            </div>
          </div>
        </a>
      </Link>
    </li>
  )
}

export default function Home({ allEventsData }) {
  
  
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="container px-5 py-24 mx-auto">
        <ul className="flex flex-wrap -m-4">
          {allEventsData.map((event) => (
            <Event
              event={event}
            />
          ))}
          {allEventsData.map(({ event }) => (
              <li className="w-full sm:w-1/2 lg:w-1/3 sm:p-2 lg:p-4"></li>
          ))}
        </ul>
        <div className={styles.bannerWrapper}>
          <a className={styles.banner} href="https://machicon.jp/" target="_blank">
            <img title="machicon JAPAN" src="https://machicon.jp/mj_logo400-91.png" alt="全国街コン公式サイト machicon JAPAN"/>
          </a>
        </div>
      </section>
    </Layout>
  )
  
}