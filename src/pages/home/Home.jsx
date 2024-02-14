import React from "react";
import "./home.scss";
import Images from "../../assets/images/image 2.png";
import { NavLink, Navigate } from "react-router-dom";

const Home = ({user}) => {

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="home">
      <div className="home__container">
        <div className="home__block">
          <h1 className="home__title">Вы пока не создали ни одного товара</h1>
          <img className="home__img" src={Images} alt="Images" />
          <div>
            <NavLink to="/newProduct">
              <button className="home__btn">Создать первый товар</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
