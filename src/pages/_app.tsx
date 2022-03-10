import { AppProps } from 'next/app';
import Head from 'next/head';

import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Nivaldo Andrade - Desenvolvedor Frontend</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
