import { useEffect, useRef, useState } from "react";
import {
  BookOpenText,
  GraduationCap,
  Contact,
  Kanban,
  SquareCheck,
  Award,
  FileBadge,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

import "./Home.css";
import MyInfo from "../info/MyInfo.jsx";
import Projects from "../containers/projects/Projects.jsx";
import Skill from "../containers/skills/Skill.jsx";
import Badge from "../containers/badges/Badge.jsx";
import Certifications from "../containers/certificates/Certifications.jsx";
import Education from "../containers/educations/Education.jsx";
import Experiences from "../containers/experiences/Experiences.jsx";
import ContactMe from "../contact/ContactMe.jsx";
import { IMAGE_URL } from "../../utils/constants.js";

const Home = () => {
  // get image from local storage
  const [user] = useState(JSON.parse(localStorage.getItem("user")));
  console.log(user.image_url);
  const [showSetting, setShowSetting] = useState(false);
  // To make the list item slide right
  let sections = useRef([]);
  let lists = useRef([]);
  useEffect(() => {
    sections.current = document.querySelectorAll("projects");
    lists.current = document.querySelectorAll(".item");
  }, []);

  const slideRight = (e, title) => {
    let target = e.target;
    if (title) {
      lists.current.forEach((item) => {
        item.classList.remove("slide-right");
        if (item.textContent.toLocaleLowerCase() === title) {
          item.classList.add("slide-right");
        }
      });
    }
    if (target.tagName === "SPAN" && target.className === "list-title") {
      target = target.parentNode;
      lists = document.querySelectorAll(".item");
      lists.forEach((item) => {
        item.classList.remove("slide-right");
      });
      target.classList.add("slide-right");
    }
  };
  // side bar navigation items
  const listitems = [
    {
      title: "Projects",
      icon: <Kanban color="green" />,
    },
    {
      title: "Skills",
      icon: <SquareCheck />,
    },
    {
      title: "Badges",
      icon: <Award color="gold" />,
    },
    {
      title: "Certifications",
      icon: <FileBadge />,
    },
    {
      title: "Educations",
      icon: <GraduationCap color="green" />,
    },
    {
      title: "Experiences",
      icon: <BookOpenText color="lightBlue" />,
    },
    {
      title: "Contacts",
      icon: <Contact />,
    },
  ];
  return (
    <main>
      <div className="header">
        <div className="logo">Logo</div>
        <div className="nav-header">
          <div className="profile-setting">
            <img src={`${IMAGE_URL}/${user.image_url}`} alt="image missing" />
            <div className="setting">
              {showSetting ? (
                <ChevronDown
                  className="setting-toggler"
                  color="white"
                  onClick={() => setShowSetting(!showSetting)}
                />
              ) : (
                <ChevronRight
                  className="setting-toggler"
                  color="white"
                  onClick={() => setShowSetting(!showSetting)}
                />
              )}
              {showSetting ? (
                <ul
                  className="setting-list"
                  onMouseLeave={() => setShowSetting(false)}
                >
                  <li>Profile</li>
                  <li>Settings</li>
                  <li>Logout</li>
                </ul>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <div className="home">
        <div id="about" className="about">
          <MyInfo />
          <h2>About Me</h2>
          <p>
            I am a skilled freelance Full Stack Developer with expertise in
            building dynamic, responsive web applications using modern
            technologies. On the front end, I specialize in HTML5, CSS3,
            JavaScript, React.js, and responsive frameworks like Tailwind CSS.
            For back-end development, I am proficient in Node.js, Express.js,
            RESTful APIs, and databases like MongoDB and PostgreSQL. As an AWS
            Certified Solutions Architect, I bring cloud expertise to ensure
            scalable, secure deployments and seamless integrations. My
            end-to-end development skills include creating intuitive user
            interfaces, managing databases, and optimizing performance. I focus
            on delivering user-friendly, accessible, and high-performance
            solutions tailored to your needs.
          </p>
        </div>
        <div className="sidebar-left">
          <MyInfo />
          <div className="sidebar">
            <ul className="sidebar-list">
              {listitems.map((item, index) => (
                <a
                  href={`#${item.title.toLocaleLowerCase()}`}
                  key={`${item.title}-${index}`}
                  onClick={slideRight}
                >
                  <li className="item">
                    <span className="icon">{item.icon}</span>
                    <span className="list-title">{item.title}</span>
                  </li>
                </a>
              ))}
            </ul>
          </div>
        </div>
        <div
          className="task-area"
          onMouseOver={(e) => {
            if (e.target.tagName === "DIV")
              slideRight(
                e,
                e.target.tagName === "DIV"
                  ? e.target.firstElementChild.textContent.toLocaleLowerCase()
                  : null
              );
          }}
        >
          <Projects />
          <Skill />
          <Badge />
          <Certifications />
          <Education />
          <Experiences />
          <ContactMe />
        </div>
      </div>
    </main>
  );
};
export default Home;
