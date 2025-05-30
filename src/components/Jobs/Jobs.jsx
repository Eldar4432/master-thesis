import React, { useState } from "react";
import styles from "./Jobs.module.css";

const jobList = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "ABC Bishkek",
    location: "Бишкек",
    category: "Frontend",
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "XYZ Tech",
    location: "Талас",
    category: "Backend",
  },
  {
    id: 3,
    title: "Fullstack Developer",
    company: "Tech Innovations",
    location: "Ош",
    category: "Fullstack",
  },
  {
    id: 4,
    title: "UI/UX Designer",
    company: "Creative Studio",
    location: "Нарын",
    category: "Design",
  },
  {
    id: 5,
    title: "Официант",
    company: "Cafe Central",
    location: "Бишкек",
    category: "Waiter",
  },
  {
    id: 6,
    title: "Сварщик",
    company: "StroyKom",
    location: "Каракол",
    category: "Welder",
  },
  {
    id: 7,
    title: "Охранник",
    company: "Secure Ltd",
    location: "Ош",
    category: "Security",
  },
];

const categories = [
  { value: "All", label: "Все вакансии" },
  { value: "Frontend", label: "Frontend" },
  { value: "Backend", label: "Backend" },
  { value: "Fullstack", label: "Fullstack" },
  { value: "Design", label: "Дизайн" },
  { value: "Waiter", label: "Официант" },
  { value: "Welder", label: "Сварщик" },
  { value: "Security", label: "Охранник" },
];

const locations = ["Все города", "Бишкек", "Ош", "Нарын", "Талас", "Каракол"];

const Jobs = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [location, setLocation] = useState("Все города");

  const filteredJobs = jobList.filter((job) => {
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
              <button className={styles.detailsButton}>Смотреть детали</button>
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
