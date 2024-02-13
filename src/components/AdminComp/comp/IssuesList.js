import React from "react";
import Message from "../Message";
import IssuesModal from "../modals/IssuesModal";
import { Button, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import "./comp.css";
const IssuesList = ({ issues }) => {
  //   assignee_user: 8;
  //   author_user: 8;
  //   created_time: "2024-02-13T05:18:10.362994Z";
  //   description: "we noticed that there are many bugs to fix so it's our priority now , the project must be delivered as soon as possible";
  //   id: 2;
  //   priority: "HIGH";
  //   project: 25;
  //   status: "TODO";
  //   tag: "BUG";
  //   title: "fixing bug for this project";
  return (
    <>
      {/* {deleteContribMessage && ( */}
      {/* <Message variant="success">{""}</Message> */}
      {/* )} */}
      <div className="table-class">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>issue ID</th>
              <th>author_user_ID</th>
              <th>title</th>
              <th>priority</th>
              <th>project_Id</th>
              <th>tag</th>
              <th>status</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {issues?.map((issue) => (
              <tr index={issue.id}>
                <td>{issue.id}</td>
                <td>{issue.author_user}</td>
                <td>{issue.title}</td>
                <td>{issue.priority}</td>
                <td>{issue.project}</td>
                <td>{issue.tag}</td>
                <td>{issue.status}</td>
                <td className="trash-pen">
                  <div>
                    <FontAwesomeIcon icon={faTrash} className="m-trash" />
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faPen} className="m-pen" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      {/* <UserModal onHide={handleClose} show={show} user={user} /> */}
      <IssuesModal />
      {/* <DeleteModal
      onHideDelete={handleClickDeleteClose}
      deleteShow={deleteShow}
      contribId={contribId}
      project={props.project}
      deleteContribMessage={deleteContribMessage}
      setDeleteContribMessage={setDeleteContribMessage}
      // user={user}
      /> */}
    </>
  );
};

export default IssuesList;
