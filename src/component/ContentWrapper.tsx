import React from "react";
import "../style/contentWrapper.scss";

export default function ContentWrapper() {
  return (
    <React.Fragment>
      <div className="wrapper d-flex">
        <nav id="sidebar">
          <div className="text-center mt-5">
            Hi I'm Hans
          </div>
          <div className="text-center mt-3">
            A Junior Full Stack Developer
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
}
