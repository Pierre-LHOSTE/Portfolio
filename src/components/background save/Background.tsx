import { useSettingsStore } from "@/stores/settings.store";
import { useEffect, useRef } from "react";
import { veryLongText } from "./text";
import "./background.scss";

const fontSize = 16;
const appearanceTime = 3; // secondes pour apparaître
const disappearanceTime = 3; // secondes pour disparaître
const appearanceProbability = (0.05 / 10000) * 2;
const maxBlur = 2; // Flou maximal (en pixels)

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const activeTheme = useSettingsStore((state) => state.activeTheme);

  useEffect(() => {
    let animationFrameId: number;
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = document.body.scrollHeight;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.font = `${fontSize}px Arial`;
    ctx.textBaseline = "top";

    const characters = veryLongText.split("").map((char, index) => ({
      char,
      x: (index % Math.floor(canvas.width / fontSize)) * fontSize,
      y: Math.floor(index / Math.floor(canvas.width / fontSize)) * fontSize,
      status: 0, // 0 = inactif, 1 = apparition, 2 = disparition
      alpha: 0, // opacité entre 0 et 1
      blur: maxBlur, // flou initial
    }));

    const activeCharacters: Set<number> = new Set();
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < characters.length; i++) {
        const char = characters[i];

        if (char.status === 0) {
          if (Math.random() < appearanceProbability) {
            char.status = 1;
            activeCharacters.add(i);
          }
          continue;
        }

        if (char.status === 1) {
          char.alpha += 1 / (appearanceTime * 60);
          char.blur -= maxBlur / (appearanceTime * 60);
          if (char.alpha >= 1) {
            char.alpha = 1;
            char.blur = 0;
            char.status = 2;
          }
        } else if (char.status === 2) {
          char.alpha -= 1 / (disappearanceTime * 60);
          char.blur += maxBlur / (disappearanceTime * 60);
          if (char.alpha <= 0) {
            char.alpha = 0;
            char.blur = maxBlur;
            char.status = 0;
            activeCharacters.delete(i);
          }
        }

        if (char.alpha > 0) {
          ctx.globalAlpha = char.alpha;
          ctx.filter = `blur(${char.blur}px)`;
          ctx.fillStyle = activeTheme === "dark" ? "#fff" : "#000";
          ctx.fillText(char.char, char.x, char.y);
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [activeTheme]);

  return <canvas ref={canvasRef} />;
}
