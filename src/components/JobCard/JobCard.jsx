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
      <p className={styles.text}>Company: {company}</p>
      <p className={styles.text}>Location: {location}</p>
      <p className={styles.text}>Salary: {salary}</p>
      <p className={styles.date}>Posted on: {datePosted}</p>
    </div>
  );
};

export default JobCard;
