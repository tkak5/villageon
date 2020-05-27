import InfoLayout from '../../components/info'
import Head from 'next/head'
import styles from '../../styles/info.module.scss'
import { getPrivacy } from '../../lib/info'

export async function getStaticProps() {
    const privacy = await getPrivacy()
    return {
        props: {
            privacy
        }
    }
}

export default function privacy({privacy}) {
    return (
        <InfoLayout>
            <Head>
                <title>privacy</title>
            </Head>
            <article className={styles.infoWrapper}>
                <h1>プライバシーポリシー</h1>
                <div dangerouslySetInnerHTML={{ __html: privacy.contentHtml }}/>
            </article>
        </InfoLayout>
    )
}