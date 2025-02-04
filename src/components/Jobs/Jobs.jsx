import React, { useState } from "react";
import styles from "./Jobs.module.css";

const jobList = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "ABC Bishkek",
    location: "Camerino, Italy",
    category: "Frontend",
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "XYsdsf",
    location: "Talas, Kyrgyzstan",
    category: "Backend",
  },
  {
    id: 3,
    title: "Fullstack Developer",
    company: "Tech Innovations",
    location: "Talas, Kyrgyzstan",
    category: "Fullstack",
  },
  {
    id: 4,
    title: "UI/UX Designer",
    company: "Creative Studio",
    location: "Napoli, Italy",
    category: "Design",
  },
];

const Jobs = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  // const handleDetailsClick = (jobId) => {
  //   navigate(`/jobs/${jobId}`);
  // };

  const filteredJobs = jobList.filter((job) => {
    return (
      (category === "All" || job.category === category) &&
      job.title.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className={styles.jobsContainer}>
      <h2>Все работы</h2>

      <input
        type="text"
        placeholder="Поиск работы"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={styles.searchInput}
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className={styles.filterSelect}
      >
        <option value="All">Все вакансии</option>
        <option value="Frontend">Frontend</option>
        <option value="Backend">Backend</option>
        <option value="Fullstack">Fullstack</option>
        <option value="Design">Слесарь</option>
        <option value="Design">Охранник</option>
        <option value="Design">Официант</option>
        <option value="Design">Помощник</option>
        <option value="Design">Design</option>
      </select>

      <div className={styles.jobsList}>
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div key={job.id} className={styles.jobCard}>
              <h3>{job.title}</h3>
              <p>{job.company}</p>
              <p>{job.location}</p>
              <button className={styles.detailsButton}>Смотреть детали</button>
            </div>
          ))
        ) : (
          <p>Не найдено.</p>
        )}
      </div>
    </div>
  );
};

export default Jobs;
