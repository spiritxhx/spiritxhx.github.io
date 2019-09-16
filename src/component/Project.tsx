import React from 'react';
import {Button} from "./Button";

interface projectInfo{
  id: number;
  name: string;
  description: string;
  gitUrl: string;
  liveUrl: string;
  screenshot: string
}

export default function Project(props: projectInfo) {
  return (
    <div className="col-9 mx-auto col-md-6 col-lg-6 my-3">
      {props.name}
    </div>
  )
}
