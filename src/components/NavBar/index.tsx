import { useEffect, useState } from 'react';
import {
  BiHome,
  BiUser,
  BiBriefcase,
  BiMessageAltDetail,
} from 'react-icons/bi';
import * as Scroll from 'react-scroll';

import styles from './styles.module.scss';

export function NavBar() {
  const [showNavBar, setShowNavBar] = useState(false);
  const { Link } = Scroll;

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
      <Link to="into" spy activeClass={styles.active} smooth>
        <BiHome size={24} />
      </Link>

      <Link to="about" spy activeClass={styles.active} smooth>
        <BiUser size={24} />
      </Link>
      <Link to="portfolio" spy activeClass={styles.active} smooth>
        <BiBriefcase size={24} />
      </Link>
      <Link to="contact" spy activeClass={styles.active} smooth>
        <BiMessageAltDetail size={24} />
      </Link>
    </nav>
  );
}
