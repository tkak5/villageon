import InfoLayout from '../../components/info'
import Head from 'next/head'
import styles from '../../styles/info.module.scss'
import { getTransaction } from '../../lib/info'

export async function getStaticProps() {
    const transaction = await getTransaction()
    return {
        props: {
            transaction
        }
    }
}

export default function transaction({transaction}) {
    return (
        <InfoLayout>
            <Head>
                <title>specified commercial transactions</title>
            </Head>
            <article className="bg-white w-full max-w-3xl mx-auto mt-4 mb-8 shadow">
                <h2 className="text-center py-6 m-0">特定商取引法に基づく表記</h2>
                <div className="w-full p-6">
                    <div className="border-t-2 py-4">
                        <p className="font-semibold text-center">代表者</p>
                        <p className="text-center">{transaction.responsibility}</p>
                    </div>
                    <div className="border-t-2 py-4">
                        <p className="text-center font-semibold">メールアドレス</p>
                        <p className="text-center">{transaction.mail}</p>
                    </div>
                    <div className="border-t-2 py-4">
                        <p className="text-center font-semibold">電話番号</p>
                        <p className="text-center">{transaction.phone}</p>
                    </div>
                    <div className="border-t-2 py-4">
                        <p className="text-center font-semibold">サービス名</p>
                        <p className="text-center">{transaction.group}</p>
                    </div>
                    <div className="border-t-2 py-4">
                        <p className="text-center font-semibold">料金</p>
                        <p className="text-center">{transaction.price}</p>
                    </div>
                    <div className="border-t-2 py-4">
                        <p className="text-center font-semibold">支払い方法</p>
                        <p className="text-center">{transaction.payment}</p>
                        <p className="text-center">※他サイト経由での申し込み時は当該サイト規定に準ずる</p>
                    </div>
                    <div className="border-t-2 py-4">
                        <p className="text-center font-semibold">キャンセル</p>
                        <p className="text-center">{transaction.cancel}</p>
                    </div>
                </div>
            </article>
        </InfoLayout>
    )
}