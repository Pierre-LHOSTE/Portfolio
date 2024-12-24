import type { ReactNode } from "react";
import "./tag.scss";
import Image from "next/image";

export default function Tag({ children, icon }: { children: ReactNode; icon?: string }) {
  return (
    <span className="tag">
      {icon && <Image src={icon} alt={`${children} icon`} width={16} height={16} />}
      {children}
    </span>
  );
}
