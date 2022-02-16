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
        <div>
          <strong>{title}</strong>
          <span>REACTJS</span>
        </div>
        <p>
          loEt sunt laborum consectetur officia magna eiusmod incididunt. Eu
          consectetur voluptate dolore deserunt nulla deserunt.
        </p>
        <LinkArrow link="#">Demo</LinkArrow>
      </div>
    </div>
  );
}
