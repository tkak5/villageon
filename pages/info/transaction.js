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
            <article className={styles.infoWrapper}>
                <h1>特定商取引法に基づく表記</h1>
                <div className={styles.info}>
                    <div className={styles.contentWrapper}>
                        <div className={styles.contentLeft}>
                            <p>代表者</p>
                        </div>
                        <div className={styles.contentRight}>
                            <p>{transaction.responsibility}</p>
                        </div>
                    </div>
                    <div className={styles.contentWrapper}>
                        <div className={styles.contentLeft}>
                            <p>メールアドレス</p>
                        </div>
                        <div className={styles.contentRight}>
                            <p>{transaction.mail}</p>
                        </div>
                    </div>
                    <div className={styles.contentWrapper}>
                        <div className={styles.contentLeft}>
                            <p>電話番号</p>
                        </div>
                        <div className={styles.contentRight}>
                            <p>{transaction.phone}</p>
                        </div>
                    </div>
                    <div className={styles.contentWrapper}>
                        <div className={styles.contentLeft}>
                            <p>サービス名</p>
                        </div>
                        <div className={styles.contentRight}>
                            <p>{transaction.group}</p>
                        </div>
                    </div>
                    <div className={styles.contentWrapper}>
                        <div className={styles.contentLeft}>
                            <p>料金</p>
                        </div>
                        <div className={styles.contentRight}>
                            <p>{transaction.price}</p>
                        </div>
                    </div>
                    <div className={styles.contentWrapper}>
                        <div className={styles.contentLeft}>
                            <p>支払い方法</p>
                        </div>
                        <div className={styles.contentRight}>
                            <p>{transaction.payment}</p>
                            <p>※他サイト経由での申し込み時は当該サイト規定に準ずる</p>
                        </div>
                    </div>
                    <div className={styles.contentWrapperLast}>
                        <div className={styles.contentLeft}>
                            <p>キャンセル</p>
                        </div>
                        <div className={styles.contentRight}>
                            <p>{transaction.cancel}</p>
                        </div>
                    </div>
                </div>
            </article>
        </InfoLayout>
    )
}