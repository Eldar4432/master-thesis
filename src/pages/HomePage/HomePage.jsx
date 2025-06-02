import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Filters from "../../components/Filters/Filters";
import JobList from "../../components/JobList/JobList";
import styles from "./HomePage.module.css";
import JobHeader from "../../components/JobHeader/JobHeader";

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.filter}>
          <Filters />
        </div>

        <div className={styles.content}>
          <JobHeader onSearch={(value) => setSearchQuery(value)} />
          <JobList searchQuery={searchQuery} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
