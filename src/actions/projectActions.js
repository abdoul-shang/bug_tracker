import axios from "axios"
import { PROJECT_DISPLAY_FAIL, PROJECT_DISPLAY_REQUEST, PROJECT_DISPLAY_SUCCESS } from "../constants/projectConstant"

export const getProjectDisplay = () => async(dispatch, getState) => {
    try{ 
        dispatch({
            type: PROJECT_DISPLAY_REQUEST
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

        const {data} = await axios.get('http://127.0.0.1:8000/projects/', config) 

        dispatch({
            type: PROJECT_DISPLAY_SUCCESS,
            payload: data
        })

    }catch(error){
        dispatch({
            type : PROJECT_DISPLAY_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message
        })
        
    }

}