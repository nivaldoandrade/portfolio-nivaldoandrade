import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  BiHome,
  BiUser,
  BiBriefcase,
  BiMessageAltDetail,
} from 'react-icons/bi';

import styles from './styles.module.scss';

export function NavBar() {
  const [showNavBar, setShowNavBar] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setShowNavBar(true);
    } else {
      setShowNavBar(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);

    return () => {
      window.removeEventListener('scroll', handleScroll, true);
    };
  }, []);

  return (
    <nav
      className={
        showNavBar
          ? styles.navContainer
          : `${styles.navContainer} ${styles.hidden}`
      }
    >
      <Link href="#">
        <a>
          <BiHome size={24} />
        </a>
      </Link>
      <Link href="#">
        <a>
          <BiUser size={24} />
        </a>
      </Link>
      <Link href="#">
        <a className={styles.active}>
          <BiBriefcase size={24} />
        </a>
      </Link>
      <Link href="#">
        <a>
          <BiMessageAltDetail size={24} />
        </a>
      </Link>
    </nav>
  );
}
