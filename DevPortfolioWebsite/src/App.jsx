import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Education, Projects, Contact } from './pages'
import styles from './style'

export const App = () => (
  <Router>
    <div className="bg-primary-gradient w-full overflow-hidden">
      <div className={` w-full overflow-hidden h-[1000px] ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Home />
        </div>
      </div>
    </div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/education" component={Education} />
      <Route exact path="/projects" component={Projects} />
      {/* Add more routes for other pages if needed */}
    </Switch>
  </Router>


  
)

export default App
