import StackIcon from "@/components/stack/icon/StackIcon";
import FooterLink from "../link/FooterLink";
import type { FooterColumnsType } from "../type";
import "./footer-columns.scss";

export default function FooterColumns({ title, urls }: FooterColumnsType) {
  return (
    <section className="footer-columns">
      <h5>{title}</h5>
      <ul>
        {urls.map(({ title, url, icon, Icon }, index: number) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          <li key={index}>
            <FooterLink url={url}>
              {icon ? (
                <StackIcon
                  stack={{
                    name: title as string,
                    description: {
                      en: "",
                      fr: "",
                    },
                    reason: {
                      en: "",
                      fr: "",
                    },
                    category: "frontend",
                    homepage: "",
                    tags: [],
                    styles: {
                      icon: icon.url || "",
                      invert: icon.invert || undefined,
                      color: "",
                      background: "",
                    },
                  }}
                  size={20}
                />
              ) : null}
              {Icon ? <Icon size={20} /> : null}
              {title}
            </FooterLink>
          </li>
        ))}
      </ul>
    </section>
  );
}
