import React from "react";
import style from "./index.module.scss";

type Props = {};

const About: React.FC = (props: Props) => {
  return (
    <div className={style.about}>
      <div className={style.aboutMainContainer}>
        <h2 className={style.aboutHeader}>О проекте</h2>
        <span></span>
        <div className={style.aboutContainer}>
          <div className={style.aboutTextContainer}>
            <h2>Дипломный проект включал 5 этапов</h2>
            <p>
              Составление плана, работу над бэкендом, вёрстку, добавление
              <br /> функциональности и финальные доработки.
            </p>
          </div>
          <div className={style.aboutTextContainer}>
            <h2>На выполнение диплома ушло 5 недель</h2>
            <p>
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было{" "}
              <br />
              соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div className={style.aboutProgress}>
          <div className={style.aboutSpanGreen}>
            <p>1 неделя</p>
          </div>
          <div className={style.aboutSpanGray}>
            <p>4 недели</p>
          </div>
        </div>
        <div className={style.aboutProgress}>
          <div className={style.aboutBack}>
            <p>Back-end</p>
          </div>
          <div className={style.aboutFront}>
            <p>Front-end</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
