import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import {
  motion,
  useAnimationControls,
} from "framer-motion";

import SectionWrapper from "../Wrapper/SectionWrapper";
import Cards from "../../components/Card";
import { images } from "../../assets/images";
import "./work.scss";
const Work = ({ idName }) => {
  const controls = useAnimationControls();
  const controlHandle = () => {
    controls.start("moveUp");
  };
  const [variants, setVariants] = useState({
    moveUp: {
      y: 0,
      opacity: 1,
    },
  });
  const [animate, setAnimate] = useState(false);
  const projects = [
    {
      id: uuid(),
      name: "Backend",
      description:
        "These projects aim to develop a robust backend systems that provides scalable and efficient data handling and interaction for a web application or service.I integrated with separately designed frontend.",
      works: [
        {
          id: uuid(),
          title: "Second-Hand Item Marketplace",
          description:
            `This project is a robust backend system for a second-hand item marketplace, designed to facilitate seamless user interactions and transactions. Built using a modern tech stack, it showcases my proficiency in backend development and container orchestration. Technologies Used:`,
          image: images.secondchance,
          projectlink: "https://secondchancewebsite.netlify.app/",
          stacks: ["Express.js", "Javascript", "Mongodb", "Docker", "Kubernetes", "JWT"],
        },
      ],
    },
    {
      id: uuid(),
      name: "Full Stacks",
      description:
        "These projects aim to develop a robust frontend and backend systems that provides scalable and efficient data handling and interaction for a web application or service. Among other things, I used REST APIs and GraphQL to deliver flexible and performant data access.",
      works: [
        {
          id: uuid(),
          title: "E-commerce Project",
          description:
            "This project is a comprehensive e-commerce web application developed using the MERN stack (MongoDB, Express, React, Node.js) with responsive front end. The application is built to provide features such as product listings, a shopping cart, user authentication, and checkout functionality. The deployment leverages AWS ECS (Elastic Container Service) and Fargate for a scalable and containerized cloud solution.",
          image: images.ecommerce,
          projectlink: "https://yemez.netlify.app/",
          stacks: ["HTML", "CSS", "JAVASCRIPT", "React", "Mongodb", "Nodejs", "Redux", "express", "Graphql"],
        },
        {
          id: uuid(),
          title: "Photo Gallery Project",
          description:
            "This project is a photo gallery web application built using the MERN stack HTML,CSS,Javascript, and React with with Content Mangement Systems- Sanity. The application allows users to upload, view,comment,like and manage their photo collections, offering a sleek and responsive user interface with robust backend support for data handling. Here's an overview of the technologies used:",
          image: images.photogallery,
          projectlink: "https://mormorgallery.netlify.app/",
          stacks: ["HTML", "CSS", "JAVASCRIPT", "React", "Sanity"],
        },
        {
          id: uuid(),
          title: "Minibanking Project",
          description:
            "This project is a mini-banking application built using the MERN stack (MongoDB, Express, React, Node.js) and styled with Material UI. It provides basic banking features such as user authentication, account creation, deposits, withdrawals, and balance inquiries. Here is a breakdown of the technologies used and their roles:",
          image: images.minibanking,
          projectlink: "https://myminibanking.netlify.app",
          stacks: ["HTML", "CSS", "JAVASCRIPT", "React", "Material UI", "Redux"],
        },
        {
          id: uuid(),
          title: "Portfolio Project",
          description:
            `This project is a personal portfolio website developed using React for building a dynamic front end, with Sanity as a content management system (CMS). It showcases my skills, projects, and experience, with responsive styling achieved using HTML, CSS, and JavaScript. Here's a breakdown of the technologies used:`,
          image: images.portfolio1,
          projectlink: "https://www.gemechuadam.com/",
          stacks: ["HTML", "CSS", "React", "JAVASCRIPT", "Sanit", "Netlify"],
        },
      ],
    },
    {
      id: uuid(),
      name: "Frontend",
      description:
        "These project aim to create an interactive and visually appealing web application or website.Among otherthings, I leveraged HTML, CSS, and JavaScript to deliver a seamless user experience.",
      works: [
        {
          id: uuid(),
          title: "Health Booking System",
          description:
            `This project is a user-friendly frontend application for a health booking system, allowing users to easily schedule appointments with healthcare providers. The application leverages a clean and responsive design, ensuring an intuitive user experience.`,
          image: images.health,
          projectlink: "https://myhealthinc.netlify.app/",
          stacks: ["HTML", "CSS", "Express", "Javascript", "Mongodb","JWT", "Netlify"],
        },
        {
          id: uuid(),
          title: "Portfolio Project",
          description:
            `This project is a personal portfolio website developed using React for building a dynamic front end, with Sanity as a content management system (CMS). It showcases my skills, projects, and experience, with responsive styling achieved using HTML, CSS, and JavaScript. Here's a breakdown of the technologies used:`,
          image: images.portfolio,
          projectlink: "https://www.gemechuadam.com/",
          stacks: ["HTML", "CSS", "React", "JAVASCRIPT", "Sanit", "Netlify"],
        },

        {
          id: uuid(),
          title: "E-Plant Shopping",
          description:
            `This project a simple e-commerce front end for an online plant shop, developed using React for a dynamic user interface, along with CSS, HTML, and JavaScript for styling, layout, and interactivity. The application provides a smooth shopping experience with features such as browsing plants, adding items to a cart, and viewing product details.`,
          image: images.eplant,
          projectlink: "https://gesifeta.github.io/e-plantShopping/",
          stacks: ["HTML", "CSS", "JAVASCRIPT", "React", "React Redux Toolkit"],
        },
        {
          id: uuid(),
          title: "Yelp.com Pixel-Perfect Clone",
          description:
            `This project is a pixel-perfect clone of the Yelp.com front end, created using HTML, CSS, and JavaScript. The objective is to replicate Yelp’s complex,responsive layout and interactive features, focusing on meticulous detail to match the original design as closely as possible.`,
          image: images.yelp,
          projectlink: "https://yelp-pixel-perfect-clone.netlify.app",
          stacks: ["HTML", "CSS", "JAVASCRIPT"],
        },
        {
          id: uuid(),
          title: "Country information project",
          description:
            "  The app provides users with detailed information about various countries alongwith neighbors, including geographical data and location mapping. It integrates with a country API and Google Maps to deliver a comprehensive and interactive experience.",
          image: images.countryinfo,
          projectlink: "https://gemechulocationsapp.netlify.app/",
          stacks: ["HTML", "CSS", "Typescript", "React", "PUBLIC API", "JAVASCRIPT"],
        },
      ],
    },
   
    // {
    //   id: uuid(),
    //   name: "UX/UI Design",
    //   description:
    //     "At provident recusandae, accusamus ipsam illum nihil earum consequuntur labore minima totam quidem voluptas, deserunt unde facere tenetur inventore. Natus, rem pariatur.",
    //   works: [
    //     {
    //       id: uuid(),
    //       title: "Nanny App",
    //       description:
    //         " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis in, magni soluta, voluptatibus expedita?",
    //       type: "UX/UI Design",
    //       image: images.uxdesign,
    //       projectlink: "",
    //       stacks: ["HTML", "CSS", "JAVASCRIPT"],
    //     },
    //     {
    //       id: uuid(),
    //       title: "Donation App",
    //       description:
    //         " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis in, magni soluta, voluptatibus expedita?",
    //       type: "UX/UI Design",
    //       image: images.webdesign,
    //       projectlink: "",
    //       stacks: ["HTML", "CSS", "JAVASCRIPT"],
    //     },
    //   ],
    // },
    // {
    //   id: uuid(),
    //   name: "AWS Cloud",
    //   description:
    //     "At provident recusandae, accusamus ipsam illum nihil earum consequuntur labore minima totam quidem voluptas, deserunt unde facere tenetur inventore. Natus, rem pariatur.",
    //   works: [],
    // },
    // {
    //   id: uuid(),
    //   name: "CMS",
    //   description:
    //     "At provident recusandae, accusamus ipsam illum nihil earum consequuntur labore minima totam quidem voluptas, deserunt unde facere tenetur inventore. Natus, rem pariatur.",
    //   works: [],
    // },
  ];
  const [filteredProject, setfilteredProject] = useState(
    []
  );
  let [workType, setWorkType] = useState("All");
  //set filter background color

  useEffect(() => {
    //check if project type is changed, is so filter
    let filtered =
      workType !== "All"
        ? projects.filter(
          (project) => project.name === workType
        )
        : projects;
    setfilteredProject(filtered);
  }, [projects.id, workType]);

  return (
    <motion.div id={`${idName}`} className="app__works">
      <p className="heading">
        Want to explore some of my works?
      </p>
      <div className="app__works-filter">
        {projects.map((project, index) => (
          <span
            key={`${project.name}-${index}`}
            style={
              workType === project.name
                ? {
                  backgroundColor: "#8b3e9b",
                  color: "#fff",
                }
                : null
            }
            onClick={(event) => {
              controlHandle();
              setAnimate(!animate);
              setVariants({
                moveUp: {
                  y: 0,
                  opacity: 1,
                },
              });
              setWorkType(event.target.textContent);
            }}
          >
            {project.name}
          </span>
        ))}
        <span
          style={
            workType === "All"
              ? {
                backgroundColor: "#8b3e9b",
                color: "#fff",
              }
              : null
          }
          onClick={(event) => {
            setWorkType(event.target.textContent);
          }}
        >
          All
        </span>
      </div>
      <motion.div className="app__works-items">
        {filteredProject.map((project) =>
          project.works.map((work, index) => (
            <Cards
              controls={controls}
              variants={variants}
              key={`${work[0]?.title}-${index}`}
              title={work?.title}
              description={work?.description}
              image={work?.image}
              stacks={work?.stacks}
              projectlink={work?.projectlink}
            />
          ))
        )}
      </motion.div>
    </motion.div>
  );
};

export default SectionWrapper(Work, "projects");
