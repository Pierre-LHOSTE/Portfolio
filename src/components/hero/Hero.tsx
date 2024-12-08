import Details from "@/components/details/Details";
import Message from "@/components/message/Message";
import { Title } from "@/components/title/Title";
import "./hero.scss";

export default function Hero() {
  return (
    <div id="hero">
      <Message />
      <Title />
      <Details />
    </div>
  );
}
