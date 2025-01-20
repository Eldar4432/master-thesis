import React from "react";
import styles from "./About.module.css";
import ava from "../../assets/ava.jpeg"; // Замените на ваш путь к фото

const About = () => {
  return (
    <div className={styles.container}>
      <section className={styles.headerSection}>
        <h1 className={styles.title}>О нас</h1>
        <p className={styles.description}>
          Мы помогаем людям находить работу своей мечты, упрощая процесс поиска
          вакансий. Этот сайт создан с любовью к людям и технологиям.
        </p>
      </section>

      <section className={styles.founderSection}>
        <div className={styles.founderContent}>
          <img src={ava} alt="Создатель" className={styles.founderPhoto} />
          <div>
            <h2 className={styles.subtitle}>Привет! Я Эльдар</h2>
            <p className={styles.text}>
              Создатель и разработчик этого сайта. Я вдохновлен идеей помочь
              каждому найти свое место в профессиональном мире. Этот проект —
              мой вклад в развитие технологий и поддержку людей.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.missionSection}>
        <div className={styles.missionContent}>
          <h2 className={styles.subtitle}>Наша миссия</h2>
          <p className={styles.text}>
            Мы верим, что поиск работы должен быть простым, удобным и
            вдохновляющим. Наша цель — создать платформу, которая соединяет
            талантливых людей с подходящими возможностями.
          </p>
        </div>
      </section>

      <section className={styles.techSection}>
        <h2 className={styles.subtitle}>Используемые технологии</h2>
        <div className={styles.techGrid}>
          <div className={styles.techItem}>
            <div className={styles.logoAndTitle}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s"
                alt="React Logo"
                className={styles.techLogo}
              />
              <h3>React</h3>
            </div>
            <p>Frontend-библиотека для создания современных приложений.</p>
          </div>

          <div className={styles.techItem}>
            <div className={styles.logoAndTitle}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png"
                alt="React Logo"
                className={styles.techLogo}
              />
              <h3>Node.js</h3>
            </div>

            <p>Серверная платформа для обработки данных и API.</p>
          </div>
          <div className={styles.techItem}>
            <div className={styles.logoAndTitle}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png"
                alt="React Logo"
                className={styles.techLogo}
              />

              <h3>PostgreSQL</h3>
            </div>

            <p>Надежная база данных для хранения вакансий и пользователей.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
