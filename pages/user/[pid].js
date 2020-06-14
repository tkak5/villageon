import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Sample () {
    const router = useRouter()
    const { pid } = router.query
    return (
        <div>{pid}</div>
    )
}