import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Into } from '../components/Into';
import { NavBar } from '../components/NavBar';
import { Portfolio } from '../components/Portfolio';

import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <>
      <NavBar />
      <Into />
      <main className={styles.mainContainer}>
        <About />
        <Portfolio />
        <Contact />
      </main>
    </>
  );
}
