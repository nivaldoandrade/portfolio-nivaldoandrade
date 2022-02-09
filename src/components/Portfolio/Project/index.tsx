import Image from 'next/image';

import { LinkArrow } from '../../LinkArrow';

import styles from './styles.module.scss';

interface ProjectProps {
  title: string;
  image: StaticImageData;
}

export function Project({ title, image }: ProjectProps) {
  return (
    <div className={styles.project}>
      <div className={styles.projectImgContent}>
        <Image src={image} layout="fill" objectFit="cover" alt="work1" />
      </div>
      <div className={styles.projectInfoContent}>
        <strong>{title}</strong>
        <LinkArrow link="#">Demo</LinkArrow>
      </div>
    </div>
  );
}
