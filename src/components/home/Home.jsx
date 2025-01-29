import { useEffect, useRef } from "react";
import {
  BookOpenText,
  GraduationCap,
  Contact,
  Kanban,
  SquareCheck,
  Award,
  NotebookText,
  FileBadge,
} from "lucide-react";

import "./Home.css";
import MyInfo from "../info/MyInfo.jsx";
import ProjectCard from "../card/ProjectCard.jsx";
import { projects } from "../../data/project.js";

const Home = () => {
  // To make the list item slide right
  let lists, sections;
  useEffect(() => {
    sections = document.querySelectorAll("projects");
    lists = document.querySelectorAll(".item");
  }, []);

  const slideRight = (e, title) => {
    let target = e.target;
    if (title) {
      lists.forEach((item) => {
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
      title: "About",
      icon: <NotebookText />,
    },
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
      <div className="home">
        <div className="header"></div>
        <div id="about" className="about">
          <MyInfo />
          <h2>About Me</h2>
          <p>
            I am a skilled Full Stack Developer with expertise in building
            dynamic, responsive web applications using modern technologies. On
            the front end, I specialize in HTML5, CSS3, JavaScript, React.js,
            and responsive frameworks like Tailwind CSS. For back-end
            development, I am proficient in Node.js, Express.js, RESTful APIs,
            and databases like MongoDB and PostgreSQL. As an AWS Certified Cloud
            Practitioner, I bring cloud expertise to ensure scalable, secure
            deployments and seamless integrations. My end-to-end development
            skills include creating intuitive user interfaces, managing
            databases, and optimizing performance. I focus on delivering
            user-friendly, accessible, and high-performance solutions tailored
            to your needs.
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
                  ? e.target.textContent.toLocaleLowerCase()
                  : null
              );
          }}
        >
          <div id="projects" className="container-projects">
            <h3 style={{fontSize:"1.75rem"}}>Projects</h3>
            <div className="projects">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} title={project.title} 
                image={project.image}
                description={project.description} stacks={project.stacks} projectlink={project.projectlink}  projectdemo={project?.projectdemo}/>
              ))}
            </div>
          </div>
          <div id="skills" className="container-skills">
            <h2>Skills</h2>
          </div>
          <div id="badges" className="container-badges">
            <h2>Badges</h2>
          </div>
          <div id="certifications" className="container-certifications">
            <h2>Certifications</h2>
          </div>
          <div id="educations" className="container-educations">
            <h2>Educations</h2>
          </div>
          <div id="experiences" className="container-experiences">
            <h2>Experiences</h2>
          </div>
          <div id="contacts" className="contact">
            <h2>Contacts</h2>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
