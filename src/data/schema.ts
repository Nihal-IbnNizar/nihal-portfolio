export interface Profile {
  name: string;
  title: string;
  currentRole: string;
  headline: string;
  bio: string;
  contactEmail: string;
  contactPhone: string;
}

export interface DailyDriver {
  name: string;
  icon: string;
}

export interface ProjectTag {
  name: string;
  icon: string;
}

export interface Project {
  title: string;
  description: string;
  featured: boolean;
  tags: ProjectTag[];
}

export interface Skill {
  name: string;
  icon: string;
}

export interface SkillGroup {
  title: string;
  colSpan: string;
  skills: Skill[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  isCurrent: boolean;
}

export interface EducationItem {
  title: string;
  subtitle: string;
}

export interface SeminarItem {
  type: string;
  title: string;
  description: string;
}

export interface ContactLink {
  icon: string;
  label: string;
  href: string;
  external: boolean;
}

export interface PortfolioData {
  profile: Profile;
  dailyDrivers: DailyDriver[];
  projects: Project[];
  expertise: SkillGroup[];
  experience: ExperienceItem[];
  education: EducationItem[];
  seminars: SeminarItem[];
  contact: ContactLink[];
}
