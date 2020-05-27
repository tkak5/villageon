import InfoLayout from '../../components/info'
import Head from 'next/head'
import styles from '../../styles/info.module.scss'
import { getTos } from '../../lib/info'

export async function getStaticProps() {
    const tos = await getTos()
    return {
        props: {
            tos
        }
    }
}

export default function tos({tos}) {
    return (
        <InfoLayout>
            <Head>
                <title>TOS</title>
            </Head>
            <article className={styles.infoWrapper}>
                <h1>利用規約</h1>
                <div dangerouslySetInnerHTML={{ __html: tos.contentHtml }}/>
            </article>
        </InfoLayout>
    )
}