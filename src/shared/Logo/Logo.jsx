import React from "react";
import logo_image from "../../assets/job.png";
import style from "./Logo.module.css";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <div className={style.logo}>
        <img className={style.logo} src={logo_image} alt="logo" />
      </div>
    </Link>
  );
};

export default Logo;
