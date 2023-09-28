import React from "react";
import style from "./index.module.scss";
import Logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";

type Props = {};

const Login: React.FC = (props: Props) => {
  return (
    <div className={style.login}>
      <div className={style.loginContainer}>
        <Link to="/">
          <img
            src={Logo}
            alt="logo"
            width={38}
            height={38}
            className={style.loginImg}
          />
        </Link>
        <h2>Рады видеть!</h2>
        <form action="submit">
          <label className={style.loginText}>E-mail</label>
          <input name="name" type="text" />
          <span></span>
          <label className={style.loginText}>Пароль</label>
          <input name="email" type="text" />
          <span></span>
        </form>
      </div>
      <div className={style.loginButtonContainer}>
        <button type="submit">Войти</button>
        <div className={style.loginLinkContainer}>
          <p>Ещё не зарегистрированы?</p>
          <Link className={style.loginLink} to="/signup">
            Регистрация
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
