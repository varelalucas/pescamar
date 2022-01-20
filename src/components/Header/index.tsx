import { NextPage } from 'next'
import { Navbar } from '../Navbar'
import styles from './Header.module.scss'

const Header: NextPage = () => {
  return (
    <header className={styles.header}>
      <Navbar />
      <div className={styles.hero}>
        <div className={styles.content}>
          <h4>
            O melhor do mar especialmente selecionado para você
          </h4>
          <p>
            O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro. Este texto não só sobreviveu 5 séculos
          </p>
          <button>
            Veja nossos produtos
          </button>
        </div>
      </div>
    </header>
  )
}

export { Header }