import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

import initFirebase from '../components/initFirebase'
import firebase from "firebase/app"
import 'firebase/auth'
import { useEffect, useState } from 'react'
require('firebase/auth')
require("firebase/firestore")
require("firebase/storage")

initFirebase()
var db = firebase.firestore()
var storage = firebase.storage()
var storageRef = storage.ref()


const postsDirectory = path.join(process.cwd(), 'posts')
const attentionDirectory = path.join(process.cwd(), 'attention')


export function getSortedPostsData() {
    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames.map(fileName => {
        //remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '').toString()

        //Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        //use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents)

        //Combine the data with the id
        return {
            id,
            ...matterResult.data
        }
    })
    
    //Sort posts by date
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1
        } else {
            return -1
        }
    })
}

export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory)

    return fileNames.map(fileName => {
        return {
            params: {
                id: fileName.replace(/\.md$/, '')
            }
        }
    })
}


export async function getPostData(id) {
    const fullPath = path.join(postsDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    //use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    //use remark convert markdown into html string
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content)

    const contentHtml = processedContent.toString()
    return {
        id,
        contentHtml,
        ...matterResult.data
    }
}

export async function getAttention() {
    const fullPath = path.join(attentionDirectory, 'attention.md')
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    const processedContent = await remark()
        .use(html)
        .process(matterResult.content)

    const contentHtml = processedContent.toString()
    return {
        contentHtml,
        ...matterResult.data
    }
}

export async function getBan() {
    const fullPath = path.join(attentionDirectory, 'ban.md')
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    const processedContent = await remark()
        .use(html)
        .process(matterResult.content)

    const contentHtml = processedContent.toString()
    return {
        contentHtml,
        ...matterResult.data
    }
}