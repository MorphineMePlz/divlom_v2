import React from "react";
import style from "./index.module.scss";
import Logo from "../../assets/images/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export interface LoginProps {
  registration: {
    name: string;
    password: string;
    email: string;
  };
}

const defaultLogin = {
  name: "",
  email: "",
  password: "",
};

const Register: React.FC<LoginProps> = ({ registration = defaultLogin }) => {
  const navigate = useNavigate();
  const [values, setValues] = React.useState(registration);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/signup", values);
      navigate("/signin");
    } catch (err) {
      console.error(err);
    }
  };

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
        <form action="submit" onSubmit={handleSubmit}>
          <label className={style.registerText}>Имя</label>
          <input
            name="name"
            type="text"
            onChange={handleInput}
            value={values.name}
          />
          <span></span>
          <label className={style.registerText}>E-mail</label>
          <input
            name="email"
            type="text"
            onChange={handleInput}
            value={values.email}
          />
          <span></span>
          <label className={style.registerText}>Пароль</label>
          <input
            name="password"
            type="password"
            onChange={handleInput}
            value={values.password}
          />
          <span></span>

          <div className={style.registerButtonContainer}>
            <button type="submit">Зарегистрироваться</button>
            <div className={style.registerLinkContainer}>
              <p>Уже зарегистрированы?</p>
              <Link className={style.registerLink} to="/signin">
                Войти
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
