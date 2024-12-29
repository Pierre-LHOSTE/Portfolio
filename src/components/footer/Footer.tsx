import Pixel from "../pixel/Pixel";
import FooterColumns from "./footer-columns/FooterColumns";
import "./footer.scss";
import LangSelect from "./lang-select/LangSelect";
import { contactFooter, portfolioFooter } from "./list";

export default function Footer() {
  return (
    <footer>
      <Pixel />
      <hr />
      <div className="content">
        <div id="profile">
          <h5 className="mono">vingt-douze</h5>
          <p>
            I'm a passionate and responsible french web developer and designer who loves to create
            beautiful and functional websites ♥︎
          </p>
          <span>© 2024</span>
        </div>
        <FooterColumns {...portfolioFooter} />
        <FooterColumns {...contactFooter} />
        <div id="actions">
          <LangSelect />
        </div>
      </div>
    </footer>
  );
}
