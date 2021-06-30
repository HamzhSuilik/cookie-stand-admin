// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

import Main from '../components/Main'
import Footer from '../components/Footer'
import Header from '../components/Header'
import React from 'react'

// import styles from '../tailwindcss/tailwind.css'
// import 'tailwindcss/tailwind.css'
// import '../styles/globals.css'
// import 'tailwindcss/tailwind.css'

// <link href​="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"></link>

export default function Home() {
  return (
    <div>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}
