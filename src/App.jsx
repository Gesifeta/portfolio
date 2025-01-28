import { useState } from "react";
import { Speech, Loader } from "lucide-react";

import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";

import "./App.css";
import { useNavigate } from "react-router-dom";

function App() {
  let navigate = useNavigate();
  const [audioLoaded, setAudioLoaded] = useState(false);

  // To play the audio when button clicked
  const sayName = () => {
    // To hold audio
    const audio = new Audio("/media.mp4");
    setAudioLoaded(true);
    return (audio.onloadedmetadata = () => {
      audio.play();
      setAudioLoaded(false);
    });
  };
  return (
    <>
      <Header />
      <section className="container">
        <div className="container-introduction">
          <span>
            <p className="small">Hi, there</p>
            <h2 style={{ color: "gray" }}>
              My name is{" "}
              <b className="name">
                Gemechu.
                <span className="speak">
                  {audioLoaded ? (
                    <Loader color="white" />
                  ) : (
                    <Speech className="play" onClick={sayName} />
                  )}
                  <p className="small">Say name</p>
                </span>
              </b>
            </h2>
            <h1 style={{ fontSize: "3rem", marginTop: "1rem" }}>
              End-to-End  Web Developer, with special interest in Amazon Web
              Services.
            </h1>
          </span>
          <p className="introduction">
            I am a freelance web developer based in Addis Ababa, Ethiopia. I  believe in bridging innovation and technology to solve real-world
            challenges. My work is driven by a commitment to write clean,
            maintainable code and deliver impactful projects that delight users.{" "}
            <b>Feel free</b> to explore my portfolio to see my projects,
            certifications, and the journey that has shaped me into the
            developer I am today. <br  />
            <br />
           <h3 style={{textAlign:"right",color:"teal"}}>Let's create something amazing together!</h3> 
          </p>
        </div>
        <div className="container-cta">
          <button
            className="btn-cta"
            onClick={() => navigate("/home", { replace: true })}
          >
            Show More
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
