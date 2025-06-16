import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import jobsDatabase from "../../data/jobsData";
import styles from "./Jobs.module.css";

const categories = [
  { value: "All", label: "Все вакансии" },
  { value: "Frontend", label: "Frontend" },
  { value: "Backend", label: "Backend" },
  { value: "Fullstack", label: "Fullstack" },
  { value: "Design", label: "Дизайн" },
  { value: "Waiter", label: "Официант" },
  { value: "Welder", label: "Сварщик" },
  { value: "Teacher", label: "Преподователь" },
  { value: "Security", label: "Охранник" },
];

const locations = ["Все города", "Бишкек", "Ош", "Нарын", "Талас", "Каракол"];

const Jobs = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [location, setLocation] = useState("Все города");
  const navigate = useNavigate();

  const filteredJobs = jobsDatabase.filter((job) => {
    const matchesSearch = job.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory = category === "All" || job.category === category;
    const matchesLocation =
      location === "Все города" || job.location === location;

    return matchesSearch && matchesCategory && matchesLocation;
  });

  const resetFilters = () => {
    setSearch("");
    setCategory("All");
    setLocation("Все города");
  };

  return (
    <div className={styles.jobsContainer}>
      <h2>Открытые вакансии</h2>

      <div className={styles.controls}>
        <input
          type="text"
          placeholder="Поиск по названию"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={styles.searchInput}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className={styles.filterSelect}
        >
          {categories.map((cat) => (
            <option key={cat.value} value={cat.value}>
              {cat.label}
            </option>
          ))}
        </select>

        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className={styles.filterSelect}
        >
          {locations.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>

        <button onClick={resetFilters} className={styles.resetButton}>
          Сбросить фильтры
        </button>
      </div>

      <div className={styles.jobsList}>
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div key={job.id} className={styles.jobCard}>
              <h3>{job.title}</h3>
              <p>
                <strong>Компания:</strong> {job.company}
              </p>
              <p>
                <strong>Город:</strong> {job.location}
              </p>
              <button
                className={styles.detailsButton}
                onClick={() => navigate(`/jobs/${job.id}`)}
              >
                Смотреть детали
              </button>
            </div>
          ))
        ) : (
          <p>Вакансий по заданным параметрам не найдено.</p>
        )}
      </div>
    </div>
  );
};

export default Jobs;
