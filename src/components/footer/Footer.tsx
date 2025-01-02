import { useI18nContext } from "@/i18n/i18n-react";
import Pixel from "../pixel/Pixel";
import "./footer.scss";
import BuildFooter from "./columns/BuildFooter";
import ContactFooter from "./columns/ContactFooter";
import LangSelect from "./lang-select/LangSelect";
import ThemeSelect from "./theme-select/ThemeSelect";

export default function Footer() {
  const { LL } = useI18nContext();
  return (
    <footer>
      <Pixel />
      <hr />
      <div className="content">
        <section id="profile">
          <h5 className="mono">vingt-douze</h5>
          <p>{LL.footer.profile()}</p>
          <span>© 2024</span>
        </section>
        <BuildFooter />
        <ContactFooter />
        <section id="actions" className="footer-columns">
          <h5>{LL.footer.actions.title()}</h5>
          <div>
            <span>{LL.footer.actions.lang()} :</span>
            <LangSelect />
          </div>
          <div>
            <span>{LL.footer.actions.theme()} :</span>
            <ThemeSelect />
          </div>
        </section>
      </div>
    </footer>
  );
}
