import style from "./index.module.scss";
import { Routes, Route } from "react-router-dom";
import Main from "../main";
import React from "react";
import Profile from "../profile";
import Register from "../register";
import Login from "../login";

const App: React.FC = () => {
  const [isAuth, setIsAuth] = React.useState<boolean>(true);

  return (
    <div className={style.page}>
      <Routes>
        <Route path="/" element={<Main isAuth={isAuth} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
