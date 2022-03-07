import { Link } from 'react-scroll';

interface ActiveLinkProps {
  to: string;
  activeClass: string;
  children: React.ReactNode;
}

export function ActiveLink({ to, activeClass, children }: ActiveLinkProps) {
  return (
    <Link to={to} activeClass={activeClass} spy smooth offset={50}>
      {children}
    </Link>
  );
}
