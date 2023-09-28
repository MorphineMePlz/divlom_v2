import React from "react";
import style from "./index.module.scss";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
import User from "../../assets/images/profile.svg";
import { MainProps } from "../main";

const Header: React.FC<MainProps> = ({ isAuth }) => {
  const location = useLocation();
  console.log(location.pathname);
  return !isAuth ? (
    <div className={style.header}>
      <div className={style.headerMainContainer}>
        <nav className={style.headerNav}>
          <div>
            <Link to="/">
              <img
                src={Logo}
                alt="logo"
                width={38}
                height={38}
                className={style.headerImg}
              />
            </Link>
          </div>
          <div className={style.headerContainer}>
            <Link className={style.headerLink} to="/signup">
              Регистрация
            </Link>
            <Link
              className={`${style.headerLinkActive} ${style.headerLink}`}
              to="/signin"
            >
              Войти
            </Link>
          </div>
        </nav>
      </div>
    </div>
  ) : (
    <div
      className={location.pathname !== "/profile" ? style.header : style.white}
    >
      <div className={style.headerMainContainer}>
        <nav className={style.headerNav}>
          <div className="">
            <Link to="/">
              <img
                src={Logo}
                alt="logo"
                width={38}
                height={38}
                className={style.headerImg}
              />
            </Link>
          </div>
          <div className={style.headerMovieContainer}>
            <Link
              className={
                location.pathname === "/profile"
                  ? style.headerMovieLinkBlack
                  : style.headerMovieLink
              }
              to="movies"
            >
              Фильмы
            </Link>
            <Link
              className={
                location.pathname === "/profile"
                  ? style.headerMovieLinkBlack
                  : style.headerMovieLink
              }
              to="savedmovies"
            >
              Сохраненные фильмы
            </Link>
          </div>
          <div
            className={
              location.pathname === "/profile"
                ? style.headerLinkContainerWhite
                : style.headerLinkContainer
            }
          >
            <p>Аккаунт</p>
            <Link className={style.headerProfileLink} to="/profile">
              <img
                className={style.headerProfileImg}
                src={User}
                alt="user"
                width={10}
                height={10}
              />
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
