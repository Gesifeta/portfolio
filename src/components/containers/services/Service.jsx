// import { NavLink } from "react-router-dom";
// import { motion } from "framer-motion";

// import { images } from "../../assets/images";
// import "./service.scss";
// import SectionWrapper from "../Wrapper/SectionWrapper";

// export const Service = ({ idName }) => {
//   const about = [
//     {
//       id: 1,
//       title: "UX Design",
//       description:
//         "User experience (UX) design is the process design teams use to create products that provide meaningful and relevant experiences to users.",
//       image: images.uxdesign,
//     },
//     {
//       id: 2,
//       title: "Web Design",
//       description:
//         "Web designing is the process of planning, conceptualizing, and implementing the plan for designing a website in a way that is functional and offers a good user experience.",
//       image: images.webdesign,
//     },
//     {
//       id: 3,
//       title: "Cloud Support Solution",
//       description:
//         "Typically consist of a front end platform, back end platforms, a cloud-based delivery, and a network. Combined, these components make up cloud computing architecture.",
//       image: images.awssmall,
//     },
//     {
//       id: 4,
//       title: "Web Development",
//       description:
//         "Web development, also known as website development, refers to the tasks associated with creating, building, and maintaining websites and web applications that run online on a browser.",
//       image: images.webdevelopment,
//     },
//   ];
//   return (
//     <motion.section id={idName} className="app__about">
//       <p className="heading">Services</p>
//       <div className="app__about-service">
//         {about.map((data, index) => (
//           <NavLink
//             to={`/services/${data?.title.split(" ").join("-")}`}
//             key={`data-${index}`}
//           >
//             <motion.div className="service">
//               <div className="app__about-service--image">
//                 <img src={data.image} alt={data.title} />
//               </div>
//               <p className="title">{data.title}</p>
//               <p className="description">{data.description}</p>
//             </motion.div>{" "}
//           </NavLink>
//         ))}
//       </div>
//     </motion.section>
//   );
// };

// export default SectionWrapper(Service, "services");
