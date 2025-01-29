import React from "react";
import { MotionConfig, motion } from "framer-motion";

import SectionWrapper from "../Wrapper/SectionWrapper";
import Card from "./Card";
import "./experience.scss";
import { images } from "../../assets/images";

const Experience = ({ idName }) => {
  const experiences = [
    {
      id: 14,
      position: "Internal Control Officer",
      companyName: "Commercial Bank of Ethiopia",
      companyAddress: {
        address: {
          city: "Addis Ababa",
          country: "Ethiopia",
        },
      },
      start: "2019",
      end: "2021",
      image: images.googlesmall,
      responsibilities: [
        "Conduct prompt investigation of breach of policy and first level investigation on frauds and forgeries including  customer’s complaints in line with investigation guidelines.",
        "Continuously review, evaluate and establish that open items in the Bank’s GL accounts are current, valid and promptly resolved in line GL policies",
        "Tracking report for management response and resolution to report findings and recommendations for internal audit, external Director’s Audit, external compliance audits",
        "Identify the risks that a business faces and develop preventive strategies.",
        "Review Vendor creation, Customer Creation (Agreements), Credit setting for customers",
        "Credit control (Receivables, staff float outstanding).",
        "Participate in building strong KYC and KYC(B) compliance environment in the Bank by providing control and  compliance counseling and advisory services to executive management.",
      ],
    },
    {
      id: 16,
      position: "Banking Operation Officer",
      companyName: "Commercial Bank of Ethiopia",
      companyAddress: {
        address: {
          city: "Addis Ababa",
          country: "Ethiopia",
        },
      },
      start: "2014",
      end: "2021",
      image: images.googlesmall,
      responsibilities: [
        "Collaborate with other departments and stakeholders to achieve business goals",
        "Oversee and manage daily operations of the bank, including customer service, cash handling, and account management",
        "Ensure compliance with regulatory requirements and internal policies and procedures",
        "Analyze financial data and prepare reports for senior management",
        "Resolve customer complaints and issues in a timely and professional manner",
        "Stay up-to-date with industry developments and trends to maintain a competitive edge",
        "Communicating with high-value customers regarding account management and other matters relating to loans or deposits",
      ],
    },
    {
      id: 13,
      position: "Juniour Officer",
      companyName: "Commercial Bank of Ethiopia",
      companyAddress: {
        address: {
          city: "Addis Ababa",
          country: "Ethiopia",
        },
      },
      start: "2013",
      end: "2014",
      image: images.googlesmall,
      responsibilities: [
        "Accepting customer deposits or posting deposits to customer accounts",
        "Accepting customer deposits or posting deposits to customer accounts",
        " Checking loan interest rates and advising clients on ways to reduce interest expenses on outstanding balances",
        "Collecting deposits from business account holders to manage cash flow",
        "Communicating with high-value customers regarding account management and other matters relating to loans or deposits",
        "Analysing, understanding and implementing banking guidelines, regulations and laws to help ensure compliance with the regulations of the National Bank of Ethiopia"
      ],
    },
    {
      id: 22,
      position: "ICT Expert",
      companyName: "Oromia Public Procurement Agency",
      companyAddress: {
        address: {
          city: "Addis Ababa",
          country: "Ethiopia",
        },
      },
      start: "2012",
      end: "2013",
      image: images.awssmall,
      responsibilities: [
        "Reviewing diagnostics and assessing the functionality and efficiency of systems",
        "Implementing security measure",
        "Monitoring security certificates and company compliance of requirements",
        "Offering technical support to company staff and troubleshooting computer problems",
        "Installing and updating company software and hardware as needed and anticipate and report the cost of replacing or updating computer items"
      ],
    },
   
    {
      id: 1,
      position: "ICT Teacher",
      companyName: "Higher 23 Preparatory School",
      companyAddress: {
        address: {
          city: "Addis Ababa",
          country: "Ethiopia",
        },
      },
      start: "2006",
      end: "2012",
      image: images.googlesmall,
      responsibilities: [
        "Assessment and Feedback: Develop fair and effective assessment methods to evaluate students' understanding and progress. Provide constructive feedback to students, fostering a growth mindset and continuous improvement.",
        "Technology Management: Oversee the use and maintenance of ICT resources, including computers, software, and peripherals. Stay updated on advancements in technology to recommend and implement improvements to the ICT infrastructure.",
        "Professional Development: Pursue continuous professional development to stay abreast of industry trends and pedagogical best practices. Collaborate with colleagues to share knowledge and contribute to the overall development of the school's educational programs",
        " Student Support: Provide guidance and support to students in exploring and pursuing ICT-related interests and career paths. Foster a positive and inclusive classroom culture that encourages creativity, collaboration, and respect",
      ],
    },
    
  ];

  return (
    <motion.div className="app__experience">
      <p className="heading" style={{textAlign:"center"}}>Professional Experiences</p>
      {experiences.map((experience, index) => (
        <div
          id={idName}
          className="app__experience-container"
          key={`${experience}-${index}`}
        >
          <MotionConfig
            initial={{
              opacity: 0,
              y: 20,
            }}
            transition={{
              ease: "easeInOut",
              type: "tween",
              duration: 0.5,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
          >
            <div className="app__experience-tenure">
              <span className="app__experience-tenure--spot"></span>
              <span className="year">
                {experience.start}
              </span>{" "}
              -
              <span className="year">{experience.end}</span>
            </div>
            <motion.div className="app_expriencecard-container">
              <Card
                image={experience.image}
                position={experience.position}
                companyName={experience.companyName}
                responsibilities={
                  experience.responsibilities
                }
                companyAddress={experience.companyAddress}
              />
            </motion.div>
          </MotionConfig>
        </div>
      ))}
    </motion.div>
  );
};

export default SectionWrapper(Experience, "experiences");
