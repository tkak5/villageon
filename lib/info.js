import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const infoDirectory = path.join(process.cwd(), 'info')

export async function getPrivacy() {
    const fullPath = path.join(infoDirectory, 'privacy.md')
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

export async function getTos() {
    const fullPath = path.join(infoDirectory, 'tos.md')
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

export async function getTransaction() {
    const fullPath = path.join(infoDirectory, 'transaction.md')
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