import { useEffect, useRef, useState } from "react";
import "./select.scss";
import { AnimatePresence, motion } from "motion/react";

export default function Select({
  options,
  handleChange,
}: {
  options: { value: string; label: string }[];
  handleChange: (e: string) => void;
}) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const optionsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (optionsContainerRef.current && !optionsContainerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    if (open) document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  function handleSelectOption(option: { value: string; label: string }) {
    handleChange(option.value);
    setSelectedOption(option.value);
    setOpen(false);
  }

  function handleSwitchOpen() {
    setOpen(!open);
  }

  return (
    <div className="select">
      <button onClick={handleSwitchOpen} type="button">
        {selectedOption
          ? options.find((option) => option.value === selectedOption)?.label
          : "Select an option"}
      </button>
      {open && (
        <AnimatePresence>
          <motion.div
            className="options"
            ref={optionsContainerRef}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            {options.map((option) => (
              <button
                key={option.value}
                className={`option${option.value === selectedOption ? " selected" : ""}`}
                onClick={() => handleSelectOption(option)}
                onKeyDown={(e) => e.key === "Enter" && handleSelectOption(option)}
                type="button"
              >
                {option.label}
              </button>
            ))}
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}
