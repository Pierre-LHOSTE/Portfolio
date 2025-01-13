import Button from "@/components/button/Button";
import Key from "@/components/key/Key";
import { IconDownload } from "@tabler/icons-react";
import "./details.scss";
import { useI18nContext } from "@/i18n/i18n-react";
import { motion } from "motion/react";

const DOWNLOAD_LINK =
  "https://qg007gk6n2popinf.public.blob.vercel-storage.com/cv/pierre-lhoste-13-01-2025-rWO996UsK1mHU9GLq1ZFabKO57gxQ0.pdf";

const variants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.25,
    },
  },
};

const animation = {
  initial: "hidden",
  animate: "visible",
  variants,
  viewport: {
    margin: "-200px",
  },
};

export default function Details() {
  const { LL } = useI18nContext();

  function downloadFile() {
    window.open(DOWNLOAD_LINK, "_blank");
  }

  return (
    <section id="details">
      <motion.p {...animation}>
        {LL.hero.details.key.p1()} <Key k="⌘" /> <Key k="P" /> {LL.hero.details.key.p2()}
      </motion.p>
      <motion.p {...animation}>
        {LL.hero.details.download.p1()}{" "}
        <Button
          Icon={IconDownload}
          text={LL.hero.details.download.button()}
          type="secondary"
          onClick={downloadFile}
        />{" "}
        {LL.hero.details.download.p2()}
      </motion.p>
    </section>
  );
}
