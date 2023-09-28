import React from "react";
import style from "./index.module.scss";
import Logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";

type Props = {};

const Register: React.FC = (props: Props) => {
  return (
    <div className={style.register}>
      <div className={style.registerContainer}>
        <Link to="/">
          <img
            src={Logo}
            alt="logo"
            width={38}
            height={38}
            className={style.registerImg}
          />
        </Link>
        <h2>Добро пожаловать!</h2>
        <p className={style.registerText}>Имя</p>
        <p className={style.registerTextName}>Виталий</p>
        <form action="submit">
          <span></span>
          <label className={style.registerText}>E-mail</label>
          <input name="name" type="text" />
          <span></span>
          <label className={style.registerText}>Пароль</label>
          <input name="email" type="text" />
          <span></span>
        </form>
      </div>
      <div className={style.registerButtonContainer}>
        <button type="submit">Зарегистрироваться</button>
        <div className={style.registerLinkContainer}>
          <p>Уже зарегистрированы?</p>
          <Link className={style.registerLink} to="/signin">
            Войти
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
