import Article from "../article/Article";
import TimelineElement from "./element/TimelineElement";
import { timelineList } from "./timeline-data";
import "./timeline.scss";

export default function Timeline() {
  return (
    <Article
      title="Mon Parcours"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      id="timeline"
    >
      {timelineList.map((element) => (
        <TimelineElement key={element.name} element={element} />
      ))}
    </Article>
  );
}
