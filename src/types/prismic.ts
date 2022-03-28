export interface IntoComponentProps {
  hi_iam: string;
  name: string;
  career: string;
  avatar_url: string;
  cv_pdf: string;
  techs: TechProps[];
}

export interface AboutComponentProps {
  text: string;
  slogan: string;
  cards: CardAboutComponentPros[];
  skills: SkillProps[];
}

export type PortfolioComponentProps = ProjectProps[];

export interface TechProps {
  name: string;
  imgUrl: string;
  position: 'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom';
}

export interface CardAboutComponentPros {
  name: string;
  link: string;
}
export interface SkillProps {
  title: string;
  percentage: number;
}

export interface ProjectProps {
  image: StaticImageData;
  title: string;
  subtitle: string;
  tech: string;
  link: string;
  github?: string;
}
