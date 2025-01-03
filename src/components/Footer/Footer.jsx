import React from "react";
import style from "./Footer.module.css";
// import UnicamLogo from "../../shared/unicamLogo/UnicamLogo";

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
    <div className={style.footerContainer}>
      <div className={style.container}>
        <div className={style.footerCenter}>
          <div className={style.footerText}>
            {/* <UnicamLogo /> */}
            <p className={style.footerIconText}>
              Найди работу у нас
              <br />
            </p>
          </div>

          <div className={style.footerOffice}>
            <h1 className={style.footerTitle}>Офис</h1>
            <p className={style.footerDetails}>Почта</p>
            <p className={style.footerDetails}>Адрес</p>
          </div>

          <div className={style.footerSocial}>
            <h1 className={style.footerTitle}>Соц. сети</h1>
            <div className={style.footerSocialLinks}>
              {socialLinks.map(({ name, href }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={style.footerSocialBtn}
                >
                  {name}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className={style.footerBottom}>
          <p className={style.footerCopyright}>
            2025 - All rights reserved - Eldar Aibekov
          </p>
          <div className={style.footerCreator}>
            <a
              href="https://github.com/Eldar4432"
              target="_blank"
              rel="noopener noreferrer"
              className={style.footerCreatorLink}
            >
              Eldar Aibekov
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
