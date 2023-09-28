import React from "react";
import style from "./index.module.scss";
import webImg from "../../assets/images/web.png";
import { Link } from "react-router-dom";

type Props = {};

const Hero: React.FC = (props: Props) => {
  return (
    <div className={style.hero}>
      <div className={style.heroMainContainer}>
        <div className={style.heroContainer}>
          <div className={style.heroTextContainer}>
            <h1>Учебный проект студента факультета Веб-разработки.</h1>
            <p>
              Листайте ниже, чтобы узнать больше про этот <br /> проект и его
              создателя.
            </p>
            <Link className={style.heroLink} to="/">
              Узнать больше
            </Link>
          </div>
          <img src={webImg} alt="web-planet" width={310} height={304} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
