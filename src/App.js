
import {Routes,Route} from "react-router-dom"
import Header from "./components/header";
import Footer from "./components/footer";
import "./App.css";
import Home from "./main"
import Portfolio from "./components/portfolio";

function App() {
  return (
    <div className="App">
         <Routes>
        <Route path="/" element={< Portfolio />} />
        <Route path="/portfolio" element={< Portfolio />} />
      </Routes>
       <Footer/>
    </div>
  );
}

export default App;
