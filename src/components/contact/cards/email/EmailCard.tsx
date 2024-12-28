import { IconMail } from "@tabler/icons-react";
import ContactCard from "../../card/ContactCard";

export default function EmailCard() {
  return (
    <ContactCard
      isBest
      title="Email"
      description="The best way to contact me for professional inquiries"
      Icon={IconMail}
      actionTitle="Send email"
      actionType="primary"
      actionUrl="mailto:vingt-douze@protonmail.com"
      pros={[
        "Professional & credible",
        "Instant notifications",
        "Easy to use",
        "Easy follow-up & attachment support",
      ]}
      cons={["None"]}
    />
  );
}
