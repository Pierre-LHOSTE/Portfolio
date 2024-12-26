import { AnimatePresence, motion } from "framer-motion";
import { type ReactNode, useState } from "react";
import "./tooltip.scss";

export default function Tooltip({
  children,
  content,
}: {
  children: ReactNode;
  content: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div className="tooltip">
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
      {/* biome-ignore lint/a11y/noNoninteractiveTabindex: <explanation> */}
      {/* biome-ignore lint/nursery/noStaticElementInteractions: <explanation> */}
      <div className="tap-area" onClick={handleOpen} onBlur={handleClose} tabIndex={0} />
      <AnimatePresence>
        {open && (
          <motion.div
            className="content"
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.4, type: "spring", stiffness: 400, damping: 20 }}
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
