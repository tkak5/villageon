import Layout, {phoneNumber, url} from '../../components/layout'
import Head from 'next/head'
import styles from '../../styles/posts.module.scss'
import { getAllPostIds, getPostData, getAttention, getBan } from '../../lib/posts'
import Link from 'next/link'
import { useRouter } from 'next/router'


import initFirebase from '../../components/initFirebase'
import firebase from "firebase/app"
import 'firebase/auth'
import { useState, useEffect } from 'react'
require('firebase/auth')
require("firebase/firestore")

initFirebase()
var db = firebase.firestore()

/*
export async function getStaticPaths () {
    //return a list of possible value for id
    const ids = await db.collection('events').get().then(function(querySnapshot) {
        var ids = []
        querySnapshot.docs.forEach(doc => {
          ids.push(doc.id)
        })
        return ids
    })
    const paths = ids.map(id => {
        return {
            params: {
                id: id
            }
        }
    })
    //const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}
*/

export async function getServerSideProps() {
    //fetch necessary data for 
    const eventData = await db.collection('events').orderBy("date").get().then(function(querySnapshot) {
        var datas = {}
        querySnapshot.docs.forEach(doc => {
          datas[doc.id] = doc.data()
        })
        return datas
    })
    //const postData = await getPostData(params.id)
    /*
    const attention = await getAttention()
    const ban = await getBan()
    */
    return {
        props: {
            eventData,
        }
    }
}

