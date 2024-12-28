import { IconBrandLinkedin } from "@tabler/icons-react";
import ContactCard from "../../card/ContactCard";

export default function SocialNetwork() {
  return (
    <ContactCard
      title="LinkedIn"
      description="Connect with me for networking and professional growth"
      Icon={IconBrandLinkedin}
      actionTitle="View profile"
      actionType="secondary"
      actionUrl="https://www.linkedin.com/in/pierre-lhoste/"
      pros={["Personal & relational", "Fast and direct"]}
      cons={["May not be checked often"]}
    />
  );
}
