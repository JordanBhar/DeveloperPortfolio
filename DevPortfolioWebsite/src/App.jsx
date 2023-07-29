import React from 'react';
import styles from './style';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Education, Projects, Contact } from './pages';

const App = () => (
  <Router>
    <div className="bg-primary-gradient w-full overflow-hidden">
      <div className={` w-full overflow-hidden h-[1000px] ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
          <Switch>
            <Route exact path="/home" component={Home} />
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

