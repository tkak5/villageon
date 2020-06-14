import Link from 'next/link'
import { useState, useEffect } from 'react'
import {phoneNumber} from '../../components/layout'

import initFirebase from '../../components/initFirebase'
import firebase from "firebase/app"
import 'firebase/auth'
require('firebase/auth')
require("firebase/firestore")

initFirebase()
var db = firebase.firestore()


function Event (props) {
    const [cancel, setCancel] = useState(false)
    const [cancelError, setCancelError] = useState(false)
    const [cancelDisplay, setCancelDisplay] = useState(false)
    const [term, setTerm] = useState("")

    const judgeCancel = () => {
        var today = new Date()
        var eventYear = Number(props.event.id.substr(0,4))
        var eventMonth = Number(props.event.id.substr(4,2))-1
        var eventDay = Number(props.event.id.substr(6,2))
        var date2 = new Date(eventYear, eventMonth, eventDay)
        var termDay = (date2 - today) / 86400000;
        setTerm(termDay)
        if (termDay <= 3) {
            setCancelError(true)
        } else {
            submitCancel()
        }
    }

    const submitCancel = () => {
        if (props.gender == "mens") {
            db.collection("events").doc(props.event.id).update({
                mens: firebase.firestore.FieldValue.arrayRemove({
                    id: props.user.uid,
                    mail: props.user.email,
                    name: props.user.displayName,
                })
            }).then(function(){
                setCancel(true)
            }).catch(function(error){
            })
        } else {
            db.collection("events").doc(props.event.id).update({
                womens: firebase.firestore.FieldValue.arrayRemove({
                    id: props.user.uid,
                    mail: props.user.email,
                    name: props.user.displayName,
                })
            }).then(function(){
                setCancel(true)
            }).catch(function(error){
            })
        }
    }

    const displayCancel = () => {
        setCancelDisplay(!cancelDisplay)
    }


    if (cancel) {
        return (
            <div className="list-none border-t-2 py-4">
                <p className="text-center">キャンセルしました。</p>
                <p>{term}</p>
            </div>
        )
    } else {
        return (
            <div className="list-none border-t-2 py-4">
                <div>
                    <div>
                        <Link href="/posts/[id]" as={`/posts/${props.event.id}`}>
                            <a><h3 className="text-blue-600 text-center">{props.event.title}</h3></a>
                        </Link>
                        <p className="text-center">{props.event.date}</p>
                        <p className="text-center">{props.event.place}</p>
                        <div className="">
                            <p className="text-center">{props.gender == "mens" ? "男性" : "女性"} 1人</p>
                            <p className="text-center">{props.gender == "mens" ? props.event.mensPrice : props.event.womensPrice}円</p>
                        </div>
                        {cancelDisplay ? 
                            <div>
                            {cancelError ?
                                <div>
                                    <p className="text-center">web上でキャンセル可能な日にちを超えています。</p>
                                    <p className="text-center">お手数ですが以下の電話番号までご連絡ください</p>
                                    <p className="text-center">{phoneNumber}</p>
                                </div>
                            :
                                <div>
                                    <p className="text-center">上記のイベントの予約をキャンセルしますがよろしいですか</p>
                                    <div className="flex justify-center">
                                        <input 
                                            className="border-solid border-2 rounded p-2 mt-1 bg-white　outline-none mx-1" 
                                            type="button" 
                                            value="はい" 
                                            onClick={(e) => judgeCancel(event.id, event.date, event.place, event.title, "mens", event.price, e)}
                                        />
                                        <input className="border-solid border-2 rounded p-2 mt-1 bg-white　outline-none mx-1" type="button" value="いいえ" onClick={displayCancel}/>
                                    </div>
                                </div>
                            }
                            </div>
                        :
                            <div className="flex flex-col justify-center items-center">
                                <p id={props.event.id} onClick={displayCancel} className="text-red-600 cursor-pointer text-center">キャンセル</p>
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default function Application (props) {

    return (
        <article className="bg-white p-6 mt-6 mb-6 sm:max-w-lg sm:mx-auto">
            <div className="w-full">
                <h2 className="text-center">参加予定のイベントリスト</h2>
                <div>
                        {props.events.map((event) => (
                            <div key={event.id}>
                                {event.mens.map((man) => (
                                    <div key={`${event.id}${man.name}`}>
                                        {man.id == props.user.uid &&
                                            <Event
                                                event={event}
                                                gender="mens"
                                                user={props.user}
                                            />
                                        }
                                    </div>
                                ))}
                                {event.womens.map((woman) => (
                                    <div key={`${event.id}${woman.name}`}>
                                        {woman.id == props.user.uid &&
                                            <Event
                                                event={event}
                                                gender="womens"
                                                user={props.user}
                                            />
                                        }
                                    </div>
                                ))}
                            </div>
                        ))}
                </div>
            </div>
            <style jsx>{`
                .sample {
                    background-color: red;
                } 
            `}
            </style>
        </article>
    )
}