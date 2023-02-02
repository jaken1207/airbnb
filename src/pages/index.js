import styles from '@/styles/Home.module.css'
import Header from 'components/Header'
import Head from 'next/head'

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Yuto Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
      {/* Banner */}
    </div>
  )
}
