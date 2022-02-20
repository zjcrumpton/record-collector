import { FC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface SmartLinkProps {
  href: string;
  text: string;
  className: string;
  activeClassName: string;
}

// Highlight the Link when current page === the page this link connects to
const SmartLink: FC<SmartLinkProps> = ({
  href,
  text,
  className,
  activeClassName,
}) => {
  const { asPath } = useRouter();

  const activeClass = asPath === href ? activeClassName : className;

  return (
    <Link href={href}>
      <a className={activeClass}>{text}</a>
    </Link>
  );
};

export default SmartLink;
