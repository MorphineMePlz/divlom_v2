import React from "react";
import style from "./index.module.scss";
import Logo from "../../assets/images/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

export interface LoginProps {
  login: {
    password: string;
    email: string;
  };
}

export interface MainProps {
  setIsAuth: (arg0: boolean) => void;
}

const defaultLogin = {
  email: "",
  password: "",
};

const Login: React.FC<LoginProps & MainProps> = ({ login, setIsAuth }) => {
  const navigate = useNavigate();
  const [values, setValues] = React.useState((login = defaultLogin));

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  axios.defaults.withCredentials = true;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/signin", values);
      const token = response.data.token;
      Cookies.set("token", token);
      setIsAuth(true);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

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
        <form action="submit" onSubmit={handleSubmit}>
          <label className={style.loginText}>E-mail</label>
          <input
            name="email"
            type="text"
            onChange={handleInput}
            value={values.email}
          />
          <span></span>
          <label className={style.loginText}>Пароль</label>
          <input
            name="password"
            type="text"
            onChange={handleInput}
            value={values.password}
          />
          <span></span>
          <div className={style.loginButtonContainer}>
            <button type="submit">Войти</button>
            <div className={style.loginLinkContainer}>
              <p>Ещё не зарегистрированы?</p>
              <Link className={style.loginLink} to="/signup">
                Регистрация
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
