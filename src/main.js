import React from "react";
import { Link } from "react-router-dom";
import "./portfolio.css";
import Logo from "./logo.svg";
const Main = () => {
  return (
    <div className="hero">
      <nav>
        <div className="kinetic"></div>
        <ul>
          <li>
            <Link to="/">Home </Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio </Link>
          </li>
        </ul>
      </nav>
      <div className="content">
        <span className="title">Full Stack Developer</span>
        <h1>
          Hello, I’m <span>GEMECHU</span>
        </h1>
        <p>
          I can design and develop a professional, responsive and
          multi-functional web based applications by using
          Javascript/Typescript, Reactjs, React-Redux, and Nodejs/Expressjs .
          You can see my portfolio containing simple to complex projects
        </p>
      </div>
    </div>
  );
};

export default Main;
