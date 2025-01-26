import { veryLongText } from "@/components/background/text";
import { ImageResponse } from "next/og";

import fs from "fs";
const fontBoldBuffer = fs.readFileSync("./src/fonts/inter/Inter-Bold.ttf");
const fontRegularBuffer = fs.readFileSync("./src/fonts/inter/Inter-Regular.ttf");
const fontMonoBuffer = fs.readFileSync("./src/fonts/JetBrainsMono/JetBrainsMono-Regular.ttf");

export const alt = "Dynamic Thumbnail";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  const fontSize = 24;
  const charsPerRow = Math.floor(size.width / fontSize);
  const rows = Math.floor(size.height / fontSize);
  const maxChar = charsPerRow * rows;

  const slicedText = veryLongText.slice(0, maxChar);
  const characters = Array.from(slicedText).map((char, index) => {
    const randomValue = Math.random();
    const opacity = randomValue ** 300;

    const x = (index % charsPerRow) * fontSize;
    const y = Math.floor(index / charsPerRow) * fontSize;

    return (
      <span
        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
        key={index}
        style={{
          position: "absolute",
          left: `${x}px`,
          top: `${y}px`,
          fontSize: `${fontSize}px`,
          opacity,
          fontFamily: "JetBrainsMono",
        }}
      >
        {char}
      </span>
    );
  });
  return new ImageResponse(
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        flexDirection: "column",
        // background: "linear-gradient(45deg, #fff, #919191)",
        // background: "linear-gradient(45deg, #fff, #F3F3F3)",
        backgroundColor: "#FFF",
        paddingLeft: "128px",
      }}
    >
      {characters}

      <h1
        style={{
          position: "relative",
          textAlign: "center",
          fontSize: "64px",
          color: "#000",
          backdropFilter: "blur(16px)",
          backgroundColor: "#fff",
          display: "flex",
          fontFamily: "Inter-Bold",
        }}
      >
        Pierre LHOSTE
      </h1>
      <p
        style={{
          position: "relative",
          textAlign: "start",
          marginLeft: "8px",
          fontSize: "32px",
          color: "#000",
          backdropFilter: "blur(16px)",
          backgroundColor: "#fff",
          maxWidth: "400px",
          fontFamily: "JetBrainsMono",
        }}
      >
        A French Developer & Designer Web
      </p>

      {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
      <svg
        viewBox="0 0 2748 2748"
        xmlns="http://www.w3.org/2000/svg"
        fillRule="evenodd"
        clipRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="1.5"
        style={{
          position: "absolute",
          bottom: 0,
          right: 32,
          height: "500",
          width: "500",
        }}
      >
        {/* <path fill="#f3f3f3" d="M0 0h2748v2748H0z" /> */}
        <path
          d="M967.614 1817.531s178.548 266.158 144.306 707.861c-34.242 441.693 710.873 119.626 715.662-246.917 4.799-366.542 98.69-1007.249-85.238-865.61-183.929 141.647-462.445 536.496-774.73 404.666z"
          fill="#fff"
        />
        <path d="M1052.34 2084.916c-4.176 86.576 8.588 140.55 98.283 236.215 42.324 45.139 155.431 91.68 331.012 91.68 174.492 0 212.311-122.314 212.311-122.314l30.608-110.855 525.612 76.005c19.912 12.639 146.168 77.71 230.67 302.113 84.29 223.829 37.256 267.908 96.47 619.397L170.694 3082.29c7.406-217.837-15.105-573.391 138.594-757.346 138.184-165.395 291.951-279.509 456.087-284.007l286.964 43.979z" />
        <path d="M1074.935 2086.005c-3.887 80.615 8.68 130.585 92.19 219.653 40.132 42.798 148.03 84.528 314.51 84.528 151.86 0 188.984-101.444 190.643-106.205l30.475-110.361c3.029-10.985 13.761-18.005 25.041-16.371l525.605 76.005a22.547 22.547 0 018.891 3.288c20.663 13.123 152.022 80.383 239.715 313.24 84.873 225.391 37.98 269.693 97.609 623.613a22.629 22.629 0 01-5.328 18.7 22.616 22.616 0 01-17.873 7.667l-2406.61-94.878c-12.436-.484-22.141-10.934-21.718-23.371 4.472-131.523-1.755-312.927 25.844-477.01 18.994-112.903 54.137-217.636 117.999-294.064 142.942-171.084 303.04-287.467 472.828-292.107 1.353-.04 2.707.04 4.045.252l286.96 43.979c11.457 1.755 19.73 11.872 19.174 23.442zm-45.88 18.227c-61.134-9.36-243.718-37.352-265.066-40.62-157.725 5.225-304.476 116.806-437.341 275.827-59.098 70.74-90.526 168.088-108.102 272.568-25.713 152.857-21.447 320.966-24.59 448.555l2356.53 92.9c-51.855-324.082-9.362-371.41-90.82-587.733-76.637-203.504-188.64-271.066-217.33-288.365-50.512-7.303-501.28-72.485-501.28-72.485l-25.308 91.64-.19.666s-40.42 138.25-233.923 138.25c-184.69 0-302.997-51.352-347.507-98.83-88.641-94.535-106.416-151.224-105.074-232.373z" />
        <g opacity=".25">
          <path d="M1643.697 2400.29c630.346 450.706-562.133-37.95-562.133-37.95s-368.757-865.516-95.575-737.713c436.557 767.975 162.689 421.714 657.708 775.662z" />
          <path d="M1180.99 2072.076c92.957-11.064 462.834-283.607 472.943-523.847 2.748-65.172-38.916 117.497-160.833 184.504-160.399 88.148-714.438-62.718-714.438-62.718s153.633 431.661 402.327 402.061z" />
        </g>
        <path
          d="M706.722 1215.889c-18.088 225.331-120.01 94.022-73.193 615.426 2.893 32.206 55.677-593.037 185.375-469.1-112.794 157.858-178.315 749.201-8.012 920.046-2.225-47.071 16.694-123.481 50.187-149.628 47.958 41.012 44.644 277.234 32.942 326.922-11.702 49.687 112.483-45.746 100.788-183.799-12.567-148.335 26.848 230.5-41.868 286.616-68.717 56.127 334.525-1.097 65.117-622.104-187.08-431.227-297.111-901.598-311.336-724.38z"
          fill="#616161"
          stroke="#000"
          stroke-width="45.24653610000001"
        />
        <path
          d="M1781.01 1407.94s41.92 341.01-127.02 609.28"
          fill="none"
          stroke="#000"
          stroke-width="92.09"
          transform="matrix(.5241 -.03055 -.02648 -.45428 -2.536 2928.612)"
        />
        <path
          d="M1645.93 1500.192c138.216-135.24 187.426-331.352 181.117-517.051-3.344-98.474-22.303-194.027-51.88-276.017-17.124-47.477-37.82-90.41-61.1-126.734-28.894-45.089-61.795-79.996-96.824-100.772C967.185 94.11 734.748 666.54 734.748 666.54c-28.857 99.53-60.474 125.05-62.131 291.616-.422 42.304-57.65 63.13 3.488 146.37 61.944 84.336-11.835 226.786 53.469 435.548 8.62 27.558 22.557 55.073 33.764 86.16 44.845 124.404 136.592 174.798 147.764 217.286 9.72 36.962 125.716 128.063 270.213 53.358 87.062-58.06 112.383-56.854 292.425-154.764 20.87-11.346 101.612-55.257 172.19-241.922z"
          fill="#fff"
        />
        <path d="M1733.112 568.183c6.743 10.511 3.67 24.515-6.84 31.253-10.511 6.736-24.508 3.672-31.25-6.839-26.745-41.725-56.898-74.295-89.321-93.522-251.435-149.113-437.966-151.747-571.64-99.15-190.158 74.825-271.567 259.109-277.947 274.152-28.169 96.46-59.26 121.856-60.877 284.307-.162 16.288-6.214 30.306-13.43 44.54-5.076 10.012-11.216 20.165-11.286 33.662-.074 14.094 6.528 31.01 23.817 54.552 27.483 37.417 32.34 84.836 31.158 143.47-1.562 77.41-12.587 176.426 25.667 298.712 8.53 27.276 22.366 54.476 33.456 85.238 30.1 83.511 82.653 131.94 114.9 167.641 17.437 19.295 29.406 36.147 33.46 51.566 2.13 8.1 12.438 18.698 27 29.578 41.626 31.077 119.494 56.192 209.864 9.99 86.264-57.289 127.558-57.223 293.734-170.834 10.315-7.047 24.398-4.397 31.445 5.907 7.047 10.316 4.398 24.399-5.907 31.446-167.13 114.25-208.12 113.74-295.248 171.843-.695.467-1.422.89-2.16 1.27-111.47 57.637-207.51 24.931-258.798-13.377-25.348-18.926-39.98-40.23-43.685-54.324-3.807-14.474-19.79-29.11-38.61-49.35-34.727-37.332-80.364-87.79-108.557-166.013-11.323-31.413-25.363-59.222-34.074-87.073-40.11-128.215-29.358-231.977-27.721-313.132.95-47.092-.314-85.726-22.388-115.77-21.57-29.373-29.973-52.425-32.049-71.242-2.288-20.75 2.762-37.212 9.7-52.207 5.757-12.433 14.335-22.89 14.47-36.549 1.692-169.987 33.577-196.113 63.025-297.687.218-.749.474-1.487.768-2.212 0 0 87.318-215.058 303.708-300.204 142.8-56.19 342.677-56.96 611.279 102.335 37.656 22.328 73.282 59.57 104.337 108.023z" />
        <path
          d="M1828.361 916.553l98.713 360.81-99.495-363.655.782 2.845-.782-1.075s673.258 315.108 99.495 361.886"
          stroke="#000"
          stroke-width="63.336463900000005"
        />
        <path
          d="M1475.325 547.757s7.927 203.06 95.977 507.472c21.977 75.976 48.949 158.26 82.023 245.278a3271.255 3271.255 0 0048.374 119.963 3263.194 3263.194 0 0025.973 59.232 3210.933 3210.933 0 0027.135 58.71c45.724 96.4-20.283 428.11-29.307 503.49-9.023 75.378-67.788 159.866-53.173 303.293 3.964 38.938 146.805 422.953 435.592 294.977-218.795-193.723-135.685-368.737-139.985-335.978-9.751 74.293-48.732 331.113 351.483 312.187-153.623-139.735-122.981-227.71-120.983-228.99 52.586 22.292 125.435-46.202 103.544-81.655-33.432-11.705-119.875 21.988-44.052-260.089 43.586-162.18-43.824-401.203-149.497-482.76-148.9-114.913 21.011-199.445-163.927-407.772-172.593-194.407-37.082-539.317-383.277-716.555-106.509-54.526-548.791-256.073-816.088 187.777-15.866 26.345 260.556-176.122 730.188-78.58z"
          fill="#616161"
          stroke="#000"
          stroke-width="45.24653610000001"
        />
        <path
          d="M1603.18 1612.2s-15.89 60.26 120.63 243.85c259.78 349.34 71.89 382.74 71.89 382.74"
          fill="none"
          stroke="#000"
          stroke-width="72.34"
          transform="matrix(-.45813 .25637 .34762 .6212 2323.706 446.933)"
        />
        <path
          d="M1756.91 1591.22c308.62 172.72 27.82 641.08 27.82 641.08"
          fill="none"
          stroke="#000"
          stroke-width="70.79"
          transform="matrix(-.53431 .1964 -.2422 -.65887 3522.56 3090.726)"
        />
        <path
          d="M1380.1 1101.06s164.45 102.56 285.29 111.55c77.6 5.78-127.71-53.11-322.22-255.049"
          fill="none"
          stroke="#000"
          stroke-width="39.42"
          transform="matrix(1.03644 .22005 -.25538 1.20287 462.514 -839.535)"
        />
        <g>
          <path
            d="M1817.742 1210.373s61.458 113.49 60.285-31.815c-1.184-145.306.565-205.374-77.083-149.682-77.648 55.692 16.798 181.497 16.798 181.497z"
            fill="#fff"
          />
          <path
            d="M1848.308 1255.532c70.937-256.397 20.641-248.46-35.366-239.675"
            fill="none"
            stroke="#000"
            stroke-width="45.24653610000001"
          />
        </g>
        <g>
          <path
            d="M1491.21 1430.81s40.25 135.82 232.6 425.24c112.57 169.37 60.92 376.25 60.92 376.25"
            fill="none"
            stroke="#000"
            stroke-width="49.21"
            transform="matrix(.89275 0 0 .94515 418.103 -302.318)"
          />
        </g>
        <g>
          <path
            d="M1061.371 605.218c209.09-20.106 425.692-64.29 768.619 265.54 58.472 98.984 102.752-178.205 25.919-294.311-84.673-127.963-374.905-328.448-517.007-328.448-142.103 0-398.845 61.631-497.146 164.242-131.922 137.705-119.52 275.535-119.52 275.535s7.16-23.451 23.314-27.383c4.276-65.44 66.137-82.742 129.86-96.135 57.581-12.1 184.36-35.695 185.961 40.96z"
            stroke="#000"
            stroke-width="63.336463900000005"
          />
          <path
            d="M1087.878 705.72c12.589-7.062-108.77-265.178-200.088-240.597-113.3 30.498-148.758 303.9-121.205 310.892 27.554 6.992 308.704-63.232 321.293-70.294z"
            fill="#fff"
          />
          <g transform="matrix(.7611 0 0 .5652 295.315 364.905)">
            <clipPath id="prefix__a">
              <path d="M1041.34 603.007c16.54-12.495-142.912-469.183-262.894-425.691-148.862 53.96-195.451 537.691-159.249 550.063 36.202 12.371 405.603-111.877 422.143-124.372z" />
            </clipPath>
            <g clip-path="url(#prefix__a)">
              <path
                d="M1080.655 361.142c19.908-6.718-172.02-252.254-316.438-228.87-179.18 29.01-235.258 289.086-191.683 295.738 43.575 6.651 488.212-60.15 508.12-66.868z"
                fill="#616161"
              />
            </g>
          </g>
          <g transform="matrix(1.37166 0 0 .64576 -125.686 95.565)">
            <clipPath id="prefix__b">
              <ellipse cx="777.398" cy="795.46" rx="160.587" ry="225.113" />
            </clipPath>
            <g clip-path="url(#prefix__b)">
              <path
                d="M1058.34 798.232c-242.875-2.162-359.682 43.433-472.88 81.433"
                fill="none"
                stroke="#000"
                stroke-width="87.5"
                transform="matrix(.79161 0 0 1.68147 156.2 -618.5)"
              />
            </g>
          </g>
          <g>
            <path
              d="M1120.855 529.032c3.935 5.011 12.868 30.924 13.65 42.14"
              fill="none"
              stroke="silver"
              stroke-width="45.2455908"
            />
          </g>
        </g>
        <g transform="matrix(.52969 0 0 1.08583 568.684 -298.555)">
          <ellipse cx="370.031" cy="1163.04" rx="169.807" ry="130.782" fill="none" />
          <clipPath id="prefix__c">
            <ellipse cx="370.031" cy="1163.04" rx="169.807" ry="130.782" />
          </clipPath>
          <g clip-path="url(#prefix__c)">
            <path
              d="M846.6 1157.74s87.614-80.15 238.78-14.27c60.88 26.53-73.53-87.42-238.78-21.81-33.649 13.36 0 36.08 0 36.08z"
              stroke="#000"
              stroke-width="20.83"
              transform="matrix(-1.94795 .31152 .6386 .95024 1352.24 -165.97)"
            />
          </g>
          <g>
            <path
              d="M846.6 1157.74s87.614-80.15 238.78-14.27c60.88 26.53-73.53-87.42-238.78-21.81-33.649 13.36 0 36.08 0 36.08z"
              stroke="#000"
              stroke-width="20.83"
              transform="matrix(2.04995 0 0 1 -906.418 -4.867)"
            />
          </g>
        </g>
        <g>
          <path
            d="M861.079 1098.814s-11.524 32.032-32.448 132.776c-11.42 54.997-128.75 134.458 32.448 198.718"
            fill="none"
            stroke="#000"
            stroke-width="45.24653610000001"
          />
        </g>
        <g>
          <path
            d="M841.337 1619.161a14.487 14.487 0 011.224-5.25c.444-1.41 9.25-29.07 22.3-47.77 11.73-16.81 28.215-30.2 49.133-31.38 78.823-4.42 81.733-14.55 131.747 11.56 3.701 1.94 6.855 4.87 10.67 6.56 13.065 5.82 58.67 17.83 76.977 22.35 1.242.02 2.485.19 3.697.53 3.842 1.06 5.83 1.73 6.326 1.93l3.04 1.68 3.83 4.05 2.12 5.73-.49 6.35-3 5.38-2.485 2.23-2.943 1.63-4.914 1.07-5.21-.6c-.79-.18-1.88-.44-3.224-.76-32.476 6.5-86.837 35.83-136.089 52.8-38.485 13.25-74.34 18.25-97.507 6.08-32.09-16.87-43.72-27.16-46.9-30.36-.749-.35-1.46-.77-2.13-1.24a14.563 14.563 0 01-4.692-5.5 14.479 14.479 0 01-1.48-7.07zm288.128-14.87c-.067-.02-.134-.04-.202-.05l-.605-.04c.27.05.538.07.807.09z"
            fill="#fed1d0"
          />
        </g>
        <g>
          <path
            d="M1086.144 1079.623c12.612 26.467 39.836 39.938 60.9 29.943 20.942-9.937 27.77-39.503 15.159-66.03-12.551-26.526-39.777-39.937-60.78-29.94-21.001 9.875-27.77 39.502-15.218 65.968l-.061.059zm-366.41 55.2c12.552 26.525 37.166 41.216 54.89 32.85 17.726-8.487 21.943-36.773 9.332-63.3-12.55-26.526-37.165-41.217-54.89-32.79s-21.942 36.712-9.331 63.24z"
            fill-rule="nonzero"
          />
        </g>
      </svg>
    </div>,
    {
      ...size,
      fonts: [
        {
          name: "Inter-Bold",
          data: fontBoldBuffer,
          weight: 800,
          style: "normal",
        },
        {
          name: "Inter",
          data: fontRegularBuffer,
          weight: 400,
          style: "normal",
        },
        {
          name: "JetBrainsMono",
          data: fontMonoBuffer,
          weight: 400,
          style: "normal",
        },
      ],
    }
  );
}
