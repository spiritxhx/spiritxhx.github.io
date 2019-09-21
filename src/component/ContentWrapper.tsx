import React from "react";
import "../style/contentWrapper.scss";
import AboutMe from "./AboutMe";
import ProjectList from "./project/ProjectList";
import ContactMe from "./ContactMe";

export default function ContentWrapper() {
  return (
    <React.Fragment>
      <div className="wrapper">
        <nav id="sidebar" className="col-md-4 col-12">
          <h3 className="text-right mt-3 align-self-center">Hi, I'm Hans</h3>
          <div className="text-right mt-3">Junior Full Stack Developer</div>
        </nav>
        <div className="content col-md-8 col-12">
          <div className="container-fluid">
            <AboutMe />
            <hr />
            <ProjectList />
            <hr />
            <ContactMe />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
