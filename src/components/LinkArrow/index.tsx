import Link from 'next/link';
import { BiRightArrowAlt } from 'react-icons/bi';

import styles from './styles.module.scss';

interface LinkArrowProps {
  children: React.ReactNode;
  link: string;
}

export function LinkArrow({ children, link }: LinkArrowProps) {
  return (
    <Link href={link}>
      <a className={styles.link} target="_blank">
        {children}
        <BiRightArrowAlt size={20} />
      </a>
    </Link>
  );
}
