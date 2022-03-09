import Link from 'next/link';
import { IconType } from 'react-icons';

import styles from './styles.module.scss';

interface CardProps {
  title: string;
  icon: IconType;
  href: string;
}

export function Card({ icon: Icon, title, href }: CardProps) {
  return (
    <Link href={href} passHref>
      <a className={styles.card} target="_blank">
        <Icon size={35} />
        <strong>{title}</strong>
      </a>
    </Link>
  );
}
