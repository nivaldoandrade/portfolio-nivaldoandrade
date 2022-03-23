export interface IntoComponentProps {
  hi_iam: string;
  name: string;
  career: string;
  avatar_url: string;
  cv_pdf: string;
  techs: TechProps[];
}

export interface TechProps {
  name: string;
  imgUrl: string;
  position: 'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom';
}
