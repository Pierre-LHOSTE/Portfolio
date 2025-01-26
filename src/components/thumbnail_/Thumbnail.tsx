import "./thumbnail.scss";

export default function Thumbnail() {
  return (
    <div id="thumbnail">
      <div id="background">
        <svg
          id="visual"
          viewBox="0 0 900 600"
          width="900"
          height="600"
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
          <rect width="900" height="600" fill="#000000"></rect>
          <g filter="url(#blur1)">
            <circle cx="537" cy="441" fill="#575757" r="357"></circle>
            <circle cx="663" cy="79" fill="#000000" r="357"></circle>
            <circle cx="708" cy="570" fill="#575757" r="357"></circle>
            <circle cx="255" cy="440" fill="#575757" r="357"></circle>
            <circle cx="200" cy="237" fill="#000000" r="357"></circle>
            <circle cx="75" cy="14" fill="#575757" r="357"></circle>
          </g>
        </svg>
      </div>
      <div className="element ghost">
        <div className="date">
          <span>2025</span>
        </div>
        <div className="content">
          <div />
        </div>
      </div>
      <div className="element">
        <div className="date">
          <span>{new Date().getFullYear()}</span>
        </div>
        <div className="content">
          <div>
            <span className="type">Personal portfolio</span>
            <h3>Pierre LHOSTE</h3>
            <p className="details">Developer & Designer Web</p>
          </div>
        </div>
      </div>
      <div className="element ghost">
        <div className="date">
          <span>2025</span>
        </div>
        <div className="content">
          <div />
        </div>
      </div>
      {/* <Background /> */}
    </div>
  );
}
