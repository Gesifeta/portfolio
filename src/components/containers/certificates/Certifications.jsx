import "./certifications.scss";
import SectionWrapper from "../Wrapper/SectionWrapper";
import CertificationCard from "./CertificationCard";
import { images } from "../../assets/images";

const Certifications = ({ idName }) => {
  const certifications = [
    {
      id: 1,
      title: "Developing Front-End Apps with React",
      awardedBy: "IBM",
      certificationNumber: "HDMKOD3S22N9",
      certificationLink: "https://www.coursera.org/account/accomplishments/verify/HDMKOD3S22N9",
      description: `
     Develop interactive user interfaces (UIs) and web applications using JavaScript technologies including React, JSX, and ES6.Build dynamic front-end applications quickly and easily with reusable React components. Employ various React concepts and features, including props, states, hooks, forms, and Redux. Demonstrate your React skills by building several front-end applications such as a shopping cart.`,
      date: "September, 2024",
      images: images.ibmreact,
      icon: images.ibm
    },
    {
      id: 1,
      title: "Getting Started with Git and GitHub",
      awardedBy: "IBM",
      certificationNumber: "FI9TWMB5HZG7",
      certificationLink: "https://www.coursera.org/account/accomplishments/verify/FI9TWMB5HZG7",
      description: `
    Describe version control and its place in social and collaborative coding and in DevOps. Explain basic Git concepts such as repositories and branches used for distributed version control and social coding. Create GitHub repositories and branches, and perform pull requests (PRs) and merge operations, to collaborate on a team project. `,
      date: "September, 2024",
      images: images.ibmgithub,
      icon: images.ibm
    },
    {
      id: 1,
      title: "AWS Cloud Technology Consultant Professional Certificate",
      awardedBy: "AWS",
      certificationNumber: "X4HD7WRQVG5G",
      certificationLink: "https://www.coursera.org/account/accomplishments/professional-cert/X4HD7WRQVG5G",
      description: `
      Understand and translate business goals and drivers into appropriate technical solutions. Provide technical direction and oversight to cloud implementation teams.Create the conceptual, logical and physical design for cloud-based solutions for infrastructure and platforms. Learned how to gather technical requirements, assess client capabilities and analyze findings to provide appropriate cloud solution recommendations`,
      date: [],
      images: images.awsConsultant,
      icon: images.awssmall
    },
    {
      id: 1,
      title: "Designing User Interfaces and Experiences (UI/UX)",
      awardedBy: "IBM",
      certificationNumber: "CISJYR13NFFQ",
      certificationLink: "https://www.coursera.org/account/accomplishments/verify/CISJYR13NFFQ",
      description: `Explain design, UI/UX concepts, best practices of visual development, and the key duties and responsibilities of a UI/UX designer. Examine web design methodologies like Responsive Web Design (RWD), and Progressive Web Development. Use Figma, the essential concepts of Figma, and its various features. Develop applications and websites with web development frameworks, like Bootstrap. `,
      date: "September, 2024",
      images: images.ibmux,
      icon: images.ibm
    },
    {
      id: 2,
      title: "Google UX Design Professional Certificate",
      awardedBy: "Google",
      certificationNumber: "9XEGQCR95CZX",
      certificationLink: "https://www.coursera.org/account/accomplishments/professional-cert/9XEGQCR95CZX",
      description: `Follow the design process: empathize with users, define pain points, ideate solutions, create wireframes and prototypes, test and iterate on designs Understand the basics of UX research, like planning research studies, conducting interviews and usability studies, and synthesizing research results. Apply foundational UX concepts, like user-centered design, accessibility, and equity-focused design. Create a professional UX portfolio that includes 3 end-to-end projects: a mobile app, a responsive website, and a cross-platform experience`,
      date: [],
      images: images.googleUX,
      icon: images.googlesmall
    },
    {
      id: 3,
      title: "AWS Cloud Solutions Architect Professional Certificate",
      awardedBy: "AWS",
      certificationNumber: "W3FHP9E3HALX",
      certificationLink: "https://www.coursera.org/account/accomplishments/professional-cert/W3FHP9E3HALX",
      description: `Make informed decisions about when and how to apply key AWS Services for compute, storage, database, networking, monitoring, and security. Design architectural solutions, whether designing for cost, performance, and/or operational excellence, to address common business challenges. Create and operate a data lake in a secure and scalable way, ingest and organize data into the data lake, and optimize performance and costs.`,
      date: [],
      images: images.awsSolution,
      icon: images.awssmall
    },
  ];
  return (
    <div id={`${idName}`} className="app__certifications">
      <p className="heading">Professional Certifications</p>
      {certifications.map((certification, index) => (
        <div
          className="app__certifications-container"
          key={`${certification}-${index}`}
        >
          <div className="app_certifications-studies">
            <CertificationCard
              key={`${certification}-${index}`}
              title={certification.title}
              awardedBy={certification.awardedBy}
              certificationNumber={certification.certificationNumber}
              description={certification.description}
              certificationLink={certification.certificationLink}
              image={certification.images}
              icon={certification.icon}
            />
          </div>
          <div className="app__certifications-image">
            <span><img src={certification.images} alt="certifcation-image" /></span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Certifications, "certifications");
