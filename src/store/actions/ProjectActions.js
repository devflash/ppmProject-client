import * as actionTypes from './ActionTypes';
import axios from 'axios';
const fetchProjectSuccess=(projects)=>{
    return{
        type:actionTypes.FETCH_PROJECT_SUCCESS,
        projects:projects
    }
}
const fetchProjectFail=()=>{
    return{
        type:actionTypes.FETCH_PROJECT_FAIL,
        error:true
    }
}
export const fetchProjects=()=>{
    return dispatch=>{
        axios.get('http://localhost:8080/api/project/all')
            .then(response=>{
                dispatch(fetchProjectSuccess(response.data));
            })
            .catch(error=>{
                dispatch(fetchProjectFail());
            })
    }
}