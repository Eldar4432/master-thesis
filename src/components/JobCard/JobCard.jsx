import React from "react";
import { FaArrowRight, FaBriefcase } from "react-icons/fa";
import style from "./JobCard.module.css";

const JobCard = ({ title, company, location, salary, datePosted }) => {
  return (
    <div className={style.jobCard}>
      <div className={style.titleContainer}>
        <FaBriefcase className={style.icon} />
        <h3 className={style.title}>{title}</h3>
      </div>
      <p className={style.text}>Компания: {company}</p>
      <p className={style.text}>Локация: {location}</p>
      <p className={style.text}>Зарплата: {salary}</p>
      <p className={style.date}>Дата публикации: {datePosted}</p>

      <button className={style.button}>
        Узнать подробнее <FaArrowRight className="arrowIcon" />
      </button>
    </div>
  );
};

export default JobCard;
