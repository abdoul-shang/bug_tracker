import React, { useEffect } from 'react' 
import { Button, Container } from 'react-bootstrap'

import { useDispatch, useSelector } from 'react-redux'
import { getProjectDisplay } from '../actions/projectActions'
import DeveloperComponent from '../components/DeveloperComponetn'
import AdminComponent from '../components/AdminComponent'
import { getUserList } from '../actions/userAction'
import '../components/css/main.css'
import '../components/css/AdminComponent.css'


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

  // useEffect(()=>{
  //   if(userInfo?.isAdmin){
  //     dispatch(getUserList())
  //   }
  // },[userInfo]) 

  console.log('cvcvcvcv', users)
  
  return (
    <div className='large'>
      {userInfo?.isAdmin ?  <AdminComponent  userInfo={userInfo} /> : <DeveloperComponent />}
    </div>

  )
}

export default HomeScreen