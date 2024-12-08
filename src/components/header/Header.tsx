import ListItem from "./item/HeaderItem";
import "./header.scss";

const list = ["home", "chat", "details", "projects", "contact"];

export default function Header() {
  return (
    <header id="header">
      <nav>
        <ul>
          {list.map((item) => {
            return <ListItem active={item === "home"} key={item} label={item} />;
          })}
        </ul>
      </nav>
    </header>
  );
}
