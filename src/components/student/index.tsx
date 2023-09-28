import React from "react";
import style from "./index.module.scss";
import { Link } from "react-router-dom";
import studentImg from "../../assets/images/student.png";
import arrow from "../../assets/images/arrow.png";

type Props = {};

const Student: React.FC = (props: Props) => {
  return (
    <div className={style.student}>
      <div className={style.studentMainContainer}>
        <h2 className={style.studentHeader}>Студент</h2>
        <span></span>
      </div>

      <div className={style.studentContainer}>
        <div className={style.studentTextContainer}>
          <h2>Виталий</h2>
          <h3>Фронтенд-разработчик, 30 лет</h3>
          <p className={style.studentText}>
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <Link
            className={style.studentLink}
            to="https://github.com/MorphineMePlz"
          >
            Github
          </Link>
          <p className={style.studentPortfolio}>Портфолио</p>
        </div>
        <img src={studentImg} alt="student" width={270} height={327} />
      </div>

      <div className={style.studentPortfolioContainer}>
        <p>Статичный сайт</p>
        <img src={arrow} alt="arrow" width={29} height={29} />
      </div>
      <span className={style.studentSpan}></span>
      <div className={style.studentPortfolioContainer}>
        <p>Адаптивный сайт</p>
        <img src={arrow} alt="arrow" width={29} height={29} />
      </div>
      <span className={style.studentSpan}></span>
      <div className={style.studentPortfolioContainer}>
        <p>Одностраничное приложение</p>
        <img src={arrow} alt="arrow" width={29} height={29} />
      </div>
    </div>
  );
};

export default Student;
