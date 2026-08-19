import { Link } from "react-router-dom";

const tabs = [
  { to: "/", label: "Home", color: "bg-purple" },
  { to: "/resume", label: "Resume", color: "bg-blue" },
  { to: "/more", label: "More", color: "bg-green" },
  // { to: "/contact", label: "Contact", color: "bg-orange" },
];

function NavBar() {
  return (
    <nav className="flex w-full gap-5 py-4 lg:pr-50">
      {tabs.map((tab) => (
        <Link
          key={tab.to}
          to={tab.to}
          className={`${tab.color} font-rubik rounded-chip min-w-20 flex-1 px-3.5 py-1.5 text-left text-base font-semibold text-white no-underline transition-opacity duration-200 hover:opacity-85`}
        >
          {tab.label}
        </Link>
      ))}
    </nav>
  );
}

export default NavBar;
