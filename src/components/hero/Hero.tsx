import Details from "@/components/details/Details";
import Message from "@/components/message/Message";
import { Title } from "@/components/title/Title";
import "./hero.scss";
import useSectionObserver from "@/hooks/useSectionObserver.hook";

export default function Hero() {
  const ref = useSectionObserver("home");

  return (
    <div id="hero" ref={ref}>
      <Message />
      <Title />
      <Details />
    </div>
  );
}
