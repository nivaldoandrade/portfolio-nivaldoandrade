import { IconType } from 'react-icons';

import styles from './styles.module.scss';

interface CardProps {
  title: string;
  Icon: IconType;
}

export function Card({ Icon, title }: CardProps) {
  return (
    <div className={styles.card}>
      <Icon size={35} />
      <strong>{title}</strong>
    </div>
  );
}
