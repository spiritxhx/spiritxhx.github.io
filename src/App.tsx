import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import NavComponent from './component/NavComponent';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <NavComponent />
      <Router>

      </Router>
    </React.Fragment>
  );
}

export default App;
