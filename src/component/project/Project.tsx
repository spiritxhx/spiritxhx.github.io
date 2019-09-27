import React, { useState } from "react";
import { Button } from "../Button";
import { ProjectWrapper } from "./ProjectWrapper";
import { Modal } from "react-bootstrap";

interface projectInfo {
  id: number;
  name: string;
  description: string;
  gitUrl: string;
  liveUrl: string;
  screenshot: string;
}

export default function Project(props: projectInfo) {
  const { name, gitUrl, liveUrl, description, screenshot } = props;
  //set the showing status of the modal
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  return (
    <ProjectWrapper className="col-10 mx-auto col-md-6 col-lg-5 my-3">
      <h4 className="text-capitalize">{name}</h4>
      <img src={screenshot} alt={name} className="card-img-top" onClick={handleShow} />
      <div className="card-footer d-flex justify-content-between">
        <a href={gitUrl} target="_blank" rel="noopener noreferrer">
          <Button>Github</Button>
        </a>
        <a href={liveUrl} target="_blank" rel="noopener noreferrer">
          <Button>Live Link</Button>
        </a>
      </div>
      <Modal className="project-detail" show={show} onHide={handleClose} >
        <Modal.Header>
          Detail of {name}
        </Modal.Header>
        <Modal.Body>
          {description}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </ProjectWrapper>
  );
}
