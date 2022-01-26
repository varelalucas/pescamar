import { NextPage } from 'next'
import styles from './Footer.module.scss'

const Footer: NextPage = () => {
  return (
    <footer className={styles.footer}>
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe 
            id="gmap_canvas" 
            src="https://maps.google.com/maps?q=1633%20R.%20Dr.%20Paulo%20Carneiro&t=&z=13&ie=UTF8&iwloc=&output=embed" 
            frameBorder={0} 
            scrolling="no" 
          />
        </div>
      </div>
      <div className={styles.footercontent}>
        <div className="container">
          <div className={styles.rights}>
            <p>Todos os direitos reservados © Pescamar 2022</p>
            <a href="https://lucassites.com.br/" target="_blank" rel="noopener noreferrer">
              <b>Desenvolvido por</b> Lucas Varela
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { Footer }