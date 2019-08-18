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
        case actionTypes.INITIALISE_FOR_UPDATE:{
            return{
                ...state,
                updatedProject:{
                    ...state.updatedProject,
                    updatedProjectDetails:action.project
                }
            }
        }
        case actionTypes.UPDATE_PROJECT_VALUE_CHANGED:{
            return{
                ...state,
                updatedProject:{
                    ...state.updatedProject,
                    updatedProjectDetails:{
                        ...state.updatedProject.updatedProjectDetails,
                        [action.inputName]:action.updatedValue
                    }
                    
                }
            }
        }
        default:{
            return initialState;
        }
    }
}

export default projectReducer;