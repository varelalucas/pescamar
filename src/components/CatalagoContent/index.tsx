import { NextPage } from 'next'
import styles from './CatalogoContent.module.scss'

const CatalogoContent: NextPage = () => {
  return (
    <div className="container">
      <div className={styles.title}>
        <h4>
          Nossos produtos
        </h4>
      </div>
      <div className={styles.search}>
        <div className={styles.flex}>
          <div className={styles.categories}>
            <input list="category" placeholder="Pesquise por categoria" />
            <datalist id="category">
              <option value="Internet Explorer" />
              <option value="Firefox" />
              <option value="Chrome" />
              <option value="Opera" />
              <option value="Safari" />
            </datalist>
          </div>
          <div className={styles.fishname}>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export { CatalogoContent }