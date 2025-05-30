import React, { useEffect, useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./JobsDetails.module.css";

const jobsDatabase = [
  {
    id: "1",
    title: "Разработчик ПО",
    company: "TechCorp",
    location: "Бишкек",
    description: "Мы ищем опытного разработчика для работы в команде.",
    requirements: ["Опыт с React", "Знание Node.js", "Работа с API"],
    responsibilities: ["Разработка веб-приложений", "Работа в команде"],
    contactEmail: "hr@techcorp.com",
  },
  {
    id: "2",
    title: "Front-End Разработчик",
    company: "Zaalando",
    location: "Талас",
    description: "Разработка UI/UX решений для веб-приложений.",
    requirements: ["Опыт с TypeScript", "Знание TailwindCSS"],
    responsibilities: ["Верстка по макетам", "Оптимизация кода"],
    contactEmail: "jobs@zaalando.com",
  },
];

const JobDetails = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const [jobDetails, setJobDetails] = useState(null);

  const fetchJobById = useCallback((id) => {
    return jobsDatabase.find((job) => job.id === id);
  }, []);

  useEffect(() => {
    if (jobId) {
      const job = fetchJobById(jobId);
      setJobDetails(job || null);
    }
  }, [jobId, fetchJobById]);

  if (!jobDetails) {
    return <h2 className={styles.notFound}>Вакансия не найдена</h2>;
  }

  const {
    title,
    company,
    location,
    description,
    requirements,
    responsibilities,
    contactEmail,
  } = jobDetails;

  return (
    <div className={styles.jobDetailsContainer} role="main">
      <header className={styles.headerSection}>
        <h1>{title}</h1>
        <h3>{company}</h3>
        <p>
          <strong>Город:</strong> {location}
        </p>
      </header>

      <section className={styles.section}>
        <h4>Описание</h4>
        <p>{description}</p>
      </section>

      <section className={styles.section}>
        <h4>Требования</h4>
        <ul>
          {requirements.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <h4>Обязанности</h4>
        <ul>
          {responsibilities.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <h4>Контакты</h4>
        <p>
          Email: <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
        </p>
      </section>

      <footer className={styles.buttonGroup}>
        <button
          className={styles.applyButton}
          onClick={() => (window.location.href = `mailto:${contactEmail}`)}
        >
          Откликнуться
        </button>
        <button className={styles.backButton} onClick={() => navigate("/")}>
          Назад
        </button>
      </footer>
    </div>
  );
};

export default JobDetails;
