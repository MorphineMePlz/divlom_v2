import React from "react";
import style from "./index.module.scss";
import { Link } from "react-router-dom";

type Props = {};

const year = new Date().getFullYear();

const Footer = (props: Props) => {
  return (
    <div className={style.footer}>
      <div className={style.footerMainContainer}>
        <p>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      </div>
      <span></span>
      <div className={style.footerYear}>
        <p>© {year}</p>
        <div className={style.footerYearContainer}>
          <p>Яндекс.Практикум</p>
          <Link
            className={style.footerLink}
            to="https://github.com/MorphineMePlz"
          >
            Github
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
