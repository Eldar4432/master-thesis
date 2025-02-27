import React, { useTransition } from "react";
import { Input } from "antd";
import styles from "./JobHeader.module.css";
import person from "../../assets/person.svg";
import { useTranslation } from "react-i18next";

const { Search } = Input;

const JobHeader = () => {
  const { t } = useTranslation();
  const handleSearch = (value) => {
    console.log("Search query:", value);
  };

  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.title}>{t("jobs.jobOpenings")}</h1>
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
