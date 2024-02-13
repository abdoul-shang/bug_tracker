import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserListContrib from "./comp/UserListContrib";
import { Form } from "react-bootstrap";
import {
  displayContributors,
  getProjectDetail,
} from "../../actions/projectActions";

const ManageUser = ({ projects, project }) => {
  const [projId, setProjId] = useState();
  const contributorsDisplay = useSelector((state) => state.contributorsDisplay);
  const { contributors } = contributorsDisplay;

  const dispatch = useDispatch();

  console.log("rojjjjjjjjjj", projects);

  console.log("single proj", project);

  console.log("contributottttttt", contributors);

  console.log("projIdDDDDDDDDDDDDDDDDDDD", projId);
  useEffect(() => {
    if (projId) {
      dispatch(displayContributors(projId));
      dispatch(getProjectDetail(projId));
    }
  }, [projId]);
  return (
    <div>
      <h3>Manage contributors and project</h3>
      <div className="contrib-proj-select">
        <Form.Select
          value={projId}
          onChange={(e) => setProjId(e.target.value)}
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
      <UserListContrib contributors={contributors} project={project} />
    </div>
  );
};

export default ManageUser;
