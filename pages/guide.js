import Layout from '../components/layout'
import Head from 'next/head'
import styles from '../styles/guide.module.scss'
import { useState } from 'react'
import Link from 'next/link'
import AnimateHeight from 'react-animate-height'
import { getQasData } from '../lib/qas'

export async function getStaticProps() {
    const allQasData = getQasData()
    return {
      props: {
        allQasData
      }
    }
  }

export default function Guid ({ allQasData }) {
    const [element, setElement] = useState(0)

    const clickToggle = (event) => {
        var eventId = event.target.id
        if ( eventId != element) {
            setElement(eventId)
        } else {
            setElement("")
        }
    }
    return (
        <Layout>
            <Head>
                <title>Guide</title>
            </Head>
            <article className={styles.guideWrapper}>
                <div className={styles.guide}>
                    <h1 className={styles.title}>参加ガイド</h1>
                    <ul className={styles.contentWrapper}>
                        <li>
                            <p className={styles.subTitle}>1. アカウントの作成</p>
                            <p className={styles.guideContent}>content</p>
                        </li>
                        <li>
                            <p className={styles.subTitle}>2. イベントの詳細画面から応募</p>
                            <p>content</p>
                        </li>
                        <li>
                            <p className={styles.subTitle}>3. title</p>
                            <p>content</p>
                        </li>
                    </ul>
                </div>
                <div className={styles.qa}>
                    <h1>よくある質問</h1>
                    <ul>
                        {allQasData.map(({ id, question, answer }) => (
                            <li key={id}>
                                <div className={styles.questionWrapper}>
                                    <p><button onClick={clickToggle} id={id}>{question}</button></p>
                                </div>
                                <AnimateHeight
                                    duration={300}
                                    height={element === id ? 'auto' : 0}>
                                    <p className={styles.answer}>{answer}</p>
                                </AnimateHeight>
                            </li>
                        ))}
                    </ul>
                </div>
                
            </article>
        </Layout>
    )
}