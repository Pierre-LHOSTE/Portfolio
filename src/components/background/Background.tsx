import { useEffect, useRef } from "react";
import "./background.scss";
import { useSettingsStore } from "@/stores/settings.store";
import { veryLongText } from "./text";

const fontSize = 16;
const maxBlur = 2; // Flou maximal (en pixels)
const maxChar = 100;

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const activeTheme = useSettingsStore((state) => state.activeTheme);

  useEffect(() => {
    const color = activeTheme === "dark" ? "#fff" : "#000";
    let animationFrameId: number;
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = document.body.scrollHeight;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.font = `${fontSize}px Arial`;
    ctx.textBaseline = "top";

    // Create a map of characters coordinates
    const charMap = Array.from({ length: veryLongText.length }, (_, index) => ({
      x: (index % Math.floor(canvas.width / fontSize)) * fontSize,
      y: Math.floor(index / Math.floor(canvas.width / fontSize)) * fontSize,
    }));

    // Create an array of active characters
    const activeChars = Array.from({ length: maxChar }, () => ({
      charIndex: generateRandomIndex(),
      state: 0,
      delay: generateRandomDelay(),
    }));

    const draw = () => {
      for (let i = 0; i < maxChar; i++) {
        const char = activeChars[i];

        // Skip the character if it's not time to appear
        if (char.delay > 0) {
          char.delay -= 1;
          continue;
        }
        // If the character is fully visible, start fading out
        if (char.state >= 100) {
          char.state = -100;
        }
        char.state += 1;

        const { x, y } = charMap[char.charIndex];

        // Clear the character and the surrounding area
        ctx.clearRect(x - fontSize / 2, y - fontSize / 2, fontSize * 2, fontSize * 2);
        ctx.globalAlpha = Math.abs(Math.abs(char.state) / 100);
        // ctx.filter = `blur(${maxBlur - (Math.abs(char.state) / 100) * maxBlur}px)`;
        ctx.fillStyle = color;
        ctx.fillText(veryLongText[char.charIndex], x, y);

        // If the character is fully invisible, get a new random character
        if (char.state === -1) {
          char.charIndex = generateRandomIndex();
          char.state = 1;
          char.delay = generateRandomDelay();
        }
      }
      animationFrameId = requestAnimationFrame(draw);
    };

    setTimeout(() => {
      draw();
    }, 2000);
  }, [activeTheme]);

  return <canvas ref={canvasRef} />;
}

function generateRandomIndex() {
  return Math.floor(Math.random() * veryLongText.length);
}

function generateRandomDelay() {
  return Math.floor(Math.random() * (maxChar * 1.5));
}
