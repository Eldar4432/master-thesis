import React from "react";
import { FaBriefcase } from "react-icons/fa";
import styles from "./JobCard.module.css";

const JobCard = ({ title, company, location, salary, datePosted }) => {
  return (
    <div className={styles.jobCard}>
      <div className={styles.titleContainer}>
        <FaBriefcase className={styles.icon} />
        <h3 className={styles.title}>{title}</h3>
      </div>
      <p className={styles.text}>Компания: {company}</p>
      <p className={styles.text}>Локация: {location}</p>
      <p className={styles.text}>Зарплата: {salary}</p>
      <p className={styles.date}>Дата публикации: {datePosted}</p>
    </div>
  );
};

export default JobCard;
