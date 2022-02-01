/* eslint-disable @next/next/no-img-element */
import { NextPage } from 'next'
import styles from './AboutUs.module.scss'

const AboutUs: NextPage = () => {
  return (
    <section className={styles.aboutus} id="sobrenos">
      <div className="container">
        <div className={styles.title}>
          <h4>
            Sobre nós
          </h4>
          <p>
            Veja um pouco sobre nós
          </p>
        </div>
        <div className={styles.content}>
          <div className={styles.item}>
            <div className={styles.flex}>
              <div className={styles.image}>
                <img src={'/image.png'} alt="Image" />
              </div>
              <div className={styles.textos}>
                <h4>
                  A empresa
                </h4>
                <p> 
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta quas ipsa corrupti quam quaerat sint officia hic earum necessitatibus, delectus aliquid praesentium ullam possimus tempora deleniti, obcaecati maiores autem facere?  ipsum dolor sit, amet consectetur adipisicing elit. Soluta quas ipsa corrupti quam quaerat sint officia hic earum necessitatibus, delectus aliquid praesentium ullam possimus tempora deleniti, obcaecati maiores autem facere?
                </p>
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.flex}>
              <div className={styles.textos}>
                <h4>
                  Controle de qualidade
                </h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta quas ipsa corrupti quam quaerat sint officia hic earum necessitatibus, delectus aliquid praesentium ullam possimus tempora deleniti, obcaecati maiores autem facere?  ipsum dolor sit, amet consectetur adipisicing elit. Soluta quas ipsa corrupti quam quaerat sint officia hic earum necessitatibus, delectus aliquid praesentium ullam possimus tempora deleniti, obcaecati maiores autem facere?
                </p>
              </div>
              <div className={styles.image}>
                <img src={'/image.png'} alt="Image" />
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.flex}>
              <div className={styles.image}>
                <img src={'/image.png'} alt="Image" />
              </div>
              <div className={styles.textos}>
                <h4>
                  Nossos produtos
                </h4>
                <p>
                  ipsum dolor sit, amet consectetur adipisicing elit. Soluta quas ipsa corrupti quam quaerat sint officia hic earum necessitatibus, delectus aliquid praesentium ullam possimus tempora deleniti, obcaecati maiores autem facere?  ipsum dolor sit, amet consectetur adipisicing elit. Soluta quas ipsa corrupti quam quaerat sint officia hic earum necessitatibus, delectus aliquid praesentium ullam possimus tempora deleniti, obcaecati maiores autem facere?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { AboutUs }