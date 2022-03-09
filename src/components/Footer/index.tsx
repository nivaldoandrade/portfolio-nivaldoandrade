import Link from 'next/link';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

import styles from './styles.module.scss';

export function Footer() {
  return (
    <div className={styles.footerContainer}>
      <strong>Nivaldo Andrade</strong>
      <span>Um pequeno aprendiz nesse grande mundo da programação!!</span>
      <div className={styles.socialMediaContent}>
        <Link href="https://www.linkedin.com/in/nivaldo-andrade/">
          <a target="_blank">
            <BsLinkedin size={20} />
          </a>
        </Link>
        <Link href="https://github.com/nivaldoandrade">
          <a target="_blank">
            <BsGithub size={20} />
          </a>
        </Link>
      </div>
    </div>
  );
}
