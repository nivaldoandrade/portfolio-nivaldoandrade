import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './styles.module.scss';

interface HardSkillItemProps {
  title: string;
  src: string;
}

export function HardSkillItem({ title, src }: HardSkillItemProps) {
  return (
    <motion.div
      layout
      className={styles.hardSkillItem}
      whileHover={{ scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Image src={src} width={24} height={24} />
      <span>{title}</span>
    </motion.div>
  );
}
