import React from "react";
import style from "./Header.module.css";
import { useNavigate } from "react-router-dom";
import Logo from "../../shared/Logo/Logo";

const Header = () => {
  const navigate = useNavigate();
  const isAuthenticated = false; // Здесь будет логика для проверки, авторизован ли пользователь

  return (
    <header className={style.header}>
      <div className={style.logo}>
        <Logo />
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
