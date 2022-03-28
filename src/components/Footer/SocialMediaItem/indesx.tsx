import Link from 'next/link';
import { IconType } from 'react-icons';
import { SocialMediaProps } from '../../../types/prismic';

import styles from './styles.module.scss';

interface SocialMediaItemProps extends SocialMediaProps {
  icon: IconType;
}

export function SocialMediaItem({
  name,
  link,
  icon: Icon,
}: SocialMediaItemProps) {
  return (
    <Link href={link}>
      <a className={styles.socialMedia} target="_blank" aria-label={name}>
        <Icon size={20} />
      </a>
    </Link>
  );
}
