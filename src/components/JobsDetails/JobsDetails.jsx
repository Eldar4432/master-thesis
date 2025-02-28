import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./JobsDetails.module.css";

// Функция-эмуляция загрузки данных (замени на API-запрос)
const fetchJobById = (jobId) => {
  const jobs = [
    {
      id: "1",
      title: "Разработчик ПО",
      company: "TechCorp",
      location: "Бишкек",
      description: "Мы ищем опытного разработчика для работы в команде.",
      requirements: ["Опыт с React", "Знание Node.js", "Работа с API"],
      responsibilities: ["Разработка веб-приложений", "Работа в команде"],
    },
    {
      id: "2",
      title: "Front-End Разработчик",
      company: "Zaalando",
      location: "Талас",
      description: "Разработка UI/UX решений для веб-приложений.",
      requirements: ["Опыт с TypeScript", "Знание TailwindCSS"],
      responsibilities: ["Верстка по макетам", "Оптимизация кода"],
    },
  ];

  return jobs.find((job) => job.id === jobId);
};

const JobDetails = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const [jobDetails, setJobDetails] = useState(null);

  useEffect(() => {
    const job = fetchJobById(jobId);
    if (job) {
      setJobDetails(job);
    } else {
      setJobDetails(null);
    }
  }, [jobId]);

  if (!jobDetails) {
    return <h2>Вакансия не найдена</h2>;
  }

  return (
    <div className={styles.jobDetailsContainer}>
      <h1>{jobDetails.title}</h1>
      <h3>{jobDetails.company}</h3>
      <p>
        <strong>Местоположение:</strong> {jobDetails.location}
      </p>
      <p>
        <strong>Описание:</strong> {jobDetails.description}
      </p>

      <h4>Требования</h4>
      <ul>
        {jobDetails.requirements.map((req, index) => (
          <li key={index}>{req}</li>
        ))}
      </ul>

      <h4>Обязанности</h4>
      <ul>
        {jobDetails.responsibilities.map((resp, index) => (
          <li key={index}>{resp}</li>
        ))}
      </ul>

      <button className={styles.backButton} onClick={() => navigate("/")}>
        Назад
      </button>
    </div>
  );
};

export default JobDetails;
