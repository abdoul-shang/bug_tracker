import React, { useEffect, useState } from "react";
import IssuesList from "./comp/IssuesList";
import { Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import "./adminComp.css";
import IssuesModal from "./modals/IssuesModal";
import { useDispatch, useSelector } from "react-redux";
import { displayIssues, getProjectDetail } from "../../actions/projectActions";
import { getUserList } from "../../actions/userAction";
import Message from "./Message";

const MyTickets = ({ projects, project }) => {
  const [projectIssuesId, setProjectIssuesId] = useState(0);
  const [modalIssueShow, setModalIssueShow] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("");
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("");
  const [projectId, setProjectId] = useState(0);
  const [authorUserId, setAuthorUserId] = useState(0);
  const [assigneeId, setAssigneeId] = useState(0);
  const [projectName, setProjectName] = useState("");
  const [issueSuccessMessage, setIssueSuccessMessage] = useState("");

  const userList = useSelector((state) => state.userList);
  const { users } = userList;

  const createIssue = useSelector((state) => state.createIssue);
  const { success: createIssueSuccess, error: createIssueError } = createIssue;

  const issuesDisplay = useSelector((state) => state.issuesDisplay);
  const { issues } = issuesDisplay;

  const dispatch = useDispatch();

  console.log("project ticket", projectIssuesId);

  useEffect(() => {
    if (projectIssuesId !== 0) {
      dispatch(getProjectDetail(projectIssuesId));
      dispatch(displayIssues(projectIssuesId));
    }
  }, [projectIssuesId]);

  useEffect(() => {
    if (createIssueSuccess) {
      setIssueSuccessMessage("issue created succesfully");
      OnHideIssueModal();
      setTitle("");
      setDescription("");
      setTag("");
      setPriority("");
      setProjectId(0);
      setProjectName("");
      setStatus("");
      setProjectIssuesId(0);
      setAssigneeId(0);
      setAuthorUserId(0);
      dispatch(displayIssues(projectIssuesId));
    }
  }, [createIssueSuccess]);

  console.log("isssssues", issues);

  useEffect(() => {
    let timer;
    if (issueSuccessMessage !== "") {
      timer = setTimeout(() => {
        setIssueSuccessMessage("");
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [issueSuccessMessage, createIssueError]);

  const isCreateIssueButtonSelected = () => {
    setModalIssueShow(true);
    dispatch(getUserList());
  };

  console.log("useeeeeeeeeeers", users);

  const OnHideIssueModal = () => {
    setModalIssueShow(false);
  };
  return (
    <div>
      {issueSuccessMessage && (
        <Message variant="success">{issueSuccessMessage}</Message>
      )}
      {createIssueError && (
        <Message variant="danger">{createIssueError}</Message>
      )}
      <h3>Manage issues and project</h3>
      <div className="contrib-proj-select">
        <div className="form-issue">
          <Form.Select
            value={projectIssuesId}
            onChange={(e) => setProjectIssuesId(e.target.value)}
            aria-label="select project"
          >
            <option value="" disabled>
              Select project
            </option>
            {projects?.map((project) => (
              <option key={project.id} value={project.id}>
                {project.title}
              </option>
            ))}
          </Form.Select>
        </div>
        {projectIssuesId !== 0 && (
          <div className="m-b">
            <Button
              variant="success"
              // className="mr-color"
              onClick={() => isCreateIssueButtonSelected()}
            >
              <div>
                <FontAwesomeIcon icon={faCirclePlus} className="mr-icon" />
                create issue
              </div>
            </Button>
          </div>
        )}
      </div>
      <IssuesList issues={issues} />
      <IssuesModal
        show={modalIssueShow}
        onHide={OnHideIssueModal}
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        tag={tag}
        setTag={setTag}
        priority={priority}
        setPriority={setPriority}
        status={status}
        setStatus={setStatus}
        projectId={projectId}
        setProjectId={setProjectId}
        authorUserId={authorUserId}
        setAuthorUserId={setAuthorUserId}
        assigneeId={assigneeId}
        setAssigneeId={setAssigneeId}
        projectIssuesId={projectIssuesId}
        projectName={projectName}
        setProjectName={setProjectName}
        project={project}
        users={users}
      />
    </div>
  );
};

export default MyTickets;
