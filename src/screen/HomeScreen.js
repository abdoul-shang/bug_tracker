import React from 'react' 
import { Button } from 'react-bootstrap'

import { useDispatch, useSelector } from 'react-redux'
import { getProjectDisplay } from '../actions/projectActions'
import DeveloperComponent from '../components/DeveloperComponetn'
import AdminComponent from '../components/AdminComponent'
import { getUserList } from '../actions/userAction'

const HomeScreen = () => { 

  const userRegister = useSelector((state)=> state.userRegister)

  const projectDisplay = useSelector((state)=> state.projectDisplay) 

  const userLogin = useSelector((state)=> state.userLogin) 

  const userList = useSelector((state)=> state.userList)

  const { users} = userList

  const { userInfo} = userLogin

  const dispatch = useDispatch()

  // const {loading, userInfo, error } = userRegister 
  const {loading, projects, error} = projectDisplay 

  

  const displayHandler = () => {
      //  e.preventDefault()
       console.log('clicked')
      //  dispatch(getProjectDisplay()) 
      // dispatch(getUserList()) 
      
       
  }
  
  return (
    <div>
      <h1>welcome {userInfo?.first_name} - {userInfo?.last_name}</h1>
      {userInfo?.isAdmin ? <h2>You are the admin of this app</h2>: <h2>you were assigned to project below</h2>}
      {/* <Button onClick={()=>displayHandler()}>display</Button>  */}
      {userInfo?.isAdmin ?  <AdminComponent /> : <DeveloperComponent />}
    
      </div> 

  )
}

export default HomeScreen