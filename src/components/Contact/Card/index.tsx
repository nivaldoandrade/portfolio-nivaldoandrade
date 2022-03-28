import { IconType } from 'react-icons';
import { CardContactProps } from '../../../types/prismic';
import { LinkArrow } from '../../LinkArrow';

import styles from './styles.module.scss';

interface CardProps extends CardContactProps {
  icon: IconType;
}

export function Card({ title, icon: Icon, subtitle, link }: CardProps) {
  return (
    <div className={styles.card}>
      <Icon size={36} />
      <strong>{title}</strong>
      <span>{subtitle}</span>
      <LinkArrow link={link}>Contate-me</LinkArrow>
    </div>
  );
}
