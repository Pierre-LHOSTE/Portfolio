import Image from "next/image";
import "./title.scss";
import { useI18nContext } from "@/i18n/i18n-react";

const IMAGE_SIZE = 76;

export default function Title() {
  const { LL } = useI18nContext();

  return (
    <div id="title">
      <Image
        src="https://qg007gk6n2popinf.public.blob.vercel-storage.com/assets/avatar.png"
        alt="Profile Picture"
        width={IMAGE_SIZE}
        height={IMAGE_SIZE}
      />
      <div>
        <h1>Pierre LHOSTE</h1>
        <h2>{LL.cv.title()}</h2>
        <span>
          {new Date().getMonth() >= 1
            ? new Date().getFullYear() - 2000
            : new Date().getFullYear() - 2001}{" "}
          {LL.cv.yearsOld()}
        </span>
      </div>
    </div>
  );
}
