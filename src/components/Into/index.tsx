import Image from 'next/image';
import Link from 'next/link';

import styles from './styles.module.scss';

import meImg from '../../../public/images/me.png';
import reactImg from '../../../public/images/react.svg';
import javascriptImg from '../../../public/images/javascript.svg';
import htmlImg from '../../../public/images/html.svg';
import cssImg from '../../../public/images/css3.svg';

export function Into() {
  return (
    <section className={styles.intoContainer}>
      <div className={styles.info}>
        <strong>Olá, Eu sou</strong>
        <h1>Nivaldo Andrade</h1>
        <span>Desenvolvedor Frontend</span>
        <div>
          <button type="button">Download CV</button>
          <Link href="#">
            <a>Sobre mim</a>
          </Link>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <div className={`${styles.box} ${styles.react}`}>
          <Image src={reactImg} alt="React" width={30} height={30} />
          ReactJS
        </div>
        <div className={`${styles.box} ${styles.javascript}`}>
          <Image src={javascriptImg} alt="React" width={30} height={30} />
          JavaScript
        </div>
        <div className={`${styles.box} ${styles.html}`}>
          <Image src={htmlImg} alt="React" width={35} height={35} />
          HTML
        </div>
        <div className={`${styles.box} ${styles.css}`}>
          <Image src={cssImg} alt="React" width={35} height={35} />
          CSS3
        </div>

        <div className={styles.imgContent}>
          <Image src={meImg} alt="Nivaldo Andrade" />
        </div>
      </div>
    </section>
  );
}
