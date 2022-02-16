import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './styles.module.scss';

interface SkillItemProps {
  title: string;
  percentage: number;
}

const duration = 1;

export function SkillItem({ title, percentage }: SkillItemProps) {
  const [counter, setCounter] = useState(0);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    let timer: NodeJS.Timer;

    const uptdateCounter = () => {
      if (counter === percentage) {
        return;
      }
      const delay = (duration / percentage) * 1000;
      console.log(delay);

      timer = setInterval(() => {
        setCounter(state => state + 1);
      }, delay);

      if (counter === percentage) {
        clearInterval(timer);
      }
    };

    if (inView) {
      uptdateCounter();
    }

    return () => clearInterval(timer);
  }, [inView, counter, percentage]);

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
        <span>{counter} %</span>
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
            duration,
          }}
        />
      </div>
    </div>
  );
}
