import { motion } from 'framer-motion';
import { useState } from 'react';

import { HardSkillItemProps } from '../../../types/prismic';
import { HardSkillItem } from '../HardSkillItem';
import styles from './styles.module.scss';

export type Category = 'todos' | 'frontend' | 'backend' | 'mobile';

interface HardSkillsProps {
  skills: HardSkillItemProps[];
}

export function HardSkills({ skills }: HardSkillsProps) {
  const [filter, setFilter] = useState<Category>('todos');
  const filtered =
    filter === 'todos'
      ? skills
      : skills.filter(s => s.category.includes(filter));

  function handleSelectedCategory(current: Category) {
    setFilter(current);
  }

  const categoryMap = ['todos', 'frontend', 'backend', 'mobile'] as Category[];

  return (
    <div className={styles.skillContent}>
      <h2>Hard Skills</h2>
      <div className={styles.filterButtons}>
        {categoryMap.map(cat => (
          <button
            key={cat}
            type="button"
            onClick={() => handleSelectedCategory(cat)}
            className={filter === cat ? styles.activeFilter : ''}
          >
            {cat === 'todos'
              ? 'Todos'
              : cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>
      <motion.div className={styles.grid} layout>
        {filtered.map(skill => (
          <HardSkillItem
            key={skill.title}
            title={skill.title}
            src={skill.src}
          />
        ))}
      </motion.div>
    </div>
  );
}
