import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <base href="/" />
          <meta name="robots" content="index,nofollow" />
          <meta name="author" content="LucasSites (lucassites.com.br)" />
          <meta name="copyright" content="LucasSites" />
          <meta name="designer" content="LucasSites (lucassites.com.br)" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta property="og:title" content="Pescamar Pescados" />
          <meta
            property="og:description"
            content="O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro"
          />
          <meta property="og:url" content="https://pescamarlaguna.com.br/" />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="pt_BR" />
          <meta property="og:image" content="/logo.png" />
          <meta property="twitter:image" content="/logo.png" />
          <meta property="twitter:card" content="summary" />
          <meta
            name="abstract"
            content="O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro"
          />
          <meta
            name="description"
            content="O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro"
          />
          <link rel="shortcut icon" href="/logo.png" />
          <link href="https://fonts.googleapis.com/css2?family=Pacifico&family=Roboto:wght@400;700&family=Saira:wght@100;400;500;700&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument