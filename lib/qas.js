import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const qasDirectory = path.join(process.cwd(), 'q&a')

export function getQasData() {
    const fileNames = fs.readdirSync(qasDirectory)
    const allQasData = fileNames.map(fileName => {
        //remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '')

        //Read markdown file as string
        const fullPath = path.join(qasDirectory, fileName)
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
    return allQasData
}