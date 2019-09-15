import React from "react";
import "../style/contentWrapper.scss";

export default function ContentWrapper() {
  return (
    <React.Fragment>
      <div className="wrapper d-flex">
        <nav id="sidebar">Hello from side bar!</nav>
      </div>
    </React.Fragment>
  );
}
