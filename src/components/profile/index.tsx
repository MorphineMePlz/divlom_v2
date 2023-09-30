import React from "react";
import Header from "../header";
import style from "./index.module.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export interface MainProps {
  setIsAuth: (arg0: boolean) => void;
  name: string;
}

const Profile: React.FC<MainProps> = ({ setIsAuth, name }) => {
  const navigate = useNavigate();

  const handleLogout = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.delete("http://localhost:3000/logout");
      navigate("/");
      setIsAuth(false);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <div>
        <Header isAuth={true}></Header>
      </div>
      <div className={style.profile}>
        <form className={style.profileContainer} onSubmit={handleLogout}>
          <h2>{`Привет!${name}`}</h2>
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
            <button type="submit" className={style.profileButtonLogout}>
              Выйти из аккаунта
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Profile;
