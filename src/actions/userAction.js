import axios from 'axios'
import {
    USER_LIST_FAIL,
    USER_LIST_REQUEST,
     USER_LIST_SUCCESS,
     USER_LOGIN_REQUEST, 
     USER_LOGIN_SUCCESS, 
     USER_REGISTER_FAIL, 
     USER_REGISTER_REQUEST, 
     USER_REGISTER_SUCCESS 
    } from "../constants/userConstant"



export const register = (userName,firstName, lastName, email, password, confirmPassword) => async (dispatch) => {

    try { 
        dispatch({
            type: USER_REGISTER_REQUEST
        })  

        // MAKE POST REQUEST TO GET BACK THE USER TOKEN 

        const config = {
            headers : {
                'Content-Type': 'application/json'
            }
        } 

        const {data} = await axios.post(
            'http://127.0.0.1:8000/signup/', 
            { username:userName,first_name:firstName,last_name:lastName,email:email, password: password, password2: confirmPassword},
            config
        ) 

        console.log('fjfdfjdflghhhh', data)
        //  IF POST REQUEST SUCCESFULL WE DISPATCH AND SEND THE PAYLOAD TO REDUCER 
        dispatch({
            type : USER_REGISTER_SUCCESS,
            payload: data
        }) 

        // AFTER REGISTRATION WE WANT TO IMMEDIATELY LOGIN THE USER

        dispatch({
            type : USER_LOGIN_SUCCESS,
            payload : data
        }) 

        // SETTING THE VALUE OF USER IN LOCAL STORAGE SO WE KNOW THE USER IS LOGGED IN 
         localStorage.setItem('setItem', JSON.stringify(data))

    }catch(error){
        dispatch({
            type : USER_REGISTER_FAIL,
            payload : error.response && error.response.data.detail ? error.response.data.detail : error.message
        })

    }

} 


export const login = (userName, password) => async (dispatch) => {

    try { 
        dispatch({
            type: USER_LOGIN_REQUEST
        })  

        // MAKE POST REQUEST TO GET BACK THE USER TOKEN 

        const config = {
            headers : {
                'Content-type' : 'application/json'
            }
        } 

        const {data} = await axios.post(
            'http://127.0.0.1:8000/login/', 
            {username: userName,password: password},
            config
        ) 
        //  IF POST REQUEST SUCCESFULL WE DISPATCH AND SEND THE PAYLOAD TO REDUCER 
        dispatch({
            type : USER_LOGIN_SUCCESS,
            payload: data
        }) 
        // SETTING THE VALUE OF USER IN LOCAL STORAGE SO WE KNOW THE USER IS LOGGED IN 
         localStorage.setItem('setItem', JSON.stringify(data))

    }catch(error){
        dispatch({
            type : USER_REGISTER_FAIL,
            payload : error.response && error.response.data.detail ? error.response.data.detail : error.message
        })


    }

} 

export const getUserList = () => async(dispatch, getState) => {
    try{ 
        dispatch({
            type: USER_LIST_REQUEST
        }) 

        // PULLING THE CURRENT USER WE ARE LOGGED IN AS 

        const { 
            userLogin : { userInfo }
        } = getState()

        // MAKE GET REQUEST TO GET THE USER DATA 
        const config = {
            headers : {
                'Content-Type' : 'application/json',
                Authorization : `Bearer ${userInfo.access}`  /* PASSING IN USER TOKEN AND IF THE USER IN AUTHORISED HE'LL HAVE FULL ACCESS TO HIS PROFILE INFORMATION */
            }
        }

        const {data} = await axios.get('http://127.0.0.1:8000/users', config) 

      
        dispatch({
            type: USER_LIST_SUCCESS,
            payload: data
        })

    }catch(error){
        dispatch({
            type : USER_LIST_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message
        })
        
    }

}