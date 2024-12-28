import useSectionObserver from "@/hooks/useSectionObserver.hook";
import Article from "../article/Article";
import EmailCard from "./cards/email/EmailCard";
import ContactForm from "./cards/form/ContactForm";
import SocialNetwork from "./cards/social-network/SocialNetwork";
import "./contact.scss";

export default function Contact() {
  const ref = useSectionObserver("contact");

  return (
    <Article
      title="Me contacter"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
"
      id="contact"
      ref={ref}
    >
      <ContactForm />
      <EmailCard />
      <SocialNetwork />
    </Article>
  );
}
