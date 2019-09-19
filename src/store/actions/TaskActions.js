import * as actionTypes from './ActionTypes';
import axios from 'axios';


const fetchTasksSuccess=(tasks)=>{
    return{
        type:actionTypes.FETCH_TASK_SUCCESS,
        tasks:tasks
    }
}

const fetchTaskFail=()=>{
    return{
        type:actionTypes.FETCH_TASK_FAIL,
        error:true
    }
}

export const fetchTasks=(projectId)=>{
    return dispatch=>{
        axios.get('http://localhost:8080/api/backlog/'+projectId).then(response=>{
            dispatch(fetchTasksSuccess(response.data));
        }).catch(error=>{
            dispatch(fetchTaskFail());
        })
    }
}