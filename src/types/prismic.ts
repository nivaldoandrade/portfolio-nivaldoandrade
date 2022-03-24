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
