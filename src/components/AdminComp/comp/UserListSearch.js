import React, { useState } from "react";
import { Form, Table } from "react-bootstrap";
import SearchComp from "./SearchComp";
import { useSelector } from "react-redux";

const UserListSearch = (props) => {
  const handleIsChecked = (name) => {
    props.setSelectUser(name);
  };

  return (
    <>
      {/* <div className="search-class">
        <SearchComp />
      </div> */}
      <div className="table-class">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
              <th>email</th>
              <th>select</th>
            </tr>
          </thead>
          <tbody>
            {props.users?.map((user) => (
              <tr index={user.id}>
                <td>{user.id}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.username}</td>
                <th>{user.email}</th>
                <th>
                  <Form.Check
                    // aria-label={`Select ${user.username}`}
                    type="checkbox"
                    checked={props.selectUser === user.username}
                    onChange={() => handleIsChecked(user.username)}
                  />
                </th>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default UserListSearch;
