import React from "react";
import Header from "../header";
import style from "./index.module.scss";
import { Link } from "react-router-dom";

type Props = {};

const Profile: React.FC = (props: Props) => {
  return (
    <>
      <div>
        <Header isAuth={true}></Header>
      </div>
      <div className={style.profile}>
        <div className={style.profileContainer}>
          <h2>Привет, Виталий!</h2>
          <div className={style.profileInfoContainer}>
            <p>Имя</p>
            <input
              className={style.profileInput}
              type="text"
              placeholder="Виталий"
            />
          </div>
          <span></span>
          <div className={style.profileInfoContainer}>
            <p>E-mail</p>
            <input type={style.profileInput} placeholder="pochta@yandex.ru" />
          </div>
          <div className={style.profileButtonContainer}>
            <button className={style.profileButtonEdit}>Редактировать</button>
            <Link to="/" className={style.profileButtonLogout}>
              Выйти из аккаунта
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
