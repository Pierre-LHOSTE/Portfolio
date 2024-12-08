import Button from "@/components/button/Button";
import Key from "@/components/key/Key";
import { IconDownload } from "@tabler/icons-react";
import "./details.scss";
import { motion } from "framer-motion";

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
  whileInView: "visible",
  variants,
  viewport: {
    margin: "-200px",
  },
};

export default function Details() {
  return (
    <section id="details">
      <motion.p {...animation}>
        Press <Key k="⌘" /> <Key k="P" /> to instantly print or save the latest version of my CV as
        a PDF
      </motion.p>
      <motion.p {...animation}>
        Prefer a direct download? Feel free to{" "}
        <Button Icon={IconDownload} text="Download" type="secondary" /> a pre-saved version
      </motion.p>
    </section>
  );
}
