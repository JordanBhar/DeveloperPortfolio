import React from "react";
import styles from "./style";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Education, Projects, Contact } from "./pages";

const App = () => (
  <Router>
    <div className="bg-primary-gradient overflow-hidden">
      <div className={`w-full overflow-hidden h-[2000px] ${styles.flexStart}`}>
        <div className="mx-auto"> {/* Center the Navbar */}
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/education" component={Education} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </div>
    </div>
  </Router>
);

export default App;

