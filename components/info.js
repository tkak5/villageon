import Head from 'next/head'
import Link from 'next/link'
import styles from './info.module.scss'
import Layout from './layout'

export default function InfoLayout ({ children }) {
    return (
        <Layout>
            <div className={styles.infoWrapper}>
                <Link href="/info/privacy">
                    <a>プライバシーポリシー</a>
                </Link>
                <Link href="/info/tos">
                    <a>利用規約</a>
                </Link>
                <Link href="/info/transaction">
                    <a>特定商取引法に基づく表記</a>
                </Link>
            </div>
            <main>{children}</main>
        </Layout>
    )
}

