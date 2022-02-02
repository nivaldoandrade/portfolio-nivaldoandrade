import { About } from '../components/About';
import { Into } from '../components/Into';
import { Portfolio } from '../components/Portfolio';

import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <>
      <Into />
      <main className={styles.mainContainer}>
        <About />
        <Portfolio />
      </main>
    </>
  );
}
