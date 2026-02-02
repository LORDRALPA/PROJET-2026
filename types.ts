
export interface Experience {
  company: string;
  role: string;
  period: string;
  type: string;
  description: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Interest {
  title: string;
  description: string;
  icon: string;
}

export interface Message {
  role: 'user' | 'model' | 'system';
  content: string;
}
