import styles from '@/styles/Home.module.css'
import Banner from 'components/Banner'
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
      <Banner />

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='h-screen text-4xl font-semibold pd-5'>Explore Nearby</h2>
          {/* pull some data from server - API endpoints */}
        </section>
      </main>
    </div>
  )
}

export async function getStaticProps(){
  
}