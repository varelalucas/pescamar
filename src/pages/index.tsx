import type { NextPage } from 'next'
import Head from 'next/head'
import { AboutUs } from '../components/AboutUs'
import { Header } from '../components/Header'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>
          Página Inicial | Pescamar
        </title>
      </Head>
      <Header />
      <main>
        <AboutUs />
      </main>
    </div>
  )
}

export default Home
