import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavPlaceholder from "./component/NavPlaceholder";
import ContentWrapper from "./component/ContentWrapper";
// import { ProjectWrapper } from "./component/ProjectWrapper";

import NavComponent from "./component/NavComponent";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <NavComponent />
      <NavPlaceholder />
      <Router>
        <ContentWrapper />
      </Router>
    </React.Fragment>
  );
};

export default App;
