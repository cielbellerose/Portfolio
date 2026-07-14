import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

const tabs = [
  { to: "/", label: "Home", color: "var(--purple)" },
  { to: "/resume", label: "Resume", color: "var(--blue)" },
  { to: "/more", label: "More", color: "var(--green)" },
  { to: "/contact", label: "Contact", color: "var(--orange)" },
];

function NavBar() {
  return (
    <nav className={styles["navbar"]}>
      {tabs.map((tab) => (
        <Link key={tab.to} to={tab.to} style={{ backgroundColor: tab.color }}>
          {tab.label}
        </Link>
      ))}
    </nav>
  );
}

export default NavBar;
