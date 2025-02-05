// src/pages/JobDetailsPage.js
import React from "react";
import { useParams } from "react-router-dom";

const JobDetails = () => {
  // Получаем id вакансии из URL
  const { jobId } = useParams();

  // Здесь будет логика для получения данных вакансии по jobId
  // Пока что имитируем данные для примера
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
    <div>
      <h1>{jobDetails.title}</h1>
      <h3>{jobDetails.company}</h3>
      <p>{jobDetails.location}</p>
      <p>{jobDetails.description}</p>
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
    </div>
  );
};

export default JobDetails;
