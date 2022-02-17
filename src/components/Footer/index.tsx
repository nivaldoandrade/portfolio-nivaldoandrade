import Link from 'next/link';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

import styles from './styles.module.scss';

export function Footer() {
  return (
    <div className={styles.footerContainer}>
      <strong>Nivaldo Andrade</strong>
      <span>Um pequeno aprendiz nesse grande mundo da programação!!</span>
      <div className={styles.socialMediaContent}>
        <Link href="#">
          <a>
            <BsLinkedin size={20} />
          </a>
        </Link>
        <Link href="#">
          <a>
            <BsGithub size={20} />
          </a>
        </Link>
      </div>
    </div>
  );
}
