import FooterLink from "../link/FooterLink";
import type { FooterColumnsType } from "../type";
import "./footer-columns.scss";

export default function FooterColumns({ title, urls }: FooterColumnsType) {
  return (
    <div className="footer-columns">
      <h5>{title}</h5>
      <ul>
        {urls.map(({ title, url }, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          <li key={index}>
            <FooterLink url={url}>{title}</FooterLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
