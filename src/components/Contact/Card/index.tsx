import { IconType } from 'react-icons';
import { LinkArrow } from '../../LinkArrow';

import styles from './styles.module.scss';

interface CardProps {
  title: string;
  icon: IconType;
  subtitle: string;
  link: string;
}

export function Card({ title, icon: Icon, subtitle, link }: CardProps) {
  return (
    <div className={styles.card}>
      <Icon size={36} />
      <strong>{title}</strong>
      <span>{subtitle}</span>
      <LinkArrow link={link}>Write me</LinkArrow>
    </div>
  );
}
