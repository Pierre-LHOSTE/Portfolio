import "./curriculum-vitae.scss";
import Education from "./education/Education";
import Experience from "./experience/Experience";
import Interests from "./interests/Interests";
import Profile from "./profile/Profile";
import Skills from "./skills/Skills";
import Stacks from "./stacks/Stacks";
import Update from "./update/Update";

export default function CurriculumVitae() {
  return (
    <div id="curriculum-vitae">
      <div id="left">
        <Profile />
        <Skills />
        <Stacks />
        <Interests />
      </div>
      <div id="right">
        <Education />
        <Experience />
      </div>
      <Update />
    </div>
  );
}
