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
    return <h2>Вакансия не найдена</h2>;
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
      <h1>{title}</h1>
      <h3>{company}</h3>
      <p>
        <strong>Местоположение:</strong> {location}
      </p>
      <p>
        <strong>Описание:</strong> {description}
      </p>

      <h4>Требования</h4>
      <ul>
        {requirements.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>

      <h4>Обязанности</h4>
      <ul>
        {responsibilities.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>

      <h4>Контактная информация</h4>
      <p>
        Email:{" "}
        <a href={`mailto:${contactEmail}`} aria-label="Отправить email">
          {contactEmail}
        </a>
      </p>

      <div className={styles.buttonGroup}>
        <button
          className={styles.applyButton}
          onClick={() => (window.location.href = `mailto:${contactEmail}`)}
        >
          Откликнуться
        </button>
        <button className={styles.backButton} onClick={() => navigate("/")}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default JobDetails;
