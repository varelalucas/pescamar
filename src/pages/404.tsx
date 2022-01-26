import { NextPage } from 'next'
import Head from 'next/head'
import { ErrorPage } from '../components/ErrorPage'

const obrigadoPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>
          Página Não Encontrada | Pescamar
        </title>
      </Head>
      <main>
        <ErrorPage />
      </main>
    </div>
  )
}

export default obrigadoPage