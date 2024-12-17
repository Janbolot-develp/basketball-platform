import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Моковые данные для администратора
const adminCredentials = {
  email: "janbolot@gmail.com",
  password: "admin123",
};

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [isRegistering, setIsRegistering] = useState(false); // Состояние для переключения между логином и регистрацией
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isRegistering) {
      // Логика для регистрации нового пользователя
      localStorage.setItem(email, JSON.stringify({ email, password, role }));
      console.log("Регистрация успешна:", { email, password, role });
      setIsRegistering(false); // После регистрации переключаем обратно на форму логина
    } else {
      // Логика для входа
      if (role === "admin" && email === adminCredentials.email && password === adminCredentials.password) {
        navigate("/admin-dashboard"); // Перенаправление на панель администратора
      } else if (localStorage.getItem(email)) {
        const userData = JSON.parse(localStorage.getItem(email) as string);
        if (userData.password === password) {
          navigate("/"); // Перенаправление на главную страницу
        } else {
          alert(t("auth.login.invalidCredentials"));
        }
      } else {
        alert(t("auth.login.userNotFound"));
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          {isRegistering ? t("auth.register.title") : t("auth.login.title")}
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Ввод email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                {t("auth.login.email")}
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            {/* Ввод пароля */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                {t("auth.login.password")}
              </label>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            {/* Выбор роли пользователя */}
            {!isRegistering && (
              <div>
                <label
                  htmlFor="role"
                  className="block text-sm font-medium text-gray-700"
                >
                  {t("auth.login.role")}
                </label>
                <select
                  id="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                >
                  <option value="user">{t("auth.login.roleUser")}</option>
                  <option value="admin">{t("auth.login.roleAdmin")}</option>
                </select>
              </div>
            )}

            <div className="flex items-center justify-between">
              <div className="text-sm">
                {!isRegistering ? (
                  <Link
                    to="/forgot-password"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    {t("auth.login.forgotPassword")}
                  </Link>
                ) : (
                  <Link
                    to="/"
                    onClick={() => setIsRegistering(false)}
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    {t("auth.login.backToLogin")}
                  </Link>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {isRegistering ? t("auth.register.submit") : t("auth.login.submit")}
            </button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  {isRegistering
                    ? t("auth.register.haveAccount")
                    : t("auth.login.noAccount")}{" "}
                  <Link
                    to="#"
                    onClick={() => setIsRegistering(!isRegistering)}
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    {isRegistering
                      ? t("auth.register.loginInstead")
                      : t("auth.login.register")}
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
