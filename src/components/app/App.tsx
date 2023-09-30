import style from "./index.module.scss";
import { Routes, Route, useNavigate } from "react-router-dom";
import Main from "../main";
import React, { useEffect } from "react";
import Profile from "../profile";
import Register from "../register";
import Login from "../login";
import axios from "axios";

const App: React.FC = () => {
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = React.useState<boolean>(false);
  const [name, setName] = React.useState("");

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:3000/me");
  //       const userData = response.data;
  //       console.log(userData);
  //       setName(userData.name);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchData();
  // }, []);

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
