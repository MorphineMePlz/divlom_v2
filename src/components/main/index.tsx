import React from "react";
import Header from "../header";
import Hero from "../hero";
import About from "../about";
import Tech from "../tech";
import Student from "../student";
import Footer from "../footer";

export interface MainProps {
  isAuth: boolean;
}

const Main: React.FC<MainProps> = ({ isAuth }) => {
  return (
    <div>
      <Header isAuth={isAuth} />
      <Hero />
      <About />
      <Tech />
      <Student />
      <Footer />
    </div>
  );
};

export default Main;
