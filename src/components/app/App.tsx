import style from "./index.module.scss";
import { Routes, Route, useNavigate } from "react-router-dom";
import Main from "../main";
import React, { useEffect } from "react";
import Profile from "../profile";
import Register from "../register";
import Login from "../login";
import axios from "axios";
import Cookies from "js-cookie";

const App: React.FC = () => {
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = React.useState<boolean>(false);
  const [name, setName] = React.useState("");

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/users/me");
        setName(data.name);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, [isAuth]);

  axios.defaults.withCredentials = true;

  return (
    <div className={style.page}>
      <Routes>
        <Route path="/" element={<Main isAuth={isAuth} />} />
        <Route
          path="/profile"
          element={<Profile setIsAuth={setIsAuth} name={name} />}
        />
        <Route
          path="/signup"
          element={
            <Register
              registration={{
                name: "",
                password: "",
                email: "",
              }}
            />
          }
        />
        <Route
          path="/signin"
          element={
            <Login
              setIsAuth={setIsAuth}
              login={{
                password: "",
                email: "",
              }}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
