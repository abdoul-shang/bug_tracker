import React, { useEffect, useState } from "react";
import projectTypeData from "./projectType";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import TagData from "../data/TagData";
import PriorityData from "../data/PriorityData";
import StatusData from "../data/StatusData";
import { useDispatch, useSelector } from "react-redux";
import { addProjectIssue } from "../../../actions/projectActions";

const IssuesModal = ({
  show,
  onHide,
  title,
  setTitle,
  description,
  setDescription,
  tag,
  setTag,
  priority,
  setPriority,
  status,
  setStatus,
  projectId,
  setProjectId,
  authorUserId,
  setAuthorUserId,
  assigneeId,
  setAssigneeId,
  projectIssuesId,
  projectName,
  setProjectName,
  project,
  users,
}) => {
  const dispatch = useDispatch();
  const onSubmitHandler = () => {
    dispatch(
      addProjectIssue({
        id: project?.id,
        title: title,
        description: description,
        tag: tag,
        priority: priority,
        status: status,
        project: projectId,
        author_user: authorUserId,
        assignee_user: assigneeId,
      })
    );
  };

  useEffect(() => {
    if (project?.id) {
      setProjectName(project?.title);
      setProjectId(project?.id);
    }
  }, [project?.id]);

  return (
    <Modal
      //   {...props}
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Create An issue
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <Form onSubmit={onSubmitHandler}>
            <Row>
              <Col lg={6}>
                <Form.Control
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="title"
                />
                <br />
              </Col>

              <Col lg={6}>
                <Form.Select
                  value={tag}
                  onChange={(e) => setTag(e.target.value)}
                  aria-label="select tag"
                >
                  <option value="" disabled>
                    Select tag
                  </option>
                  {TagData.map((tag) => (
                    <option key={tag.id} value={tag.designation}>
                      {tag.designation}
                    </option>
                  ))}
                </Form.Select>
                <br />
              </Col>

              <Col lg={12}>
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
              </Col>

              <Col lg={6}>
                <Form.Select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  aria-label="select priority"
                >
                  <option value="" disabled>
                    Select priority
                  </option>
                  {PriorityData.map((priority) => (
                    <option key={priority.id} value={priority.designation}>
                      {priority.designation}
                    </option>
                  ))}
                </Form.Select>
                <br />
              </Col>
              <Col lg={6}>
                <Form.Select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  aria-label="select status"
                >
                  <option value="" disabled>
                    Select status
                  </option>
                  {StatusData.map((status) => (
                    <option key={status.id} value={status.designation}>
                      {status.designation}
                    </option>
                  ))}
                </Form.Select>
                <br />
              </Col>
              <Col lg={6}>
                {/* <Form.Select
                  value={projectId}
                  onChange={(e) => setProjectId(e.target.value)}
                  aria-label="select project"
                >
                  <option value="" disabled>
                    Select project
                  </option>
                  {[""].map((project) => (
                    <option key={project.id} value={project.id}>
                      {project.title}
                    </option>
                  ))}
                </Form.Select> */}
                <Form.Control
                  type="text"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  placeholder="project"
                  disabled
                />
                <input
                  type="hidden"
                  value={projectId} // Send projectId to the backend
                  onChange={(e) => setProjectId(e.target.value)}
                />
                <br />
              </Col>
              <Col lg={6}>
                <Form.Select
                  value={authorUserId}
                  onChange={(e) => setAuthorUserId(parseInt(e.target.value))}
                  aria-label="select author"
                >
                  <option value="" disabled>
                    Select author
                  </option>
                  {users?.map((author) => (
                    <option key={author.id} value={author.id}>
                      {author.first_name} {author.last_name}
                    </option>
                  ))}
                </Form.Select>
                <br />
              </Col>

              <Col lg={12}>
                <Form.Select
                  value={assigneeId}
                  onChange={(e) => setAssigneeId(parseInt(e.target.value))}
                  aria-label="select author"
                >
                  <option value="" disabled>
                    Select assignee
                  </option>
                  {users?.map((assignee) => (
                    <option key={assignee.id} value={assignee.id}>
                      {assignee.first_name} {assignee.last_name}
                    </option>
                  ))}
                </Form.Select>
                <br />
              </Col>
            </Row>

            <Button type="submit" variant="primary" className="mt-3">
              Submit
            </Button>
          </Form>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default IssuesModal;
