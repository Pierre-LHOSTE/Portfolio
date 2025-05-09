import { AnimatePresence, motion } from "motion/react";
import { type ReactNode, useEffect, useRef, useState } from "react";
import "./tooltip.scss";

const PADDING = 24 + 16 * 2;

export default function Tooltip({
  children,
  content,
  forceOpen,
  setForceOpen,
}: {
  children: ReactNode;
  content: ReactNode;
  forceOpen?: boolean;
  setForceOpen?: (open: boolean) => void;
}) {
  const [open, setOpen] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const tooltipContentRef = useRef<HTMLDivElement>(null);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (forceOpen !== undefined) {
      setOpen(forceOpen);
    }
  }, [forceOpen]);

  function handleOpen() {
    setOpen(true);
  }

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (tooltipRef.current && !tooltipRef.current.contains(e.target as Node)) {
        setOpen(false);
        if (setForceOpen) setForceOpen(false);
      }
    }

    if (open) document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, setForceOpen]);

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

      const firstPoint = Math.floor(tooltipRef.current.getBoundingClientRect().left);
      if (firstPoint - PADDING < 0) {
        const diff = firstPoint - PADDING;
        setTranslate({ x: -diff, y: 0 });
      }
    }

    if (tooltipContentRef.current) {
      const tooltipContentTop = tooltipContentRef.current.getBoundingClientRect().height;
      setTranslate((prev) => ({ ...prev, y: -(tooltipContentTop / 2) }));
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
      <div
        className="tap-area"
        onClick={handleOpen}
        tabIndex={0}
        ref={tooltipContentRef}
        style={{
          pointerEvents: forceOpen !== undefined ? "none" : "auto",
        }}
      />
      <AnimatePresence>
        {open && (
          <motion.div
            ref={tooltipRef}
            className="content"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, type: "spring", stiffness: 400, damping: 20 }}
            style={{
              translate: `calc(-50% + ${translate.x}px) ${translate.y}px`,
            }}
          >
            {content}
            <div
              className="tooltip-arrow"
              style={{
                translate: `calc(-50% - ${translate.x}px) ${0}px`,
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </div>
  );
}
