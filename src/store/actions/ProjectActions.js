import * as actionTypes from './ActionTypes';
import axios from 'axios';

export const initialiseforUpdate=(project)=>{
    return{
        type:actionTypes.INITIALISE_FOR_UPDATE,
        project:project
    }
}
export const updateProjectValueChanged=(inputName,updatedValue)=>{
    return{
        type:actionTypes.UPDATE_PROJECT_VALUE_CHANGED,
        inputName:inputName,
        updatedValue:updatedValue
    }
}

const fetchProjectSuccess=(projects)=>{
    return{
        type:actionTypes.FETCH_PROJECT_SUCCESS,
        projects:projects,
        error:false
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
        // axios.get("./service/projectsList.json")
        axios.get('http://localhost:8080/api/project/all')
            .then(response=>{
                dispatch(fetchProjectSuccess(response.data));
            })
            .catch(error=>{
                dispatch(fetchProjectFail());
            })
    }
}
const updateProjectSuccess=()=>{
    return{
        type:actionTypes.UPDATE_PROJECT_SUCCESS,
        updationErrors:null
    }
}
const updateProjectFail=(error)=>{
    return{
        type:actionTypes.UPDATE_PROJECT_FAIL,
        updationErrors:error
    }
}
export const updateProject=(updatedProject)=>{
    return dispatch=>{
        axios.post("http://localhost:8080/api/project",updatedProject)
            .then(response=>{
                console.log(response);
            })
            .catch(error=>{
                console.log(error);
            })
    }
}

