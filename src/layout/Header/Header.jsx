import { Link } from "react-router-dom";

export const Header = () => {
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/time", label: "Time" },
  ];

  return (
    <header>
      <nav>
        {navLinks.map(({ path, label }) => (
          <Link key={path} to={path}>
            <span>{label}</span>
          </Link>
        ))}
      </nav>
    </header>
  );
};
