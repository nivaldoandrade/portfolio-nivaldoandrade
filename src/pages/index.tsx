import { GetStaticProps } from 'next';

import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { Into } from '../components/Into';
import { NavBar } from '../components/NavBar';
import { Portfolio } from '../components/Portfolio';

import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <>
      <NavBar />
      <main className={styles.mainContainer}>
        <Into />
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
