import React from "react";
import { Input } from "antd";
import styles from "./JobHeader.module.css";
import person from "../../assets/person.svg";

const { Search } = Input;

const JobHeader = () => {
  const handleSearch = (value) => {
    console.log("Search query:", value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.textBlock}>
        <h1 className={styles.title}>Открытые вакансии и сотрудники</h1>
        <Search
          placeholder="Введите ключевые слова для поиска"
          allowClear
          enterButton="Поиск"
          size="large"
          onSearch={handleSearch}
          className={styles.searchInput}
        />
      </div>
      <div className={styles.imageBlock}>
        <img src={person} alt="Stylish" className={styles.image} />
      </div>
    </div>
  );
};

export default JobHeader;