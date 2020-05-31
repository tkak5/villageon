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
        <ul className="
          flex justify-center flex-wrap p-6 my-6
          sm:p-0">
          {allPostsData.map(({ id, date, title }) => (
            <li className="w-full sm:w-5/12 md:w-2/5 lg:w-1/4 sm:mx-2 md:mx-2">
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>
                  <div className="my-4 w-full bg-white shadow h-64 flex items-center justify-center flex-col">
                    <p className="w-full m-2 text-center">{title}</p>
                    <p className="w-full m-2 text-center">{date}</p>
                  </div>
                </a>
              </Link>
            </li>
          ))}
          {allPostsData.map(({ id, date, title }) => (
              <li className="
              my-4 w-full flex items-center justify-center
              sm:w-5/12 sm:mx-2
              md:w-2/5 md:mx-2
              lg:w-1/4"></li>
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