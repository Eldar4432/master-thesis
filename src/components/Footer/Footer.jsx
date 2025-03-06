import React from "react";
import style from "./Footer.module.css";
import { useTranslation } from "react-i18next";

import Logo from "../../shared/Logo/Logo";

const Footer = () => {
  const { t } = useTranslation();
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
          <p className={style.slogan}> {t("footer.findJob")}</p>
        </div>
        <div className={style.linksSection}>
          <h4> {t("footer.usefulLinks")} </h4>
          <ul className={style.linksList}>
            <li>
              <a href="/about">{t("footer.aboutUs")}</a>
            </li>
            <li>
              <a href="/contact">{t("footer.contacts")}</a>
            </li>
            <li>
              <a href="/terms">{t("footer.terms")}</a>
            </li>
            <li>
              <a href="/privacy">{t("footer.privacy")}</a>
            </li>
          </ul>
        </div>
        <div className={style.socialLinks}>
          <h4>{t("footer.social")}</h4>
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
          © 2025 Eldar Aibekov. {t("footer.reserved")}.
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
