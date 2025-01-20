import React from "react";
import style from "./Header.module.css";
import { useNavigate } from "react-router-dom";
import Logo from "../../shared/Logo/Logo";
import i18n from "../../i18n";

const Header = () => {
  const navigate = useNavigate();
  const isAuthenticated = false; // Здесь будет логика для проверки, авторизован ли пользователь

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang); // Меняем язык
  };

  return (
    <header className={style.header}>
      <div className={style.logo}>
        <Logo />
        <p className={style.slogan}>Найди свою работу с нами!</p>
      </div>
      <nav className={style.nav}>
        <a className={style.nav_links} onClick={() => navigate("/")}>
          Главная
        </a>

        <a className={style.nav_links} onClick={() => navigate("/jobs")}>
          Вакансии
        </a>

        <a className={style.nav_links} onClick={() => navigate("/about")}>
          О нас
        </a>

        <div className={style.languageSelector}>
          <button
            onClick={() => handleLanguageChange("en")}
            className={style.languageBtn}
          >
            EN
          </button>
          <button
            onClick={() => handleLanguageChange("ru")}
            className={style.languageBtn}
          >
            RU
          </button>
          <button
            onClick={() => handleLanguageChange("ky")}
            className={style.languageBtn}
          >
            KY
          </button>
        </div>

        {isAuthenticated ? (
          <a className={style.nav_links} onClick={() => navigate("/profile")}>
            Личный кабинет
          </a>
        ) : null}
      </nav>
      {!isAuthenticated ? (
        <button onClick={() => navigate("/login")} className={style.btn}>
          Войти
        </button>
      ) : (
        <button onClick={() => navigate("/logout")} className={style.btn}>
          Выйти
        </button>
      )}
    </header>
  );
};

export default Header;
