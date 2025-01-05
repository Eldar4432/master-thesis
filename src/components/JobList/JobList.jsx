import React from "react";
import styles from "./JobList.module.css";

const JobList = () => {
  return (
    <main className={styles.jobs}>
      <h2>Job Listings</h2>
      <div className={styles.jobCard}>
        <h3>Software Developer</h3>
        <p>Company: TechCorp</p>
        <p>Location: North Region</p>
        <p>Salary: $3000/month</p>
      </div>
      <div className={styles.jobCard}>
        <h3>Graphic Designer</h3>
        <p>Company: DesignStudio</p>
        <p>Location: South Region</p>
        <p>Salary: $2500/month</p>
      </div>
    </main>
  );
};

export default JobList;
