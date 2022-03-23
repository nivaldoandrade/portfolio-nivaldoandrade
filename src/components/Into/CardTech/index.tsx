import Image from 'next/image';
import { motion } from 'framer-motion';

import { TechProps } from '../../../types/prismic';

import styles from './styles.module.scss';

const motionInitial = {
  leftTop: {
    x: -20,
    y: -10,
    opacity: 0,
  },
  leftBottom: {
    x: -20,
    y: 10,
    opacity: 0,
  },
  rightTop: {
    x: 20,
    y: -10,
    opacity: 0,
  },
  rightBottom: {
    x: 20,
    y: 10,
    opacity: 0,
  },
};

export function CardTech({ name, imgUrl, position }: TechProps) {
  return (
    <motion.div
      className={`${styles.box} ${styles[position]}`}
      initial={motionInitial[position]}
      animate={{
        x: 0,
        y: 0,
        opacity: 1,
      }}
      transition={{
        type: 'tween',
        ease: 'easeInOut',
        delay: 0.3,
        duration: 1,
      }}
    >
      <Image src={imgUrl} alt={name} width={30} height={30} />
      {name}
    </motion.div>
  );
}
