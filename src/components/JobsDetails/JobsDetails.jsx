// src/pages/JobDetailsPage.js
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./JobsDetails.module.css"; // Подключаем стили как CSS Module

const JobDetails = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();

  // Пример данных вакансии (можно заменить на API запрос)
  const jobDetails = {
    title: "Software Developer",
    company: "TechCorp",
    location: "New York, USA",
    description:
      "We are looking for a passionate software developer to join our team.",
    requirements: [
      "Experience in JavaScript",
      "Knowledge of React and Node.js",
      "Strong problem-solving skills",
    ],
    responsibilities: [
      "Develop and maintain web applications",
      "Collaborate with cross-functional teams",
      "Write clean and scalable code",
    ],
  };

  return (
    <div className={styles.jobDetailsContainer}>
      <h1>{jobDetails.title}</h1>
      <h3>{jobDetails.company}</h3>
      <p>
        <strong>Location:</strong> {jobDetails.location}
      </p>
      <p>
        <strong>Description:</strong> {jobDetails.description}
      </p>

      <h4>Requirements</h4>
      <ul>
        {jobDetails.requirements.map((req, index) => (
          <li key={index}>{req}</li>
        ))}
      </ul>

      <h4>Responsibilities</h4>
      <ul>
        {jobDetails.responsibilities.map((resp, index) => (
          <li key={index}>{resp}</li>
        ))}
      </ul>

      {/* Кнопка для подачи заявки */}
      <a href="/apply" className={styles.applyButton}>
        Apply Now
      </a>

      <button className={styles.backButton} onClick={() => navigate("/jobs")}>
        Back to Jobs
      </button>
    </div>
  );
};

export default JobDetails;
