import { NextPage } from 'next'
import Head from 'next/head'
import { ObrigadoContent } from '../components/ObrigadoContent'

const obrigadoPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>
          Obrigado | Pescamar
        </title>
      </Head>
      <main>
        <ObrigadoContent />
      </main>
    </div>
  )
}

export default obrigadoPage