import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteContributor,
  displayContributors,
} from "../../../actions/projectActions";

const DeleteModal = ({
  deleteShow,
  onHideDelete,
  contribId,
  project,
  deleteContribMessage,
  setDeleteContribMessage,
}) => {
  const contributorDelete = useSelector((state) => state.contributorDelete);

  const { success: deleteContribSuccess } = contributorDelete;

  const dispatch = useDispatch();

  const handleContributorDelete = () => {
    console.log("redddddfff");
    dispatch(deleteContributor(project.id, contribId));
  };

  useEffect(() => {
    if (deleteContribSuccess) {
      setDeleteContribMessage("The contributor has been deleted successfully");
      dispatch(displayContributors(project.id));
      onHideDelete();
    }
  }, [deleteContribSuccess]);

  useEffect(() => {
    let timer;
    if (deleteContribMessage !== "") {
      timer = setTimeout(() => {
        setDeleteContribMessage("");
      }, 3000);
    }

    return () => clearTimeout(timer);
  }, [deleteContribMessage]);
  return (
    <div>
      <Modal show={deleteShow} onHide={onHideDelete}>
        <Modal.Header closeButton>
          <Modal.Title>Delete confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <h6>Are you sure you to delete this contributor ?</h6>
          </div>
          <div className="del-btn">
            <Button
              variant="outline-danger"
              onClick={handleContributorDelete}
              className="del-btn-x"
              size="sm"
            >
              delete
            </Button>
            <Button variant="outline-primary" onClick={onHideDelete} size="sm">
              cancel
            </Button>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={onHideDelete} size="sm">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DeleteModal;
