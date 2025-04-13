export type SkillCategory = 'design' | 'frontend' | 'backend' | 'ml';

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  icon?: string;
  proficiency: number; // 1-5
  description?: string;
}