import "./link.scss";
import type { ReactNode } from "react";

export default function FooterLink({
  children,
  url,
}: {
  children: ReactNode;
  url?: string;
}) {
  if (!url) {
    return <span className="footer-link">{children}</span>;
  }

  return (
    <a className="footer-link" href={url} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}
