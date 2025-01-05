import React from "react";
import styles from "./Filters.module.css";

const Filters = () => {
  return (
    <aside className={styles.filters}>
      <h2>Filter Jobs</h2>
      <form>
        <div className={styles.filterGroup}>
          <label htmlFor="region">Region</label>
          <select id="region" name="region">
            <option value="all">All</option>
            <option value="north">North</option>
            <option value="south">South</option>
          </select>
        </div>
        <div className={styles.filterGroup}>
          <label htmlFor="district">District</label>
          <select id="district" name="district">
            <option value="all">All</option>
            <option value="center">Center</option>
            <option value="suburb">Suburb</option>
          </select>
        </div>
        <div className={styles.filterGroup}>
          <label htmlFor="jobType">Job Type</label>
          <select id="jobType" name="jobType">
            <option value="all">All</option>
            <option value="fulltime">Full-time</option>
            <option value="parttime">Part-time</option>
          </select>
        </div>
        <button type="submit">Apply Filters</button>
      </form>
    </aside>
  );
};

export default Filters;
