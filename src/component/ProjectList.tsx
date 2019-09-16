import React from "react";
import { data } from "../data/mockData";
import Project from "./Project";

interface projectInfo {
  id: number;
  name: string;
  description: string;
  gitUrl: string;
  liveUrl: string;
  screenshot: string;
}

export default function ProjectList() {
  return (
    <React.Fragment>
      <h2>Projects</h2>
      <div className="row">
        {data.map((project: projectInfo, index) => {
          return <Project {...project} key={index} />;
        })}
      </div>
    </React.Fragment>
  );
}
