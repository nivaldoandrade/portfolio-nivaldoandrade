import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './styles.module.scss';

interface SkillItemProps {
  title: string;
  percentage: number;
  delay?: number;
}

export function SkillItem({ title, percentage, delay }: SkillItemProps) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const variants = {
    hidden: { width: 0 },
    visible: {
      width: `${percentage}%`,
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <div className={styles.skillContent}>
      <div className={styles.skillHeader}>
        <strong>{title}</strong>
        <span>{percentage} %</span>
      </div>
      <div className={styles.skillBar}>
        <motion.div
          ref={ref}
          className={styles.skillBarFill}
          style={{ width: `${percentage}%` }}
          animate={controls}
          initial="hidden"
          variants={variants}
          transition={{
            type: 'tween',
            ease: 'easeInOut',
            duration: 1,
            delay,
          }}
        />
      </div>
    </div>
  );
}
