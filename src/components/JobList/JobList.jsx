import React from "react";
import styles from "./JobList.module.css";
import JobCard from "../JobCard/JobCard";

const JobList = () => {
  const jobs = [
    {
      id: 1,
      title: "Разработчик программного обеспечения",
      company: "TechCorp",
      location: "Бишкек сити",
      salary: "3000$/месяц",
      datePosted: "2025-01-02",
    },
    {
      id: 2,
      title: "Программист Front-End (React, Typescript)",
      company: "Zaalando",
      location: "Талас-Вегас",
      salary: "302037300$/месяц",
      datePosted: "2025-01-02",
    },
    {
      id: 3,
      title: "Водитель с категорией А1",
      company: "Чынгызов А.",
      location: "Нарын",
      salary: "3000$/месяц",
      datePosted: "2024-01-03",
    },
    {
      id: 4,
      title: "Графический дизайнер",
      company: "DesignStudio",
      location: "Чуй",
      salary: "2500$/месяц",
      datePosted: "2025-01-02",
    },
    {
      id: 5,
      title: "Графический дизайнер",
      company: "DesignStudio",
      location: "Бишкек",
      salary: "2500$/месяц",
      datePosted: "2025-01-02",
    },
    {
      id: 6,
      title: "Графический дизайнер",
      company: "DesignStudio",
      location: "Бишкек",
      salary: "2500$/месяц",
      datePosted: "2025-01-02",
    },
    {
      id: 7,
      title: "Графический дизайнер",
      company: "DesignStudio",
      location: "Бишкек",
      salary: "2500$/месяц",
      datePosted: "2025-01-02",
    },
  ];

  return (
    <main className={styles.jobs}>
      <h2>Недавние вакансии</h2>
      {jobs.map((job) => (
        <JobCard
          key={job.id}
          id={job.id}
          title={job.title}
          company={job.company}
          location={job.location}
          salary={job.salary}
          datePosted={job.datePosted}
        />
      ))}
    </main>
  );
};

export default JobList;
