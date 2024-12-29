import { useI18nContext } from "@/i18n/i18n-react";
import { IconForms } from "@tabler/icons-react";
import ContactCard from "../../card/ContactCard";

export default function ContactForm() {
  const { LL } = useI18nContext();

  return (
    <ContactCard
      isBest
      title={LL.contact.form.title()}
      description={LL.contact.form.description()}
      Icon={IconForms}
      actionTitle={LL.contact.form.actionTitle()}
      actionType="secondary"
      pros={Object.values(LL.contact.form.pros).map((fn) => fn())}
      cons={Object.values(LL.contact.form.cons).map((fn) => fn())}
    />
  );
}
