import { Mail, Linkedin, MapPinHouse, Github, Gift } from "lucide-react";
const MyInfo = () => {
  return (
    <>
      <div className="info">
        <h2 style={{ fontSize: "2rem" }}>Gemechu Gesifeta </h2>
        <p style={{ color: "gray", fontSize: "1.5rem" }}>
          Fullstack Web Developer
        </p>
        <div className="info-detail">
          <p>
            <Mail color="white" /> <span>adamgemechu@gmail.com</span>
          </p>
          <p>
            <Linkedin color="lightblue" />
            <a
              href="https://www.linkedin.com/in/gemechugesifeta/"
              target="_blank"
            >
              LinkedIn
            </a>
            <span></span>
          </p>
          <p>
            <Github/>
            <a style={{color:"inherit"}}href="https://github.com/Gesifeta" target="_blank">
              Github
            </a>
            <span></span>
          </p>
          <p>
            <MapPinHouse color="green" />
            <span>Addis Ababa, Ethiopia</span>
          </p>
        </div>
      </div>
      <hr style={{ border: "1px solid gray", width: "70%" }} />
    </>
  );
};

export default MyInfo;
