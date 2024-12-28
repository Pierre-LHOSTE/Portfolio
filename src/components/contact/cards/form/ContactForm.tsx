import { IconForms } from "@tabler/icons-react";
import ContactCard from "../../card/ContactCard";

export default function ContactForm() {
  return (
    <ContactCard
      isBest
      title="Form"
      description="The simplest way to reach me directly on this site"
      Icon={IconForms}
      actionTitle="Send message"
      actionType="secondary"
      pros={["Quick & simple"]}
      cons={["Less professional", "Limited flexibility", "Only for simple messages"]}
    />
  );
}
