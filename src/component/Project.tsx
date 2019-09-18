import React from "react";
import { Button } from "./Button";

interface projectInfo {
  id: number;
  name: string;
  description: string;
  gitUrl: string;
  liveUrl: string;
  screenshot: string;
}

export default function Project(props: projectInfo) {
  const {name, gitUrl, liveUrl, description, screenshot} = props;
  return (
    <div className="col-12 mx-auto col-md-6 col-lg-6 my-3">
      <h4 className="text-capitalize">{name}</h4>
      <img src={screenshot} alt={name} className="card-img-top" />
      <div className="card-footer d-flex justify-content-between">
        <a href={gitUrl} target="_blank"><Button>Github</Button></a>
        <a href={liveUrl} target="_blank"><Button>Live Link</Button></a>
      </div>
    </div>
  );
}
