import Image from 'next/image';
import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';

import { LinkArrow } from '../../LinkArrow';

import { ProjectProps } from '../../../types/prismic';

import styles from './styles.module.scss';

export function Project({
  title,
  image,
  subtitle,
  tech,
  link,
  github,
}: ProjectProps) {
  return (
    <div className={styles.project}>
      <div className={styles.projectImgContent}>
        <Image src={image} layout="fill" objectFit="cover" alt={title} />
      </div>
      <div className={styles.projectInfoContent}>
        <div>
          <strong>{title}</strong>
          <span>{tech}</span>
        </div>
        <p>{subtitle}</p>
      </div>
      <div className={styles.projectFooter}>
        <LinkArrow link={link}>Demo</LinkArrow>
        {github && (
          <Link href={github}>
            <a target="_blank" aria-label="Github">
              <BsGithub size={24} />
            </a>
          </Link>
        )}
      </div>
    </div>
  );
}
