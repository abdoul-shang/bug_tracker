import React, { useState } from "react";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import ProjectModal from "./modals/ProjectModal";
import { Link } from "react-router-dom";
import ProjectDetailModal from "./modals/ProjectDetailModal";
import { getProjectDetail } from "../../actions/projectActions";
import { PROJECT_DETAIL_RESET } from "../../constants/projectConstant";

const MyProjects = ({ projects, project }) => {
  const [modalShow, setModalShow] = useState(false);
  const [modalDetailShow, setModalDetailShow] = useState(false);
  const [fullscreen, setFullscreen] = useState(true);

  const dispatch = useDispatch();

  console.log("projects", projects);

  const isCreateProjectButtonSelected = () => {
    setModalShow(true);
  };

  const isSelectedIdToGetProjectDetail = (id) => {
    setModalDetailShow(true);
    setFullscreen(true);
    dispatch(getProjectDetail(id));
  };

  // author_user: 8;
  // created_time: "2023-11-25T03:18:18.145555Z";
  // description: "this [project aim at providing life insurance to people of our community . so we decided to implement django framework for the backend due to requirement of the project";
  // id: 1;
  // title: "life_insurance_backend";
  // type: "Back-End";

  function limitWords(inputString, limit) {
    // Split the input string into an array of words
    const words = inputString.split(/\s+/);

    // Slice the array to keep only the specified number of words
    const limitedWords = words.slice(0, limit);

    // Join the words back into a string
    const resultString = limitedWords.join(" ");

    return resultString;
  }

  const onHideAction = () => {
    setModalDetailShow(false);
    dispatch({ type: PROJECT_DETAIL_RESET });
  };

  return (
    <>
      <h3>Projects</h3>
      <hr className="hr" />
      <div className="mr-bg">
        <div className="ml">
          <Button
            variant="success"
            className="mr-color"
            onClick={() => isCreateProjectButtonSelected()}
          >
            <div>
              <FontAwesomeIcon icon={faCirclePlus} className="mr-icon" />
              create new project
            </div>
          </Button>
          <div className="project-list">
            <Table striped>
              <thead className="project-list-table">
                <tr>
                  <th>Project_Id</th>
                  <th>Project Name</th>
                  <th>Description</th>
                  <th>Project Type</th>
                  <th>Project Detail</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project) => (
                  <tr index={project.id}>
                    <td>{project.id}</td>
                    <td>{project.title}</td>
                    <td>{limitWords(project.description, 10)}</td>
                    <td>{project.type}</td>
                    <td>
                      <Button
                        variant="link"
                        onClick={() =>
                          isSelectedIdToGetProjectDetail(project.id)
                        }
                        color="primary"
                      >
                        detail
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>

      <ProjectModal show={modalShow} onHide={() => setModalShow(false)} />
      <ProjectDetailModal
        show={modalDetailShow}
        onHide={() => onHideAction()}
        fullscreen={fullscreen}
        project={project}
      />
    </>
  );
};

export default MyProjects;
