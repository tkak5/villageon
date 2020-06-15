import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Link from 'next/link'
import styles from '../styles/index.module.scss'
import { getSortedPostsData } from '../lib/posts'

import initFirebase from '../components/initFirebase'
import firebase from "firebase/app"
import 'firebase/auth'
require('firebase/auth')
require("firebase/firestore")

initFirebase()
var db = firebase.firestore()


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
      allEventsData
    }
  }
}

export default function Home({ allEventsData }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <ul className="
          flex justify-center flex-wrap p-6 my-6">
          {allEventsData.map((event) => (
            <li className="w-full sm:w-1/2 lg:w-1/3 sm:p-2 lg:p-4" key={event.id}>
              <Link href="/posts/[pid]" as={`/posts/${event.id}`}>
                <a>
                  <div className="my-4 w-full bg-white shadow h-64 flex items-center justify-center flex-col">
                    <p className="w-full m-2 text-center">{event.title}</p>
                    <p className="w-full m-2 text-center">{event.date}</p>
                  </div>
                </a>
              </Link>
            </li>
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