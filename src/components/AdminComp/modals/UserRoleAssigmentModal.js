import React from 'react'
import { Button, Form, Modal, Table } from 'react-bootstrap'

const UserRoleAssigmentModal = (props) => {  
  const roleAssign = [
    {
      id: 1,
      role: 'author'
    },
    {
      id : 2,
      role:'contributor'
    }
  ]
  const UsersTable = (
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        {/* <th>Username</th> */}
        <th>email</th>
      </tr>
    </thead>
    <tbody>
      {props.users?.map((user)=>(
           <tr index={user.id}>
           <td>{user.id}</td>
           <td>{user.first_name}</td>
           <td>{user.last_name}</td>
           {/* <td>{user.username}</td> */}
           <th>{user.email}</th>
         </tr>
      ))}
    </tbody>
  </Table>
  )  

  const RoleTable = (
    <Form>
    {roleAssign?.map((type) => (
      <div key={type.id} className="mb-3">
        <Form.Check // prettier-ignore
          type={type.role}
          id={type.id}
          label={type.role}
        />
      </div>
    ))}
  </Form>
  )  

  const confirmationTable = (
   
      <div className="mb-3">
          <h4>Are you sure you want to assign these users to this role ?</h4>
      </div>
  
  )  

  const userRoleAssigmentHookUp = {
    1 : UsersTable,
    2 : RoleTable,
    3 : confirmationTable
  }  

  const selectedUserRoleAssigmentHookUp = userRoleAssigmentHookUp[props.typeSelected]


    
    
  
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
           {props.typeSelected === 1 ? 'select one or more users' : props.typeSelected === 2 ? 'select the role to assign' : props.typeSelected === 3 ? 'confirmation' : null }
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {selectedUserRoleAssigmentHookUp} 
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default UserRoleAssigmentModal