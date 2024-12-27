import { AnimatePresence, motion } from "framer-motion";
import { type ReactNode, useEffect, useRef, useState } from "react";
import "./tooltip.scss";

const PADDING = 24 + 16 * 2;

export default function Tooltip({
  children,
  content,
}: {
  children: ReactNode;
  content: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });

  function handleOpen() {
    setOpen(true);
  }

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (tooltipRef.current && !tooltipRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    if (open) document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (tooltipRef.current) {
      const screenWidth = window.innerWidth;
      const lastPoint = Math.ceil(
        tooltipRef.current.getBoundingClientRect().left + tooltipRef.current.offsetWidth
      );

      if (lastPoint + PADDING > screenWidth) {
        const diff = lastPoint - screenWidth;
        setTranslate({ x: -diff - PADDING, y: 0 });
      }
    }

    return () => {
      setTranslate({ x: 0, y: 0 });
    };
  }, [open]);

  return (
    <div className="tooltip">
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
      {/* biome-ignore lint/a11y/noNoninteractiveTabindex: <explanation> */}
      {/* biome-ignore lint/nursery/noStaticElementInteractions: <explanation> */}
      <div className="tap-area" onClick={handleOpen} tabIndex={0} />
      <AnimatePresence>
        {open && (
          <motion.div
            ref={tooltipRef}
            className="content"
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.4, type: "spring", stiffness: 400, damping: 20 }}
            style={{
              translate: `calc(-50% + ${translate.x}px) 0.1px`,
            }}
          >
            {content}
            <div className="tooltip-arrow" />
          </motion.div>
        )}
      </AnimatePresence>

      {children}
    </div>
  );
}
