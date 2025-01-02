import "./pixel.scss";

const COLUMNS = 48;
const ROWS = 18;

export default function Pixel() {
  return (
    <section id="pixel">
      <table>
        <tbody>
          {Array.from({ length: ROWS }).map((_, rowIndex) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <tr key={rowIndex}>
              {Array.from({ length: COLUMNS }).map((_, columnIndex) => (
                <td
                  // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                  key={columnIndex}
                >
                  <div className="pixel" />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {/* <span>Just a small pixel art game, temporarily available locally only</span>
      <span>Just click on the pixel to change its color!</span> */}
    </section>
  );
}
