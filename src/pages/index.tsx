import type { NextPage } from 'next'
import Head from 'next/head'
import { AboutUs } from '../components/AboutUs'
import { ContactUs } from '../components/ContactUs'
import { Footer } from '../components/Footer'
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
        <ContactUs />
      </main>
      <Footer />
    </div>
  )
}

export default Home
