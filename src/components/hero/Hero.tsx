import Details from "@/components/details/Details";
import Message from "@/components/message/Message";
import { Title } from "@/components/title/Title";
import "./hero.scss";
import useSectionObserver from "@/hooks/useSectionObserver.hook";

export default function Hero({ id }: { id: string }) {
  const ref = useSectionObserver(id);

  return (
    <div id={id} ref={ref}>
      <Message />
      <Title />
      <Details />
    </div>
  );
}