export default function Post ({eventData}) {
    const router = useRouter()
    const { pid } = router.query

    const [user, setUser] = useState("")
    const [first, setFirst] = useState("")
    const [last, setLast] = useState("")
    const [gender, setGender] = useState("man")
    const [mount, setMount] = useState(true)
    const [display, setDisplay] = useState(false)
    const [applied, setApplied] = useState(false)
    const [verification, setVerification] = useState(false)
    const [error, setError] = useState("")

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          setUser(user)
        } else {
          // No user is signed in.
        }
    })

    useEffect(() => {
        if (mount) {
            firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                  // User is signed in.
                  setUser(user)
                  setMount(false)
                } else {
                  // No user is signed in.
                }
            })
        }
    })

    const submitApplication = (event) => {
        if (gender == "man") {
            db.collection("events").doc(eventData[pid].id).update({
                mens: firebase.firestore.FieldValue.arrayUnion({
                    id: user.uid,
                    mail: user.email,
                    name: user.displayName,
                })
            }).then(function(){
                setApplied(true)
            }).catch(function(error){
                setError(error.message)
            })
        } else {
            db.collection("events").doc(eventData[pid].id).update({
                womens: firebase.firestore.FieldValue.arrayUnion({
                    id: user.uid,
                    mail: user.email,
                    name: user.displayName,
                })
            }).then(function(){
                setApplied(true)
            }).catch(function(error){
            })
        }        
    }


    const displayPurchase = (event) => {
        var gender = event.target.id
        setGender(gender)
        setDisplay(true)
    }

    const hidePurchase = () => {
        setDisplay(false)
    }

    const submitVerification = ()　=> {
        var actionCodeSettings = {
            url: `${url}${eventData[pid].id}`,
        }
        user.sendEmailVerification(actionCodeSettings).then(
            function() {
                setVerification(true)
            }
        )
    }

    return (
        <Layout>
            <Head>
                <title>{eventData[pid].title}</title>
            </Head>
            <article className={styles.articleWrapper}>
                <div className={styles.meta}>
                    <h1>{eventData[pid].title}</h1>
                    <p>日時 {eventData[pid].date}</p>
                    <p>場所 {eventData[pid].place}</p>
                    <p>住所 {eventData[pid].address}</p>
                    <div className={styles.feeWrapper}>
                        {!display ? 
                            <div>
                                <div className={styles.fee}>
                                    <p className={styles.mens}>男性</p>
                                    <p>1人</p>
                                    <p>{eventData[pid].mensPrice}円</p>
                                    <input id="man" type="button" value="予約" onClick={displayPurchase}/>
                                </div>
                                <div className={styles.fee}>
                                    <p className={styles.womens}>女性</p>
                                    <p>1人</p>
                                    <p>{eventData[pid].womensPrice}円</p>
                                    <input id="woman" type="button" value="予約" onClick={displayPurchase}/>
                                </div>
                            </div>
                        : user ?
                            user.emailVerified ?
                                !applied ?
                                    <div className={styles.purchase}>
                                        <div className={styles.hideButtonWrapper}>
                                            <div className={styles.hideButton} onClick={hidePurchase}><p>×</p></div>
                                        </div>
                                        {gender == "man" ? 
                                            <div className={styles.fee}>
                                                <p className={styles.mens}>男性</p>
                                                <p>1人</p>
                                                <p>{eventData[pid].mensPrice}円</p>
                                            </div>
                                        :
                                            <div className={styles.fee}>
                                                <p className={styles.womens}>女性</p>
                                                <p>1人</p>
                                                <p>{eventData[pid].womensPrice}円</p>
                                            </div>
                                        }
                                        <p>以上に間違いがないかを確認したのち、下のボタンをクリックしてください</p>
                                        <input type="button" value="予約する" onClick={submitApplication}/>
                                    </div>
                                :
                                    <div className={styles.purchase}><p>予約しました</p></div>
                            :
                                <div className={styles.purchase}>
                                    {!verification ?
                                        <p>
                                            <p className={styles.link} onClick={submitVerification}>メールアドレスの確認</p>
                                            が完了したのちご予約できます
                                        </p>
                                    :
                                        <p>
                                            ご登録いただいてるメールアドレスに確認メールを送りました。
                                        </p>
                                    }
                                </div>
                        :
                            <div className={styles.purchase}>
                                <p>
                                    <Link href="/sign/signup">
                                        <a className={styles.link}>アカウントを作成</a>
                                    </Link>
                                    し、メールアドレスの確認が完了したのちにご予約できます
                                </p>
                            </div>
                        }
                        <p>{error}</p>
                    </div>
                </div>
                <div className={styles.requirement}>
                    <h2>参加条件</h2>
                    <div className={styles.reqDetails}>
                        <div className={styles.reqContent}><p>男性 {eventData[pid].mensRequirement}</p></div>
                        <div className={styles.reqContent}><p>女性 {eventData[pid].womensRequirement}</p></div>
                    </div>
                    <p>
                        <strong>
                            独身・対象年齢であること
                        </strong>
                        <br/>
                        参加条件が確認できない、該当しない場合ご参加をお断りします。その場合参加費のご返金はございません。
                    </p>
                </div>
                <div className={styles.content}>
                    <h2>キャンセル</h2>
                    <p>開催4日前までは<Link href="/user/details"><a>ユーザー情報</a></Link>からキャンセルできます。</p>
                    <p>開催3日前より当団体既定のキャンセル料金が発生し、web上でのキャンセルができません。以下の電話番号までご連絡ください。</p>
                    <p>{phoneNumber}</p>
                </div>
                <div className={styles.content}>
                    <p>{eventData[pid].content}</p>
                </div>
                
                <div className={styles.attention}>
                    <h2>注意事項</h2>
                    <ul>
                        <li>受付は開始時間の15分前から行います。</li>
                        <li>身分証明証の提示が必要です。確認ができない場合ご参加いただけません。</li>
                        <li>ドレスコードはありません。</li>
                        <li>駐車場はありません。</li>
                        <li>手荷物の紛失盗難につきましては、一切の責任を負いかねますのでご注意ください。</li>
                    </ul>
                </div>
                <div className={styles.ban}>
                    <h2>禁止事項</h2>
                    <ul>
                        <li>真剣な恋愛以外の目的で参加すること</li>
                        <li>身分を偽って参加すること</li>
                        <li>ほかのお客様に対する迷惑行為</li>
                    </ul>
                    <p>悪質な場合、法的手段を講じる場合がございます。</p>
                </div>
                
            </article>
        </Layout>
    )
}

