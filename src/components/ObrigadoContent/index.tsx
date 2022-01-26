/* eslint-disable @next/next/no-img-element */
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import styles from './ObrigadoContent.module.scss'
import { BiArrowToLeft } from 'react-icons/bi'

const ObrigadoContent: NextPage = () => {
  const router = useRouter()

  return (
    <section className={styles.error}>
      <div className="container">
        <div className={styles.flex}>
          <div className={styles.item}>
            <div className={styles.card}>
              <div className={styles.title}>
                <div className={styles.back}>
                  <a onClick={() => router.back()}><i><BiArrowToLeft /></i> Voltar</a>
                </div>
                <h4>Obrigado !</h4>
                <p>
                  O email foi enviado com sucesso! em breve iremos entrar em contato com você!
                </p>
                <p>
                  Acha que isso é um erro? Entre em <a>contato</a>
                </p>
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <img src='/mailsent.svg' alt="Ilustração 404" />
          </div>
        </div>
      </div>
    </section>
  )
}

export { ObrigadoContent }