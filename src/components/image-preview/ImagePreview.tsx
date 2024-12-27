import { useSettingsStore } from "@/stores/settings.store";
import Image from "next/image";
import "./image-preview.scss";
import { IconArrowLeft, IconArrowRight, IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const ICON_SIZE = 24;

const tapAnimation = {
  whileTap: { scale: 0.9 },
  transition: { duration: 0.01 },
};

export default function ImagePreview() {
  const props = useSettingsStore((state) => state.imagePreview);
  const [index, setIndex] = useState(0);
  const { images } = props || { images: [] };

  useEffect(() => {
    const startIndex = props?.index ?? 0;
    setIndex(startIndex);
  }, [props]);

  function close() {
    useSettingsStore.setState({ imagePreview: null });
    setIndex(0);
  }

  function next() {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  }

  function prev() {
    setIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  }

  return (
    <AnimatePresence>
      {images.length > 0 ? (
        <motion.div
          id="image-preview"
          exit={{ opacity: 0, scale: 0.5 }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <Image src={images[index]} alt="preview" layout="responsive" width={100} height={100} />
          <div id="controls">
            <div>
              <motion.button type="button" onClick={prev} {...tapAnimation}>
                <IconArrowLeft size={ICON_SIZE} />
              </motion.button>
              <motion.button type="button" onClick={next} {...tapAnimation}>
                <IconArrowRight size={ICON_SIZE} />
              </motion.button>
            </div>
            <motion.button type="button" onClick={close} {...tapAnimation}>
              <IconX size={ICON_SIZE} />
            </motion.button>
          </div>
          {/* biome-ignore lint/nursery/noStaticElementInteractions: <explanation> */}
          {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
          <div id="close-area" onClick={close} />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
