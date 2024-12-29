import { useI18nContext } from "@/i18n/i18n-react";
import { IconBrandLinkedin } from "@tabler/icons-react";
import ContactCard from "../../card/ContactCard";

export default function SocialNetwork() {
  const { LL } = useI18nContext();

  return (
    <ContactCard
      title={LL.contact.socialNetworks.title()}
      description={LL.contact.socialNetworks.description()}
      Icon={IconBrandLinkedin}
      actionTitle={LL.contact.socialNetworks.actionTitle()}
      actionType="secondary"
      actionUrl="https://www.linkedin.com/in/pierre-lhoste/"
      pros={Object.values(LL.contact.socialNetworks.pros).map((fn) => fn())}
      cons={Object.values(LL.contact.socialNetworks.cons).map((fn) => fn())}
    />
  );
}
