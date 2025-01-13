import "./profile.scss";
import Contact from "../contact/Contact";
import Description from "../description/Description";
import Title from "../title/Title";

export default function Profile() {
  return (
    <div id="profile">
      <Title />
      <Description />
      <Contact />
    </div>
  );
}
