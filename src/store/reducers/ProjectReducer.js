import * as actionTypes from '../actions/ActionTypes';
const initialState={
    projects:null,
    updatedProject:{
        updatedProjectDetails:null,
        updationErrors:null
    },
    error:false
}
const projectReducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case actionTypes.FETCH_PROJECT_SUCCESS:{
            return{
                ...state,
                projects:action.projects,
                error:action.error
            }
        }
        case actionTypes.FETCH_PROJECT_FAIL:{
            return{
                ...state,
                error:true
            }
        }
        
       
      
        
        default:{
            return initialState;
        }
    }
}

export default projectReducer;