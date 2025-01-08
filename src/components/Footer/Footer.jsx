import React from "react";
import style from "./Footer.module.css";
import Logo from "../../shared/Logo/Logo";

const Footer = () => {
  const socialLinks = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/eldaraibekov_/",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/eldar-aibekov-1a0716242/",
    },
    { name: "Facebook", href: "https://www.facebook.com" },
  ];

  return (
    <footer className={style.footer}>
      <div className={style.footerTop}>
        <div className={style.logoSection}>
          <Logo />
          <p className={style.slogan}>Найди свою работу с нами!</p>
        </div>
        <div className={style.linksSection}>
          <h4>Полезные ссылки</h4>
          <ul className={style.linksList}>
            <li>
              <a href="/about">О нас</a>
            </li>
            <li>
              <a href="/contact">Контакты</a>
            </li>
            <li>
              <a href="/terms">Условия использования</a>
            </li>
            <li>
              <a href="/privacy">Политика конфиденциальности</a>
            </li>
          </ul>
        </div>
        <div className={style.socialLinks}>
          <h4>Наши соц.сети</h4>
          <div>
            {socialLinks.map(({ name, href }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={style.socialLink}
              >
                {name}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className={style.footerBottom}>
        <p className={style.copyright}>
          © 2025 Eldar Aibekov. Все права защищены.
        </p>
        <a
          href="https://github.com/Eldar4432"
          target="_blank"
          rel="noopener noreferrer"
          className={style.creatorLink}
        >
          GitHub: Eldar4432
        </a>
      </div>
    </footer>
  );
};

export default Footer;
