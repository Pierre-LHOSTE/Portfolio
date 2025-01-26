"use server";
import "./thumbnail.scss";

const SIZE = {
  width: 1084,
  height: 632,
};

export default function Thumbnail() {
  return (
    <div id="thumbnail2">
      <div id="background">
        <svg
          id="visual"
          viewBox="0 0 900 600"
          width={SIZE.width}
          height={SIZE.height}
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
        >
          <defs>
            <filter id="blur1" x="-10%" y="-10%" width="120%" height="120%">
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feBlend>
              <feGaussianBlur stdDeviation="161" result="effect1_foregroundBlur"></feGaussianBlur>
            </filter>
          </defs>
          <g filter="url(#blur1)">
            <circle cx="537" cy="441" fill="#DDDDDD" r="357"></circle>
            <circle cx="663" cy="79" fill="#fff" r="357"></circle>
            <circle cx="708" cy="570" fill="#DDDDDD" r="357"></circle>
            <circle cx="255" cy="440" fill="#DDDDDD" r="357"></circle>
            <circle cx="200" cy="237" fill="#fff" r="357"></circle>
            <circle cx="75" cy="14" fill="#DDDDDD" r="357"></circle>
          </g>
        </svg>
      </div>
      <div id="element">
        <div>
          <span className="type">
            <span>Personal portfolio</span>
          </span>
          <h3>Pierre LHOSTE</h3>
          <p className="details">Developer & Designer Web</p>
        </div>
      </div>
    </div>
  );
}
