import React, { useState } from "react";
import { AutoComplete, Input } from "antd";
import styles from "./JobHeader.module.css";
import person from "../../assets/person.svg";
import { useTranslation } from "react-i18next";

const { Search } = Input;

const JobHeader = () => {
  const { t } = useTranslation();
  const [options, setOptions] = useState([]);

  const allTitles = [
    "Охранник",
    "Водитель",
    "Программист",
    "Графический дизайнер",
    "Фронтенд разработчик",
  ];

  const handleSearch = (value) => {
    if (!value) {
      setOptions([]);
      return;
    }

    const filtered = allTitles
      .filter((title) => title.toLowerCase().includes(value.toLowerCase()))
      .map((title) => ({ value: title }));

    setOptions(filtered);
  };

  const handleSelect = (value) => {
    console.log("Вы выбрали:", value);
  };

  const onSearch = (value) => {
    console.log("Поиск:", value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.searchWrapper}>
        <h1 className={styles.title}>{t("jobs.jobOpenings")}</h1>
        <AutoComplete
          options={options}
          onSearch={handleSearch}
          onSelect={handleSelect}
          style={{ width: "100%" }}
        >
          <Search
            placeholder="Введите ключевые слова для поиска"
            allowClear
            enterButton="Поиск"
            size="large"
            onSearch={onSearch}
          />
        </AutoComplete>
      </div>
      <div className={styles.imageBlock}>
        <img src={person} alt="Stylish" className={styles.image} />
      </div>
    </div>
  );
};

export default JobHeader;
