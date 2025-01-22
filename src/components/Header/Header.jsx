// import React, { useState } from "react";
// import style from "./Header.module.css";
// import { useNavigate } from "react-router-dom";
// import Logo from "../../shared/Logo/Logo";
// import i18n from "../../locales/index";
// import { useTranslation } from "react-i18next";
// import english from "../../assets/english.png";
// import russia from "../../assets/russia.png";
// import kyrgyzstan from "../../assets/kyrgyzstan.png";

// const Header = () => {
//   const { t } = useTranslation();
//   const navigate = useNavigate();
//   const [isLanguageMenuOpen, setLanguageMenuOpen] = useState(false);
//   const isAuthenticated = false; // Здесь будет логика для проверки, авторизован ли пользователь

//   const handleLanguageChange = (lang) => {
//     i18n.changeLanguage(lang); // Меняем язык
//     setLanguageMenuOpen(false); // Закрываем меню после выбора
//   };

//   return (
//     <header className={style.header}>
//       <div className={style.logo}>
//         <Logo />
//         <p className={style.slogan}>Найди свою работу с нами!</p>
//       </div>
//       <nav className={style.nav}>
//         <a className={style.nav_links} href="#" onClick={() => navigate("/")}>
//           {t("main")}
//         </a>
//         <a
//           className={style.nav_links}
//           href="#"
//           onClick={() => navigate("/jobs")}
//         >
//           Вакансии
//         </a>
//         <a
//           className={style.nav_links}
//           href="#"
//           onClick={() => navigate("/about")}
//         >
//           О нас
//         </a>

//         <div className={style.languageSelector}>
//           <button
//             onClick={() => setLanguageMenuOpen(!isLanguageMenuOpen)}
//             className={style.languageBtn}
//           >
//             {t("language")} ▼
//           </button>
//           {isLanguageMenuOpen && (
//             <ul className={style.languageMenu}>
//               <li onClick={() => handleLanguageChange("en")}>
//                 <img src={english} alt="English" className={style.flag} /> EN
//               </li>
//               <li onClick={() => handleLanguageChange("ru")}>
//                 <img src={russia} alt="Русский" className={style.flag} /> RU
//               </li>
//               <li onClick={() => handleLanguageChange("ky")}>
//                 <img src={kyrgyzstan} alt="Кыргызча" className={style.flag} />{" "}
//                 KY
//               </li>
//             </ul>
//           )}
//         </div>

//         {isAuthenticated ? (
//           <a className={style.nav_links} onClick={() => navigate("/profile")}>
//             Личный кабинет
//           </a>
//         ) : null}
//       </nav>
//       {!isAuthenticated ? (
//         <button onClick={() => navigate("/login")} className={style.btn}>
//           Войти
//         </button>
//       ) : (
//         <button onClick={() => navigate("/logout")} className={style.btn}>
//           Выйти
//         </button>
//       )}
//     </header>
//   );
// };

// export default Header;

import React, { useState } from "react";
import style from "./Header.module.css";
import { useNavigate } from "react-router-dom";
import Logo from "../../shared/Logo/Logo";
import i18n from "../../locales/index";
import { useTranslation } from "react-i18next";
import english from "../../assets/english.png";
import russia from "../../assets/russia.png";
import kyrgyzstan from "../../assets/kyrgyzstan.png";

const Header = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isLanguageMenuOpen, setLanguageMenuOpen] = useState(false);
  const isAuthenticated = false;

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setLanguageMenuOpen(false);
  };

  return (
    <header className={style.header}>
      <div className={style.logo}>
        <Logo />
        <p className={style.slogan}>{t("findJob")}</p>
      </div>
      <nav className={style.nav}>
        <a className={style.nav_links} href="#" onClick={() => navigate("/")}>
          {t("main")}
        </a>
        <a
          className={style.nav_links}
          href="#"
          onClick={() => navigate("/jobs")}
        >
          {t("jobs")}
        </a>
        <a
          className={style.nav_links}
          href="#"
          onClick={() => navigate("/about")}
        >
          {t("aboutus")}
        </a>
      </nav>

      <div className={style.navWrapper}>
        {!isAuthenticated ? (
          <button onClick={() => navigate("/login")} className={style.btn}>
            {t("login")}
          </button>
        ) : (
          <button onClick={() => navigate("/logout")} className={style.btn}>
            {t("logout")}
          </button>
        )}

        <div className={style.languageSelector}>
          <button
            onClick={() => setLanguageMenuOpen(!isLanguageMenuOpen)}
            className={style.languageBtn}
          >
            {t("language")} ▼
          </button>
          {isLanguageMenuOpen && (
            <ul className={style.languageMenu}>
              <li onClick={() => handleLanguageChange("en")}>
                <img src={english} alt="English" className={style.flag} /> EN
              </li>
              <li onClick={() => handleLanguageChange("ru")}>
                <img src={russia} alt="Русский" className={style.flag} /> RU
              </li>
              <li onClick={() => handleLanguageChange("ky")}>
                <img src={kyrgyzstan} alt="Кыргызча" className={style.flag} />{" "}
                KY
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
