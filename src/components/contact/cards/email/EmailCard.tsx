import { useI18nContext } from "@/i18n/i18n-react";
import { IconMail } from "@tabler/icons-react";
import ContactCard from "../../card/ContactCard";

export default function EmailCard() {
  const { LL } = useI18nContext();

  return (
    <ContactCard
      isBest
      title={LL.contact.mail.title()}
      description={LL.contact.mail.description()}
      Icon={IconMail}
      actionTitle={LL.contact.mail.actionTitle()}
      actionType="primary"
      actionUrl="mailto:vingt-douze@protonmail.com"
      pros={Object.values(LL.contact.mail.pros).map((fn) => fn())}
      cons={Object.values(LL.contact.mail.cons).map((fn) => fn())}
    />
  );
}
