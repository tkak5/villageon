import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Link from 'next/link'
import styles from '../styles/index.module.scss'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <ul className={styles.mainWrapper}>
          {allPostsData.map(({ id, date, title }) => (
            <Link href="/posts/[id]" as={`/posts/${id}`}>
              <a>
                <li className={styles.posts} key={id}>
                  <p>{title}</p>
                  <p>{date}</p>
                </li>
              </a>
            </Link>
          ))}
          {allPostsData.map(({ id, date, title }) => (
              <li className={styles.empty}></li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}