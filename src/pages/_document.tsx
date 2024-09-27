import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocumento extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
          <meta charSet="UTF-8" />
          <meta
            name="description"
            content="Eu sou Nivaldo Andrade, desenvolvedor front-end e back-end, com experiência em criar interfaces de usuário utilizando React, Next.js, JavaScript e TypeScript, sempre priorizando responsividade e usabilidade. No back-end, desenvolvo APIs robustas e seguras com Java, Spring Boot, Node.js e PostgreSQL"
          />
          <meta
            name="keywords"
            content="desenvolvedor, front end, react.js, reactjs, next.js, react native, nodejs, javascript, typescript, html, css, web development, learn web development, front end development, back end, back end development, frontend, backend, java, spring, spring boot, sao caetano do sul, sao paulo"
          />
          <meta
            name="author"
            content="Nivaldo Andrade<nivaldoandradef@gmail.com>"
          />
          <meta name="theme-color" content="#0b111e" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
