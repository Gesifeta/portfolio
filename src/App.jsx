import { useState, useEffect } from "react";
import { Speech, Loader } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import {
  trackCountryPageView,
  trackUserPageView,
} from "./services/analyticsServices.js";

import "./App.css";

export function App() {
  let navigate = useNavigate();
  let location = useLocation();
  const [audioLoaded, setAudioLoaded] = useState(false);
  // File path: /home/gesifeta/portfolio/src/App.jsx
  // Content:
  useEffect(() => {
   // trackUserPageView();
    trackCountryPageView();
  }, [location]);
  // To play the audio when button clicked
  const sayName = () => {
    // To hold audio
    const audio = new Audio("/Name.m4a");
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
          <div className="hero">
            <span>
              <p className="small">Hi, there</p>
              <h2 style={{ color: "gray" }}>
                My name is
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
              <h1
                style={{
                  fontSize: "2rem",
                  lineHeight: "1.5",
                  marginTop: "1rem",
                  marginBottom: "1.5rem",
                }}
              >
                End-to-End Web Developer, with special interest in Amazon Web
                Services.
              </h1>
              <p className="introduction">
                I am a freelance web developer based in Addis Ababa, Ethiopia. I
                believe in bridging innovation and technology to solve
                real-world challenges. My work is driven by a commitment to
                write clean, maintainable code and deliver impactful projects
                that delight users.
              </p>
              <h3
                style={{
                  textAlign: "right",
                  color: "orange",
                  fontSize: "2rem",
                  lineHeight: "3rem",
                }}
              >
                <p className="introduction" style={{ textAlign: "left" }}>
                  <b style={{ padding: "2rem 0" }}>Feel free</b> to explore my
                  portfolio to see my projects, certifications, and the journey
                  that has shaped me into the developer I am today.
                </p>
                Let's create something amazing together!
              </h3>
            </span>
            <img src="/profile.png" alt="profile" className="profile" />
          </div>
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
