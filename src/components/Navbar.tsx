import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Trophy, Users, Calendar, Home } from "lucide-react";
import { useTranslation } from "react-i18next";
import NavItem from "./NavItem";
import LanguageSelector from "./LanguageSelector";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  const navItems = [
    { icon: <Home className="h-5 w-5" />, text: t("nav.home"), path: "/" },
    {
      icon: <Trophy className="h-5 w-5" />,
      text: t("nav.rankings"),
      path: "/rankings",
    },
    {
      icon: <Users className="h-5 w-5" />,
      text: t("nav.teams"),
      path: "/teams",
    },
    {
      icon: <Calendar className="h-5 w-5" />,
      text: t("nav.schedule"),
      path: "/schedule",
    },
  ];

  return (
    <nav className="bg-indigo-600 text-white p-4 fixed w-full top-0 z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">BasketPro</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <NavItem
                key={item.path}
                {...item}
                isActive={location.pathname === item.path}
              />
            ))}
          </div>

          {/* Language Selector and Sign In */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSelector />
            <Link
              to="/register"
              className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
            >
              {t("nav.signIn")}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block py-2 hover:bg-indigo-700 px-4 rounded"
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center space-x-2">
                  {item.icon}
                  <span>{item.text}</span>
                </div>
              </Link>
            ))}
            <div className="flex items-center justify-between px-4 py-2">
              <LanguageSelector />
              <Link
                to="/register"
                className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t("nav.signIn")}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
