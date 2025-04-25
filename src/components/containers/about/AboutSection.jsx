import React from "react";

import "./AboutSection.css";
import { API_URL } from "../../../utils/constants";

const About = () => {
  return (
    <div className="about-section" id="aboutSection">
      <p className="intro">
        I'm a <strong>Full Stack Developer</strong> specializing in creating
        scalable, secure, and efficient web applications powered by{" "}
        <strong>AWS</strong>. With expertise in both frontend and backend
        development, I build solutions that blend robust engineering with a
        seamless user experience.
      </p>

      <h3>What I Do</h3>
      <ul className="what-i-do">
        <li>
          <strong>Frontend Excellence:</strong> Crafting responsive and dynamic
          interfaces using modern frameworks like React and Next.js.
        </li>
        <li>
          <strong>Backend Power:</strong> Designing RESTful APIs, GraphQL
          endpoints, and managing server-side logic with Next.js, Node.js and
          Express.
        </li>
        <li>
          <strong>AWS Expertise:</strong> Leveraging AWS services such as
          Lambda, DynamoDB, S3, and EC2 to deliver reliable and cost-effective
          cloud solutions.
        </li>
        <li>
          <strong>DevOps & Scalability:</strong> Implementing CI/CD pipelines,
          managing infrastructure with CloudFormation, and ensuring application
          scalability.
        </li>
      </ul>
      <div className="work-station">
        <img
          style={{ width: "100%", borderRadius: "12px" }}
          src={`${API_URL}/uploads/images/wokstation.png`}
          alt="work station"
        />
      </div>
      <h3 className="section-title">My Vision</h3>
      <p className="vision">
        I believe in bridging innovation and technology to solve real-world
        challenges. My work is driven by a commitment to write clean,
        maintainable code and deliver impactful projects that delight users.
      </p>
    </div>
  );
};

export default About;
