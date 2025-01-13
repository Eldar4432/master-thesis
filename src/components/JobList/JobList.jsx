import React from "react";
import styles from "./JobList.module.css";
import JobCard from "../JobCard/JobCard";

const JobList = () => {
  const jobs = [
    {
      title: "Разработчик программного обеспечения",
      company: "TechCorp",
      location: "Северный регион",
      salary: "3000$/месяц",
      datePosted: "2025-01-02",
    },
    {
      title: "Разработчик программного обеспечения",
      company: "TechCorp",
      location: "Северный регион",
      salary: "3000$/месяц",
      datePosted: "2025-01-02",
    },
    {
      title: "Разработчик программного обеспечения",
      company: "TechCorp",
      location: "Северный регион",
      salary: "3000$/месяц",
      datePosted: "2025-01-02",
    },
    {
      title: "Графический дизайнер",
      company: "DesignStudio",
      location: "Южный регион",
      salary: "2500$/месяц",
      datePosted: "2025-01-02",
    },
    {
      title: "Графический дизайнер",
      company: "DesignStudio",
      location: "Южный регион",
      salary: "2500$/месяц",
      datePosted: "2025-01-02",
    },
  ];

  return (
    <main className={styles.jobs}>
      <h2>Job Listings</h2>
      {jobs.map((job, index) => (
        <JobCard
          key={index}
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
