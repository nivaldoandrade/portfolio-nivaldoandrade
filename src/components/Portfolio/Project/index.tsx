import Image from 'next/image';
import Link from 'next/link';
import { BiRightArrowAlt } from 'react-icons/bi';

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
        <Link href="#">
          <a>
            Demo
            <BiRightArrowAlt size={20} />
          </a>
        </Link>
      </div>
    </div>
  );
}
