import { IconMinus, IconPlus } from "@tabler/icons-react";
import "./pros-and-cons.scss";

export default function ProsAndCons({ pros, cons }: { pros: string[]; cons: string[] }) {
  return (
    <div className="pros-and-cons">
      <div className="pros">
        <h3>Pros</h3>
        <ul>
          {pros.map((pro) => (
            <li key={pro}>
              <IconPlus size={16} color="hsl(147, 67.20%, 35.90%)" />
              {pro}
            </li>
          ))}
        </ul>
      </div>
      <div className="cons">
        <h3>Cons</h3>
        <ul>
          {cons.map((con) => (
            <li key={con}>
              <IconMinus size={16} color="hsl(0, 45.50%, 50.40%)" />
              {con}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
