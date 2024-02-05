import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import projectTypeData from "./projectType";
import "./modal.css";
import { projectUpdate } from "../../../actions/projectActions";
const ProjectDetailModal = ({ show, onHide, fullscreen, project }) => {
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();
  const [projectType, setProjectType] = useState();
  console.log("projectIDddddd", project?.id);

  const dispatch = useDispatch();

  useEffect(() => {
    if (project?.id !== undefined) {
      setTitle(project.title);
      setDesc(project.description);
      setProjectType(project.type);
    }
  }, [project]);

  const updateHandler = () => {
    // console.log(title);
    // console.log(desc);
    // console.log(projectType);
    dispatch(
      projectUpdate({
        id: project?.id,
        title: title,
        description: desc,
        type: projectType,
      })
    );
  };
  //   author_user: 8;
  //   created_time: "2023-12-25T20:56:14.056132Z";
  //   description: "frontent-pronnnnnnn";
  //   id: 14;
  //   title: "fro-robbbbbbbbbb";
  //   type: "FRONT-END";
  //   type_display: "Front-End";

  return (
    <div>
      <Modal show={show} fullscreen={fullscreen} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>{project?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-f">
          <div className="custom-modal-body">
            <Form onSubmit={updateHandler}>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="title"
              />
              <br />
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  placeholder="description"
                />
              </Form.Group>
              <br />
              <Form.Label>type</Form.Label>
              <Form.Select
                value={projectType}
                onChange={(e) => setProjectType(e.target.value)}
                aria-label="select project type"
              >
                <option value="" disabled>
                  Select project type
                </option>
                {projectTypeData.map((project) => (
                  <option key={project.id} value={project.desc}>
                    {project.desc}
                  </option>
                ))}
              </Form.Select>
              <div className="right">
                <Button type="submit" variant="primary" className="mt-3">
                  update
                </Button>
              </div>
            </Form>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ProjectDetailModal;
