import { useI18nContext } from "@/i18n/i18n-react";
import { IconBrandBluesky, IconBrandLinkedinFilled, IconMail } from "@tabler/icons-react";
import FooterColumns from "../footer-columns/FooterColumns";

export default function ContactFooter() {
  const { LL } = useI18nContext();

  return (
    <FooterColumns
      title={LL.footer.contact.title()}
      urls={[
        {
          title: "vingt-douze@protonmail.com",
          url: "mailto:vingt-douze@protonmail.com",
          // biome-ignore lint/style/useNamingConvention: It's a React component
          Icon: IconMail,
        },
        {
          title: LL.footer.contact.social1(),
          url: "https://www.linkedin.com/in/pierre-lhoste/",
          // biome-ignore lint/style/useNamingConvention: It's a React component
          Icon: IconBrandLinkedinFilled,
        },
        {
          title: LL.footer.contact.social2(),
          url: "https://bsky.app/profile/212.lol",
          // biome-ignore lint/style/useNamingConvention: It's a React component
          Icon: IconBrandBluesky,
        },
      ]}
    />
  );
}
