import Link from 'next/link';
import {
  BiHome,
  BiUser,
  BiBriefcase,
  BiMessageAltDetail,
} from 'react-icons/bi';

import styles from './styles.module.scss';

export function NavBar() {
  return (
    <nav className={styles.navContainer}>
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
