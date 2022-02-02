import styles from './styles.module.scss';

interface SkillItemProps {
  title: string;
  percentage: number;
}

export function SkillItem({ title, percentage }: SkillItemProps) {
  return (
    <div className={styles.skillContent}>
      <div className={styles.skillHeader}>
        <strong>{title}</strong>
        <span>{percentage} %</span>
      </div>
      <div className={styles.skillBar}>
        <div
          className={styles.skillBarFill}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
