import React from "react";
import style from "./Header.module.css";
import { useNavigate } from "react-router-dom";
import Logo from "../../shared/Logo/Logo";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className={style.header}>
      <div className={style.logo}>
        {" "}
        <Logo />
      </div>
      <nav className={style.nav}>
        <a className={style.nav_links} onClick={() => navigate("/")}>
          Главная страница
        </a>

        <a className={style.nav_links} href="#services">
          Services
        </a>
        <a className={style.nav_links} onClick={() => navigate("/profile")}>
          Personal Page
        </a>
      </nav>
      <button onClick={() => navigate("/login")} className={style.btn}>
        Sign Up
      </button>
    </header>
  );
};

export default Header;
