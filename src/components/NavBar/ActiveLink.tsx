import { Link } from 'react-scroll';

interface ActiveLinkProps {
  to: string;
  activeClass: string;
  children: React.ReactNode;
  into?: boolean;
}

export function ActiveLink({
  to,
  activeClass,
  children,
  into,
}: ActiveLinkProps) {
  return (
    <Link
      aria-label={to}
      href={to}
      to={to}
      activeClass={activeClass}
      spy
      smooth
      offset={into ? 0 : 50}
    >
      {children}
    </Link>
  );
}
