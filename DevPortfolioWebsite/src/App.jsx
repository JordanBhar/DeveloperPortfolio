import React, { useRef } from "react";
import styles from "./style";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Home, Education, Projects, Contact } from "./pages";

const App = () => {
  const educationRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToRef = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <Router>
      <div className="bg-primary-gradient overflow-hidden">
        <div className={`w-full overflow-hidden h-[3000px] ${styles.flexStart}`}>
          <div className="mx-auto"> {/* Center the Navbar */}
            <Navbar />
            <Home/>
            <div ref={educationRef} id="Education">
              <Education />
            </div>
            <div ref={projectsRef} id="Projects">
              <Projects />
            </div>
            <div ref={contactRef}  id="Contact">
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;


