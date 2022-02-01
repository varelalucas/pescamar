import { NextPage } from 'next'
import { CatalogoContent } from '../../components/CatalagoContent'
import { Navbar } from '../../components/Navbar'

const catalogoPage: NextPage = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <CatalogoContent />
      </main>
    </>
  )
}

export default catalogoPage