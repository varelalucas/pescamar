/* eslint-disable @next/next/no-img-element */
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import styles from './Navbar.module.scss'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useState } from 'react'

const Navbar: NextPage = () => {
  const router = useRouter()

  const [open, setOpen] = useState(false)
  const [classActive, setClassActive] = useState(``)

  const toggleNav = () => {
    if (open === true) {
      setOpen(false),
      setClassActive(``)
    }

    if (open === false) {
      setOpen(true),
      setClassActive(`${styles.active}`)
    }
  }

  return (
    <nav className={styles.navbar}>
      <div className="container">
        <div className={styles.flex}>
          <div className={styles.brand}>
            <button onClick={() => router.push('/')}>
              <img className={styles.logo} src={'/logocomprida.png'} alt="Logo | Pescamar" />
            </button>
          </div>
          <div className={`${styles.links} ${classActive}`}>
            <ul>
              <li>
                <button>
                  Início
                </button>
              </li>
              <li>
                <button>
                  Nossos produtos
                </button>
              </li>
              <li>
                <button>
                  A empresa
                </button>
              </li>
              <li>
                <button>
                  Contato
                </button>
              </li>
            </ul>
          </div>
          <button className={`${styles.hamburguer} ${classActive}`} onClick={toggleNav}>
            <i>
              <FaBars />
            </i>
            <i>
              <FaTimes />
            </i>
          </button>
        </div>
      </div>
    </nav>
  )
}

export { Navbar }