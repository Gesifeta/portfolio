import { useState } from "react";
import { Speech, Loader } from "lucide-react";

import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";

import "./App.css";

function App() {
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
            <h1>
              I'm{" "}
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
            </h1>
          </span>
          <p>
            A Full Stack Developer specializing in creating scalable, secure,
            and efficient web applications powered by Amazon Web Services(AWS).
            With expertise in both frontend and backend development, I build
            solutions that blend robust engineering with a seamless user
            experience.
          </p>
        </div>
        <div className="container-cta">
          <button className="btn-cta">Show More</button>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
