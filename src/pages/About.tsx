import { useTranslation } from "react-i18next";
import { Users, Trophy, BarChart } from "lucide-react";

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="pt-20">
      <div className="bg-indigo-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t("BasketPro")}
          </h1>
          <p className="text-xl md:text-2xl text-indigo-200 max-w-3xl mx-auto">
            {t("This is website for basketball")}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xl text-gray-600">
            {t(
              "Welcome to BasketPro, your ultimate destination for everything basketball. Our mission is to bring the world of basketball closer to you by providing the most comprehensive and up-to-date content, from player statistics to team rankings and everything in between."
            )}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <Users className="w-12 h-12 text-indigo-600 mb-6" />
            <h3 className="text-xl font-bold mb-4">
              {t("You will know about players")}
            </h3>
            <p className="text-gray-600">
              {t("See a good players or rate this players")}
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <Trophy className="w-12 h-12 text-indigo-600 mb-6" />
            <h3 className="text-xl font-bold mb-4">
              {t("You will check basketball teams")}
            </h3>
            <p className="text-gray-600">
              {t("See many teams how they play etc.")}
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <BarChart className="w-12 h-12 text-indigo-600 mb-6" />
            <h3 className="text-xl font-bold mb-4">
              {t("Watch a league games")}
            </h3>
            <p className="text-gray-600">{t("You will visit these matches")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
