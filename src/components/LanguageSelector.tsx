import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";

export default function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="relative group">
      <button className="flex items-center space-x-1 text-indigo-200 hover:text-white transition-colors">
        <Globe className="w-5 h-5" />
        <span>{i18n.language.toUpperCase()}</span>
      </button>
      <div className="absolute right-0 mt-2 w-24 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
        <button
          onClick={() => changeLanguage("en")}
          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50"
        >
          English
        </button>
        <button
          onClick={() => changeLanguage("ru")}
          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50"
        >
          Русский
        </button>
      </div>
    </div>
  );
}
