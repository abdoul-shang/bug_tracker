import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import projectTypeData from "./projectType";
import { useDispatch, useSelector } from "react-redux";
import {
  createNewProject,
  getProjectDisplay,
} from "../../../actions/projectActions";

const ProjectModal = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [projectType, setProjectType] = useState("");

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const createNewProj = useSelector((state) => state.createNewProject);
  const { success: createProjectSuccess } = createNewProj;

  useEffect(() => {
    if (createProjectSuccess) {
      console.log("project created successfuly");
      setTitle("");
      setDescription("");
      setProjectType("");
      props.onHide();
      dispatch(getProjectDisplay());
    }
  }, [createProjectSuccess]);

  const dispatch = useDispatch();

  const [authorId] = useState(userInfo?.id);

  console.log("titleee", title);
  console.log("description", description);
  console.log("projectTYPE", projectType);
  console.log("authorId", authorId);

  const onSubmitHandler = () => {
    dispatch(createNewProject(title, description, projectType, authorId));
  };

  // if (response.status === 201) {
  //   console.log("gooooood", "welllllllll");
  // }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Create new project
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <Form onSubmit={onSubmitHandler}>
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
              <Form.Control
                as="textarea"
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="description"
              />
            </Form.Group>

            <br />
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
            <Button type="submit" variant="primary" className="mt-3">
              Submit
            </Button>
          </Form>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProjectModal;
