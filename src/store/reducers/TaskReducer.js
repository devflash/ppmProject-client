import * as actionTypes from '../actions/ActionTypes';
const initialState={
    tasks:null,
    error:false
}
const taskReducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case actionTypes.FETCH_TASK_SUCCESS:{
            return{
                ...state,
                tasks:action.tasks

            }
        }
        case actionTypes.FETCH_TASK_FAIL:
        {
            return{
               ...state,
               error:action.error                 
            }
        }
        default:{
            return initialState;
        }

    }
}


export default taskReducer;