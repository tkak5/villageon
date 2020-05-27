import Head from 'next/head'
import Link from 'next/link'
import styles from './layout.module.scss'
import { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'

import initFirebase from '../components/initFirebase'
import firebase from "firebase/app"
import 'firebase/auth'
require('firebase/auth')

initFirebase()

export const siteTitle = "villageon"
export const phoneNumber = "080-8585-0777"
export const mail = "villageon55@gmail.com"
export const phoneTime = "10:00~18:00"
export const mailTime = "24時間"
export const url = "http://villageon.now.sh"
const metaSentence = "Villageonnはあなたの真剣な出会いをサポートします。たくさんの方に幸せを見つけて欲しいとの思いから、地域最安値に挑戦中。真剣な方のみ、ご参加を受け付けております。"

const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992})
    return isDesktop ? children : null
}

const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991})
    return isTablet ? children : null
}

const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
}

const Default = ({children }) => {
    const isNotMobile = useMediaQuery({minWidth: 768})
    return isNotMobile ? children: null
}

export default function Layout ({ children, home }) {
    const [user, setUser] = useState("")
    const [mount, setMount] = useState(true)
    
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
    
    
    return (
        <div>
            <Head>
                <link rel="icon" href="/favi.ico" />
                <meta
                    name="description"
                    content={metaSentence}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className={styles.header}>
                <div className={styles.logoSpace}>
                    <Link href="/">
                        <a>
                            <img
                                src="/images/logo-no-text.png"
                                className={styles.headerImage}
                                alt={siteTitle}
                            />
                        </a>
                    </Link>
                </div>
                <ul className={styles.headerItemsWrapper}>
                    <li className={styles.headerItems}>
                        <div className={styles.headerDisplay}>
                            <Link href="/">
                                <a><p>イベント</p></a>
                            </Link>
                        </div>
                    </li>
                    
                    <li className={styles.headerItems}>
                        <div className={styles.headerDisplay}>
                            
                            <Link href={user ? "/user/details" : "/sign/signin"}>
                                <a><p>{user ? "ユーザー情報" :"ログイン"}</p></a>
                            </Link>
                        </div>
                    </li>
                    
                    {/*
                    <li className={styles.headerItems}>
                        <div className={styles.headerDisplay}>
                            <Link href="/guide">
                                <a><p>参加ガイド/よくある質問</p></a>
                            </Link>
                        </div>
                    </li>
                    */}
                    <li className={styles.headerItems}>
                        <div className={styles.headerDisplay}>
                            <Link href="/info/privacy">
                                <a><p>団体情報</p></a>
                            </Link>
                        </div>
                    </li>
                </ul>
            </header>
            
            <main className={styles.main}>{children}</main>
            <footer className={styles.footer}>
                <div className={styles.contact}>
                    <p className={styles.contactItems}>{phoneNumber}</p>
                    <p className={styles.contactTime}>受付時間: {phoneTime}</p>
                    <p className={styles.contactItems}>{mail}</p>
                    <p className={styles.contactTime}>受付時間： {mailTime}</p>
                </div>
                <div className={styles.footerInfo}>
                    <div className={styles.logoSpace}>
                        <Link href="/">
                            <a>
                                <img
                                    src="/images/logo-no-text.png"
                                    className={styles.headerImage}
                                    alt={siteTitle}
                                />
                                <p>villageon</p>
                            </a>
                        </Link>
                    </div>
                    <div>
                    </div>
                    <div className={styles.footerRight}>
                        <div className={styles.footerRightItems}>
                            <Link href="/info/tos">
                                <a>利用規約</a>
                            </Link>
                            <Link href="/info/privacy">
                                <a>プライバシーポリシー</a>
                            </Link>
                            <Link href="/info/transaction">
                                <a>特定商取引法に基づく表記</a>
                            </Link>
                        </div>
                        <div className={styles.footerRightItems}><p>©️2020 Takaaki Miwa</p></div>
                    </div>
                </div>
            </footer>
        </div>
    )
}