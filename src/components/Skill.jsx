import React from "react";
import { motion } from "framer-motion";

import SectionWrapper from "../Wrapper/SectionWrapper";

import "./skill.scss";
import { images } from "./../../assets/images";
const Skill = ({ idName }) => {
  const skills = [
    {
      id: 2,
      name: "css",
      description:
        "Cascading Style Sheets is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.",
      skillSets: [
        {
          id: 8.3,
          name: "Animations",
          image: "",
        },
        {
          id: 8.3,
          name: "Responsive Design",
          image: "",
        },
        {
          id: 8.3,
          name: "SASS",
          image: images.sasssmall,
        },
      ],
      image: images.csssmall,
    },
    {
      id: 3,
      name: "html",
      description:
        "HyperText Markup Language is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScrip",
      skillSets: [""],
      image: images.htmlsmall,
    },
    {
      id: 10,
      name: "nodejs",
      description:
        "Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more. Node.js runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting.",
      skillSets: [""],
      image: images.nodejssmall,
    },
    {
      id: 3,
      name: "graphql",
      description:
        "GraphQL is an open-source data query and manipulation language for APIs and a query runtime engine. GraphQL enables declarative data fetching where a client can specify exactly what data it needs from an API.",
      skillSets: [""],
      image: images.graphqlsmall,
    },
    {
      id: 4,
      name: "javascript",
      description:
        "JavaScript, often abbreviated as JS, is a programming language and core technology of the Web, alongside HTML and CSS. 99% of websites use JavaScript on the client side for webpage behavior.",
      skillSets: [""],
      image: images.javascriptsmall,
    },
    {
      id: 5,
      name: "react",
      description:
        "React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js",
      skillSets: [
        {
          id: 8.3,
          name: "Redux",
          description:
            "Redux is an open-source JavaScript library for managing and centralizing application state. It is most commonly used with libraries such as React or Angular for building user interfaces. Similar to Facebook's Flux architecture, it was created by Dan Abramov and Andrew Clark",
          image: images.redux,
        },
        {
          id: 8.5,
          name: "React Toolkit",
          description:
            "The Redux Toolkit package is intended to be the standard way to write Redux logic. It was originally created to help address three common concerns about Redux:",
          image: "",
        },
        {
          id: 8.6,
          name: "Context",
          description:
            "Context provides a way to pass data through the component tree without having to pass props down manually at every level. ",
          image: "",
        },
      ],
      image: images.reactsmall,
    },
    {
      id: 6,
      name: "AWS",
      description:
        "Amazon Web Services, Inc. is a subsidiary of Amazon that provides on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered, pay-as-you-go basis. Clients will often use this in combination with autoscaling.",
      skillSets: [
        {
          id: 8.3,
          name: "Storages",
          description:
            "Millions of customers use AWS storage services to transform their business, increase agility, reduce costs, and accelerate innovation. Choose from a broad portfolio of storage solutions with deep functionality for storing, accessing, protecting, and analyzing your data.",
          image: "",
        },
        {
          id: 8.3,
          name: "IAM",
          image:
            "AWS Identity and Access Management (IAM) is a web service that helps you securely control access to AWS resources. ",
        },
        {
          id: 8.3,
          name: "EC2",
          description:
            "Amazon EC2 provides secure, resizable compute in the cloud, offering the broadest choice of processor, storage, networking, OS, and purchase model.",
          image: images.ec2,
        },
        {
          id: 8.3,
          name: "Well-Architected Framework",
          description:
            "The AWS Well-Architected Framework describes key concepts, design principles, and architectural best practices for designing and running workloads in the cloud.",
          image: images.wafw,
        },
        {
          id: 8.3,
          name: "Networking",
          description:
            "Amazon Elastic Compute Cloud (EC2) Network Interfaces provide an isolated virtual network interface for instances launched in a VPC. They are allocated a private IP address from the IP address range of the VPC and serve as the primary network interface for associated instances.",
          image: images.vpc,
        },
        {
          id: 8.3,
          name: "DynamoDB, RDS",
          image: "",
        },
        {
          id: 8.3,
          name: "Scaling",
          image: "",
        },
      ],
      image: images.awssmall,
    },
    {
      id: 7,
      name: "UX Design",
      description:
        "UX design is all about creating extremely user-friendly interfaces that can enhance users’ satisfaction and usability.",
      skillSets: [
        {
          id: 8.1,
          name: "Wireframing",
          image: "",
        },
        {
          id: 8.2,
          name: "Prototyping",
          image: "",
        },
        {
          id: 8.3,
          name: "User Research",
          image: "",
        },
        {
          id: 8.4,
          name: "Usability Study",
          image: "",
        },
      ],
      image: images.figma,
    },
    {
      id: 8.1,
      name: "SQL",
      image: images.mongodbsmall,
    },
    {
      id: 8.2,
      name: "NoSQL",
      image: images.mysql,
    },
  ];
  return (
    <motion.section className="app__skills" id={idName}>
      <p className="heading"> Technical Skills </p>
      <div className="app__skills-category">
        <span>Web Design</span>
        <span>Web Development</span>
        <span>Cloud</span>
        <span>UX Design</span>
      </div>
      <div className="app__skills-list">
        <div className="app__skills-list--image">
          {skills.map((skill, index) => (
            <img
              key={`${skill}-${index}`}
              src={skill.image}
              alt={`${skill.name}`}
            />
          ))}
        </div>
        <div className="app__skills-list--teck">
          {skills.map((skill, index) => (
            <p key={`${skill.name}-${index}`}>
              {skill.name.toUpperCase()}
            </p>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default SectionWrapper(Skill, "skills");
