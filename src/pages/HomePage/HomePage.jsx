import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Filters from "../../components/Filters/Filters";
import JobList from "../../components/JobList/JobList";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <Filters />
        <JobList />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
