import React from "react";
import style from "./index.module.scss";

type Props = {};

const Tech: React.FC = (props: Props) => {
  return (
    <div className={style.tech}>
      <div className={style.techMainContainer}>
        <h2 className={style.techHeader}>Технологии</h2>
        <span></span>
      </div>
      <div className={style.techContainer}>
        <div className={style.techTextContainer}>
          <h2>7 технологий</h2>
          <p>
            На курсе веб-разработки мы освоили технологии, которые применили{" "}
            <span>в дипломном проекте.</span>
          </p>
        </div>
      </div>
      <ul className={style.techList}>
        <li>
          <p>HTML</p>
        </li>
        <li>
          <p>CSS</p>
        </li>
        <li>
          <p>JS</p>
        </li>
        <li>
          <p>React</p>
        </li>
        <li>
          <p>Git</p>
        </li>
        <li>
          <p>Express.js</p>
        </li>
        <li>
          <p>mongoDB</p>
        </li>
      </ul>
    </div>
  );
};

export default Tech;
