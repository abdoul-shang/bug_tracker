import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "./stepperComp.css";
import {
  createNewProject,
  getProjectDisplay,
} from "../../actions/projectActions";
import projectTypeData from "../../components/AdminComp/modals/projectType";
import Message from "../../components/Message";

const Project = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [projectType, setProjectType] = useState("");
  const [message, setMessage] = useState("");

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();

  useEffect(() => {
    if (props.success) {
      setTitle("");
      setDescription("");
      setProjectType("");
      dispatch(getProjectDisplay());
      setMessage("project created Succesfully");
    }
  }, [props.success, dispatch]);

  // useEffect(() => {
  //   let timer;
  //   if (message !== "") {
  //     timer = setTimeout(() => {
  //       setMessage("");
  //     }, 3000);
  //   }
  //   return () => clearTimeout(timer);
  // }, [message, props.error]);

  useEffect(() => {
    let timer;
    if (message !== "") {
      timer = setTimeout(() => {
        setMessage("");
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [message, props.error]);

  const [authorId] = useState(userInfo?.id);

  console.log("titleee", title);
  console.log("description", description);
  console.log("projectTYPE", projectType);
  console.log("authorId", authorId);

  const onSubmitHandler = () => {
    dispatch(createNewProject(title, description, projectType, authorId));
  };
  return (
    <div className="stepper-project">
      {message && <Message variant="success">{message}</Message>}
      {props.error && <Message variant="danger">{props.error}</Message>}
      <Form onSubmit={onSubmitHandler}>
        <Form.Control
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="title"
        />
        <br />
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
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
  );
};

export default Project;
