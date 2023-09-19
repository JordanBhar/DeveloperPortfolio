import React, { useRef } from "react";
import styles from "./style";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Home, Education, Projects, Contact } from "./pages";

const App = () => {
  const homeRef = useRef(null);
  const educationRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <Router>
      <div className="bg-primary-gradient overflow-hidden font-poppins">
        <div className={`w-full overflow-hidden h-a ${styles.flexStart}`}>
          <div className="mx-auto"> {/* Center the Navbar */}
            <Navbar/>
            
            <div className="space-y-60">
              <div ref={homeRef} id="Home" className="">
              <Home/>
              </div>
              <div ref={projectsRef} id="Projects">
                <Projects />
              </div>
              <div ref={educationRef} id="Education">
                <Education />
              </div>
              <div ref={contactRef}  id="Contact">
                <Contact />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;


