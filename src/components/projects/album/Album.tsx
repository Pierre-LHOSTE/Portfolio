import Image from "next/image";
import "./album.scss";
import { useSettingsStore } from "@/stores/settings.store";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useState } from "react";

const IMG_MAX_SIZE = 512;
const ARROW_SIZE = 24;
const darkThemeRegex = /-dark(\.\w+)$/;

const tapAnimation = {
  whileTap: { scale: 0.9 },
  transition: { duration: 0.01 },
};

export default function Album({
  images,
}: {
  images: string[];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = useSettingsStore((state) => state.activeTheme);
  const setImagePreview = useSettingsStore((state) => state.setImagePreview);

  const imagesList: string[] = [];

  for (let i = 0; i < images.length; i++) {
    const image = images[i];
    if (i === 0) {
      imagesList.push(image);
      continue;
    }
    const imageWithoutDark = image.replace(darkThemeRegex, "$1");
    const isDarkImage = darkThemeRegex.test(image);

    if (imagesList.some((img) => img.includes(imageWithoutDark))) {
      if (theme === "dark" && isDarkImage) {
        const index = imagesList.findIndex((img) => img.includes(imageWithoutDark));
        imagesList[index] = image;
      }
    } else {
      if (theme === "dark" && isDarkImage) {
        imagesList.push(image);
      } else if (theme === "light" && !isDarkImage) {
        imagesList.push(image);
      } else if (!isDarkImage) {
        imagesList.push(image);
      }
    }
  }
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesList.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? imagesList.length - 1 : prevIndex - 1));
  };

  return (
    <div className="project-album">
      <div
        className="arrows"
        style={{
          display: imagesList.length > 1 ? "flex" : "none",
        }}
      >
        <motion.button type="button" onClick={handlePrev} {...tapAnimation}>
          <IconArrowLeft size={ARROW_SIZE} />
        </motion.button>
        <motion.button type="button" onClick={handleNext} {...tapAnimation}>
          <IconArrowRight size={ARROW_SIZE} />
        </motion.button>
      </div>
      <div className="images">
        <motion.div
          className="motion-container"
          animate={{ x: -currentIndex * IMG_MAX_SIZE }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
          }}
          style={{ display: "flex" }}
        >
          {imagesList.map((image, index) => (
            <Image
              key={image}
              src={image}
              alt={`Project image ${index + 1}`}
              width={IMG_MAX_SIZE}
              height={IMG_MAX_SIZE}
              onClick={() =>
                setImagePreview({
                  images: imagesList,
                  index: currentIndex,
                })
              }
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
