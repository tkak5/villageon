import '../styles/global.css'
import Spinner from '../components/spinner'
import React, { useState } from "react"
import Router from "next/router"

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  Router.events.on("routeChangeStart", () => {
      setLoading(true);
  })
  Router.events.on("routeChangeComplete", () => {
      setLoading(false);
  })
  return (
    <>
      <Component {...pageProps} />
      {loading && <Spinner />}
    </>
  )
}