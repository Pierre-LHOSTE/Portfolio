import useSectionObserver from "@/hooks/useSectionObserver.hook";
import Article from "../article/Article";
import EmailCard from "./cards/email/EmailCard";
import ContactForm from "./cards/form/ContactForm";
import SocialNetwork from "./cards/social-network/SocialNetwork";
import "./contact.scss";
import { useI18nContext } from "@/i18n/i18n-react";

export default function Contact({ id }: { id: string }) {
  const ref = useSectionObserver(id);
  const { LL } = useI18nContext();

  return (
    <Article
      title={LL.section.contact.title()}
      description={LL.section.contact.description()}
      id={id}
      ref={ref}
    >
      <ContactForm />
      <EmailCard />
      <SocialNetwork />
    </Article>
  );
}
