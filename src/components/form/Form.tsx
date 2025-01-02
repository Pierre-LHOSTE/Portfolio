import { type ChangeEvent, useEffect, useState, useTransition } from "react";
import "./form.scss";
import { useI18nContext } from "@/i18n/i18n-react";
import sendMail from "@/server/sendMail";
import { useSettingsStore } from "@/stores/settings.store";
import { IconLoader2, IconSend } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import Button from "../button/Button";

function ContactForm() {
  const showForm = useSettingsStore((state) => state.showForm);
  const setShowForm = useSettingsStore((state) => state.setShowForm);
  const { LL } = useI18nContext();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    content: "",
  });
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const rootElement = document.getElementById("root");

    if (showForm) {
      document.body.style.overflow = "hidden";
      if (rootElement) rootElement.style.overflowY = "scroll";
    } else {
      document.body.style.overflow = "";
      if (rootElement) rootElement.style.overflowY = "";
    }

    return () => {
      document.body.style.overflow = "";
      if (rootElement) rootElement.style.overflowY = "";
    };
  }, [showForm]);

  function handleSubmit() {
    startTransition(async () => {
      const res = await sendMail(formData);
      if (res.error) {
        alert(`Error: ${res.error}`);
      } else {
        setShowForm(false);
        setFormData({ name: "", email: "", content: "" });
        setTimeout(() => {
          alert(LL.form.success());
        }, 500);
      }
    });
  }

  function handleChange(e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleClose() {
    setShowForm(false);
  }

  return (
    <AnimatePresence>
      {showForm ? (
        <motion.div
          id="form"
          exit={{ opacity: 0, scale: 0.5 }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <form action={handleSubmit}>
            <div>
              <div>
                <h2>{LL.form.title()}</h2>
                <p>{LL.form.description()}</p>
              </div>
              <div>
                <label htmlFor="name">
                  {LL.form.name()}
                  <span>({LL.form.optional()})</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder={LL.form.namePlaceholder()}
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="email">
                  {LL.form.email()}
                  <span>({LL.form.optional()})</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder={LL.form.emailPlaceholder()}
                  value={formData.email}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                <label htmlFor="content">{LL.form.message()}</label>
                <textarea
                  id="content"
                  name="content"
                  placeholder={LL.form.messagePlaceholder()}
                  maxLength={500}
                  rows={4}
                  value={formData.content}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <Button
                className={isPending ? "loading" : undefined}
                type="submit"
                text={LL.form.send()}
                Icon={isPending ? IconLoader2 : IconSend}
              />
            </div>
          </form>
          {/* biome-ignore lint/nursery/noStaticElementInteractions: <explanation> */}
          {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
          <div id="close-area" onClick={handleClose} />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export default ContactForm;
