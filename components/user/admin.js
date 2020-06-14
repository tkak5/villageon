import Link from 'next/link'
import { useState, useEffect } from 'react'
import Router from 'next/router'


import initFirebase from '../../components/initFirebase'
import firebase from "firebase/app"
import 'firebase/auth'
require('firebase/auth')
require("firebase/firestore")

initFirebase()
var db = firebase.firestore()

function NewEvent (props) {
    const [display, setDisplay] = useState(false)
    const [year, setYear] = useState(2020)
    const [month, setMonth] = useState(1)
    const [day, setDay] = useState(1)
    const [title, setTitle] = useState("")
    const [titleError, setTitleError] = useState(false)
    const [place, setPlace] = useState("")
    const [placeError, setPlaceError] = useState(false)
    const [address, setAddress] = useState("")
    const [addressError, setAddressError] = useState(false)
    const [mensPrice, setMensPrice] = useState("")
    const [mensPriceError, setMensPriceError] = useState(false)
    const [womensPrice, setWomensPrice] = useState("")
    const [womensPriceError, setWomensPriceError] = useState(false)
    const [mensApplication, setMensApplication] = useState("")
    const [mensApplicationError, setMensApplicationError] = useState(false)
    const [womensApplication, setWomensApplication] = useState("")
    const [womensApplicationError, setWomensApplicationError] = useState(false)
    const [mensRequirement, setMensRequirement] = useState("")
    const [mensRequirementError, setMensRequirementError] = useState(false)
    const [womensRequirement, setWomensRequirement] = useState("")
    const [womensRequirementError, setWomensRequirementError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [content, setContent] = useState("")
    const [contentError, setContentError] = useState(false)


    const judge = (arg, setArg) => {
        if (!arg) {
            setArg(true)
        } else {
            setArg(false)
        }
    }

    const judgeSubmit = () => {
        judge(title, setTitleError)
        judge(place, setPlaceError)
        judge(address, setAddressError)
        judge(mensPrice, setMensPriceError)
        judge(womensPrice, setWomensPriceError)
        judge(mensApplication, setMensApplicationError)
        judge(womensApplication, setWomensApplicationError)
        judge(mensRequirement, setMensRequirementError)
        judge(womensRequirement, setWomensRequirementError)
        judge(content, setContentError)
        setErrorMessage("赤い枠を埋めてください")
    }

    const submit = () => {
        var id = String(year) + String(month) + String(day)
        var eventDate = `${year}年${month}月${day}日`
        db.collection("events").doc(id).set({
            title: title,
            date: eventDate,
            place: place,
            address: address,
            mensPrice: mensPrice,
            womensPrice: womensPrice,
            mensApplication: mensApplication,
            womensApplication: womensApplication,
            mensRequirement: mensRequirement,
            womensRequirement: womensRequirement,
            content: content,
            id: id,
            mens: [],
            womens: []
        }).then(function() {
            toggleDisplay()
        }).catch(function(error) {
            setErrorMessage(error.message)
        })
    }

    const toggleDisplay = () => {
        setDisplay(!display)
    }


    var yearList = [];
    for (var i=0; i<5; i++) {
        yearList.push(<option key={i.toString()} value={2020+i}>{2020+i}</option>);
    }
    var monthList = [];
    for (var i=0; i<12; i++) {
        monthList.push(<option key={i.toString()} value={1+i}>{1+i}</option>);
    }
    var dayList = [];
    for (var i=0; i<31; i++) {
        dayList.push(<option key={i.toString()} value={1+i}>{1+i}</option>);
    }
    const errorCss = (arg) => {
        if (arg) {
            return ("border rounded p-2 w-full outline-none my-2 max-w-sm border-red-500")
        } else {
            return ("border rounded p-2 w-full outline-none my-2 max-w-sm")
        }
    }

    const priceCss = (arg) => {
        if (arg) {
            return ("border rounded p-2 w-full outline-none my-2 max-w-sm border-red-500 flex")
        } else {
            return ("border rounded p-2 w-full outline-none my-2 max-w-sm flex")
        }
    }

    return (
        <div>
            <div className={display ? "w-full h-full fixed bg-white z-10 inset-0 overflow-auto sample" : "hidden"}>
                
                <div className="flex fixed top-0 right-0 h-10 justify-center items-center z-30 px-6">
                    <img className="h-4 w-4" 
                    src="/images/cross-icon.png"
                    onClick={toggleDisplay}
                    />
                </div>
                <div className="flex flex-col p-4 my-8 justify-center items-center">
                    <input className={errorCss(titleError)} placeholder="タイトル" onChange={e => setTitle(e.target.value)}/>
                    <div className="flex w-full max-w-sm justify-between">
                        <div className="w-1/3 ">
                            <select onChange={e => setYear(e.target.value)} className="rounded border outline-none p-2 w-full">
                                {yearList}
                            </select>
                        </div>
                        <div className="w-1/3 ">
                            <select 
                                onChange={e => setMonth(e.target.value)} 
                                className="rounded border outline-none p-2 w-full">
                                {monthList}
                            </select>
                        </div>
                        <div className="w-1/3 ">
                            <select onChange={e => setDay(e.target.value)} className="rounded border outline-none p-2 w-full">
                                {dayList}
                            </select>
                        </div>
                    </div>
                    <input placeholder="場所" className={errorCss(placeError)} onChange={e => setPlace(e.target.value)}/>
                    <input placeholder="住所" className={errorCss(addressError)} onChange={e => setAddress(e.target.value)}/>
                    <div className={priceCss(mensPriceError)}>
                        <input placeholder="男性料金" className="w-4/5 outline-none" onChange={e => setMensPrice(e.target.value)}/>
                        <div className="w-1/5">円</div>
                    </div>
                    <div className={priceCss(womensPriceError)}>
                        <input placeholder="女性料金" className="w-4/5 outline-none" onChange={e => setWomensPrice(e.target.value)}/>
                        <div className="w-1/5">円</div>
                    </div>
                    <input placeholder="男性募集状況" className={errorCss(mensApplicationError)} onChange={e => setMensApplication(e.target.value)}/>
                    <input placeholder="女性募集状況" className={errorCss(womensApplicationError)} onChange={e => setWomensApplication(e.target.value)}/>
                    <input placeholder="男性年齢制限" className={errorCss(mensRequirementError)} onChange={e => setMensRequirement(e.target.value)}/>
                    <input placeholder="女性年齢制限" className={errorCss(womensRequirementError)} onChange={e => setWomensRequirement(e.target.value)}/>
                    <textarea className={errorCss(contentError)} placeholder="内容" onChange={e => setContent(e.target.value)}/>
                    <p className="text-center text-red-500">{errorMessage}</p>
                    <input 
                        type="button" 
                        value="作成" 
                        className="border rounded p-2 outline-none my-2 bg-white" 
                        onClick={title && place && address && mensPrice && womensPrice && mensApplication && womensApplication && mensRequirement && womensRequirement && content ? submit : judgeSubmit}/>
                </div>
                <style jsx>{`
                .sample {
                    animation: rotation 0.5s ease 0s 1 alternate none running;                  
                } 
                @keyframes rotation {
                    0% {
                        transform: scale(0);
                    }
                    100% {
                        transform: scale(1);
                    }
                }
            `}
            </style>
            </div>
            <div className="flex justify-center align-center py-2">
                <input type="button" value="新規" onClick={toggleDisplay} className="p-2 bg-white rounded border cursor-pointer outline-none"/>
            </div>
        </div>
        
    )
}

function Event (props) {
    return (
        <div className="list-none border-t-2 py-4" key={`admin${props.event.id}`}>
            <Link href="/posts/[id]" as={`/posts/${props.event.id}`}>
                <a><h3 className="text-blue-600 text-center">{props.event.title}</h3></a>
            </Link>
            <p className="text-center">{props.event.date}</p>
            <p className="text-center">{props.event.place}</p>
            <p className="text-center">男性 {props.event.mensPrice}円</p>
            <p className="text-center">女性 {props.event.womensPrice}円</p>
            <p className="text-center">参加予定総数 {props.event.mens.length + props.event.womens.length}人</p>
            <p className="text-center">男性 {props.event.mens.length}人</p>
            {props.event.mens.map((man) => (
                <div className="py-2" key={man.name+man.mail}>
                    <p className="text-center">{man.name}</p>
                    <p className="text-center">{man.mail}</p>
                </div>
            ))}
            <p className="text-center">女性 {props.event.womens.length}人</p>
            {props.event.womens.map((woman) => (
                <div className="py-2" key={woman.name+woman.mail}>
                    <p className="text-center">{woman.name}</p>
                    <p className="text-center">{woman.mail}</p>
                </div>
            ))}
        </div>
    )
}

export default function Admin(props) {
    return (
        <article className="bg-white p-6 mt-6 mb-6 sm:max-w-lg sm:mx-auto">
            <div className="w-full">
                <h2 className="text-center">イベント管理</h2>
                <NewEvent
                    updateEvents={props.updateEvents}       
                />
                <div>
                    {props.events.map((event) => (
                        <Event
                            event={event}
                            key={event.id+"admin"}
                        />
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