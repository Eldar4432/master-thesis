import React from "react";
import styles from "./JobList.module.css";
import JobCard from "../JobCard/JobCard";

const JobList = () => {
  const jobs = [
    {
      title: "Software Developer",
      company: "TechCorp",
      location: "North Region",
      salary: "$3000/month",
      datePosted: "2025-01-02",
    },
    {
      title: "Graphic Designer",
      company: "DesignStudio",
      location: "South Region",
      salary: "$2500/month",
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
