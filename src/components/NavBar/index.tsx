import { useEffect, useState } from 'react';
import {
  BiHome,
  BiUser,
  BiBriefcase,
  BiMessageAltDetail,
} from 'react-icons/bi';

import { ActiveLink } from './ActiveLink';

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
      <ActiveLink to="into" activeClass={styles.active}>
        <BiHome size={24} />
      </ActiveLink>
      <ActiveLink to="about" activeClass={styles.active}>
        <BiUser size={24} />
      </ActiveLink>
      <ActiveLink to="portfolio" activeClass={styles.active}>
        <BiBriefcase size={24} />
      </ActiveLink>
      <ActiveLink to="contact" activeClass={styles.active}>
        <BiMessageAltDetail size={24} />
      </ActiveLink>
    </nav>
  );
}
