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
    const [menu, setMenu] = useState(false)
    
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

    const toggleMenu = () => {
        setMenu(!menu)
    }
    
    
    return (
        <div>
            <Head>
                <link rel="icon" href="/images/logo-no-text.png" />
                <meta
                    name="description"
                    content={metaSentence}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <Default>
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
            </Default>
            <Mobile>
                <header className={styles.header}>
                    <div className="flex justify-center items-center w-full">
                        <Link href="/">
                            <a><img className="h-6 w-6" src="/images/logo-no-text.png"/></a>
                        </Link>
                    </div>
                    <div className="flex fixed top-0 right-0 h-10 justify-center items-center z-30 px-6">
                            <img className="h-4 w-4" 
                            src={!menu ? "/images/menu-icon.png" : "/images/cross-icon.png"}
                            onClick={toggleMenu}
                            />
                    </div>
                    <div className={!menu ? "hidden" : "flex fixed inset-0 bg-white z-20 w-full h-full justify-center"}>
                        <ul className="my-10 flex items-center flex-col">
                            <Link href="/">
                                <a>
                                    <li className="my-6">イベント</li>
                                </a>
                            </Link>
                            <Link href="/user/details">
                                <a>
                                    <li className="my-6">ユーザー情報</li>
                                </a>
                            </Link>
                            <Link href="/info/privacy">
                                <a>
                                    <li className="my-6">団体情報</li>
                                </a>
                            </Link>
                            <li className="my-6">{phoneNumber}</li>
                            <li className="my-6">{mail}</li>
                            <Link href="/">
                                <a>
                                    <li className="my-6"><img className="h-16 w-16" src="/images/logo-text.png"/></li>
                                </a>
                            </Link>
                            
                        </ul>
                    </div>
                    

                </header>
            </Mobile>
            <main className="pt-10">{children}</main>
            
                <footer className={styles.footer}>
                    <div className={styles.contact}>
                        <h2 className="">{phoneNumber}</h2>
                        <p className="">受付時間: {phoneTime}</p>
                        <h2 className="">{mail}</h2>
                        <p className="">受付時間： {mailTime}</p>
                    </div>
                    <div className={styles.footerInfo}>
                        <div className="flex flex-col justify-center items-center">
                            <Link href="/info/tos">
                                <a className="my-2">利用規約</a>
                            </Link>
                            <Link href="/info/privacy">
                                <a className="my-2">プライバシーポリシー</a>
                            </Link>
                            <Link href="/info/transaction">
                                <a className="my-2">特定商取引法に基づく表記</a>
                            </Link>
                            <Link href="/">
                                <a className="my-2"><img className="h-16 w-16" src="/images/logo-text.png"/></a>
                            </Link>
                            <div className="">
                                <p className="text-xs">©️2020 Takaaki Miwa</p>
                            </div>
                        </div>
                    </div>
                </footer>
            
        </div>
    )
}