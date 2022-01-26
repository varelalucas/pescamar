import { NextPage } from 'next'
import styles from './ContactUs.module.scss'
import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import toastr from 'toastr'

const ContactUs: NextPage = () => {

  const router = useRouter()

  const [name, setName] = useState('')
  const [tel, setTel] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const sendForm = async () => {
    toastr.options = {
      closeButton: true,
      debug: false,
      newestOnTop: true,
      progressBar: true,
      positionClass: "toast-top-left",
      preventDuplicates: true,
      showDuration: 300,
      hideDuration: 1000,
      timeOut: 2000,
      extendedTimeOut: 1000,
      showMethod: 'slideDown',
      hideMethod: 'slideUp',
      toastClass: "toastr-ip"
    };
    toastr.clear();
    setTimeout(() => toastr.success("O formulário foi enviado com sucesso!"), 0);

    const req = await axios({
      method: 'post',
      data: {
        name: name,
        tel: tel,
        subject: subject,
        message: message
      },
      url: '/api/sendForm'
    })
    const res = req.data

    if (res.success === true) {
      router.push('/obrigado')
    }
  }

  return (
    <section className={styles.contactus}>
      <div className="container">
        <div className={styles.title}>
          <h4>
            Entre em contato conosco
          </h4>
          <p>
            Algum subtítulo qualquer aqui.
          </p>
        </div>
        <div className={styles.content}>
          <div className={styles.title}>
            <h4>
              Localização
            </h4>
            <p>
              Rua alguma rua, 0000 - CEP 88790-000 - Laguna/SC - Brasil
            </p>
            <p>
              CNPJ: 00.000.000/0001-93 - I.E 000.000.000
            </p>
            <p>
              Fone: +55 (48) 0000-0000
            </p>
          </div>
          <div className={styles.body}>
            <form onSubmit={(e) => {
              e.preventDefault(),
              sendForm()
            }}>
              <div className={styles.formrow}>
                <input type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder="Insira seu nome" required/>
                <input type="text" onChange={(e) => setTel(e.target.value)} value={tel} placeholder="Insira um telefone para contato" required/>
              </div>
              <input type="text" onChange={(e) => setSubject(e.target.value)} value={subject} placeholder="Insira o assunto do seu contato" required/>
              <textarea rows={8} onChange={(e) => setMessage(e.target.value)} value={message} placeholder="Digite sua mensagem" style={{resize: 'none'}} required/>
              <button>
                Enviar Formulário
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export { ContactUs }