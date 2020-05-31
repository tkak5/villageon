import Head from 'next/head'
import Link from 'next/link'
import styles from './info.module.scss'
import Layout from './layout'

export default function InfoLayout ({ children }) {
    return (
        <Layout>
            <div className="mt-4 flex flex-col justify-center items-center max-w-3xl mx-auto sm:flex-row sm:justify-around">
                <Link href="/info/privacy">
                    <a className="my-2">プライバシーポリシー</a>
                </Link>
                <Link href="/info/tos">
                    <a className="my-2">利用規約</a>
                </Link>
                <Link href="/info/transaction">
                    <a className="my-2">特定商取引法に基づく表記</a>
                </Link>
            </div>
            <main>{children}</main>
        </Layout>
    )
}

