import Image from 'next/image';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

import styles from './styles.module.scss';

import meImg from '../../../public/images/me.png';
import reactImg from '../../../public/images/react.svg';
import javascriptImg from '../../../public/images/javascript.svg';
import htmlImg from '../../../public/images/html.svg';
import cssImg from '../../../public/images/css3.svg';

const transitionBox = {
  type: 'tween',
  ease: 'easeInOut',
  delay: 0.3,
  duration: 1,
};

export function Into() {
  return (
    <section className={styles.intoContainer} id="into">
      <motion.div
        className={styles.info}
        initial={{ opacity: 0 }}
        animate={{ y: ['-30px', '30px', '0px'], opacity: 1 }}
        transition={{
          type: 'tween',
          ease: 'easeInOut',
          duration: 1,
        }}
      >
        <strong>Olá, Eu sou</strong>
        <h1>Nivaldo Andrade</h1>
        <span>Desenvolvedor Frontend</span>
        <div>
          <a
            href="/files/nivaldo-andrade.pdf"
            target="_blank"
            rel="noopener noreferrer"
            // download
          >
            Download CV
          </a>
          <Link to="about" smooth offset={-50}>
            <a>Sobre mim</a>
          </Link>
        </div>
      </motion.div>
      <div className={styles.imgContainer}>
        <motion.div
          className={`${styles.box} ${styles.react}`}
          initial={{
            x: -20,
            y: -10,
            opacity: 0,
          }}
          animate={{
            x: 0,
            y: 0,
            opacity: 1,
          }}
          transition={transitionBox}
        >
          <Image src={reactImg} alt="React" width={30} height={30} />
          ReactJS
        </motion.div>
        <motion.div
          className={`${styles.box} ${styles.javascript}`}
          initial={{
            x: 20,
            y: -10,
            opacity: 0,
          }}
          animate={{
            x: 0,
            y: 0,
            opacity: 1,
          }}
          transition={transitionBox}
        >
          <Image src={javascriptImg} alt="React" width={30} height={30} />
          JavaScript
        </motion.div>
        <motion.div
          className={`${styles.box} ${styles.html}`}
          initial={{
            x: -20,
            y: 10,
            opacity: 0,
          }}
          animate={{
            x: 0,
            y: 0,
            opacity: 1,
          }}
          transition={transitionBox}
        >
          <Image src={htmlImg} alt="React" width={35} height={35} />
          HTML
        </motion.div>
        <motion.div
          className={`${styles.box} ${styles.css}`}
          initial={{
            x: 20,
            y: 10,
            opacity: 0,
          }}
          animate={{
            x: 0,
            y: 0,
            opacity: 1,
          }}
          transition={transitionBox}
        >
          <Image src={cssImg} alt="React" width={35} height={35} />
          CSS3
        </motion.div>

        <motion.div
          className={styles.imgContent}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: 'tween',
            duration: 1,
            delay: 0.3,
          }}
        >
          <Image
            src={meImg}
            layout="fill"
            alt="Nivaldo Andrade"
            objectFit="cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
