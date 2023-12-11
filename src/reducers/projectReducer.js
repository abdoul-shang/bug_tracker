import { 
    PROJECT_DISPLAY_FAIL, 
    PROJECT_DISPLAY_REQUEST, 
    PROJECT_DISPLAY_SUCCESS 
} from "../constants/projectConstant"


// REDUCER used in projectDisplayScreen component
export const projectsDisplayReducer = (state = { projects:[]}, action) => {  
    switch(action.type){ 
        case PROJECT_DISPLAY_REQUEST:
            return {
                loading: true,
                projects: []
            }
        
        case PROJECT_DISPLAY_SUCCESS:
            return {
                loading : false,
                projects : action.payload
            }  
        case PROJECT_DISPLAY_FAIL :
            return {
                loading: false,
                error : action.payload
            } 
      
        default: 
          return state
    }


}