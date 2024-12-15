import { Link } from "react-router-dom";
import { NavItemProps } from "../types";

export default function NavItem({ icon, text, path, isActive }: NavItemProps) {
  return (
    <Link
      to={path}
      className={`flex items-center space-x-1 transition-colors ${
        isActive ? "text-white" : "text-indigo-200 hover:text-white"
      }`}
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
}
