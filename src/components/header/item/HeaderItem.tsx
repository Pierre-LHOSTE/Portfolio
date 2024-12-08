import "./header-item.scss";

export default function HeaderItem({
  label,
  active,
}: {
  label: string;
  active: boolean;
}) {
  // first letter uppercase
  const children = label.charAt(0).toUpperCase() + label.slice(1);

  return (
    <li className={`header-item ${active ? "active" : ""}`}>
      <button type="button">{children}</button>
    </li>
  );
}
