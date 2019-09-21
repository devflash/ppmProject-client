import React from 'react';
import styles from './ProjectTask.module.css';
import CustomeButton from '../../UI/Button';
const projectTask=(props)=>{
    return(
        <div className={styles.projectTask}>
            <div className={[styles.projectTaskHeader,styles[props.priority]].join(' ')}>
                <span>ID: {props.taskId}</span>
                <span>Priority: {props.priority}</span>
            </div>
            <div className={styles.projectTaskBody}>
                <div className={styles.projectTaskDescription}>
                    <div>
                        <span>{props.taskName}</span>
                    </div>
                    <div>
                        <span>{props.acceptanceCriteria}</span>
                    </div>
                </div>
                <div className={styles.projectTaskOperations}>
                <div className={styles.projectTaskOperation}>
                    <CustomeButton buttonLabel="Update" 
                                   buttonStyle="Success"
                                   path={"/showForm/taskUpdate/"+props.projectId+"/"+props.taskId}>
                    </CustomeButton>                   
                </div>
                <div className={styles.projectTaskOperation}>
                <CustomeButton buttonLabel="Delete" 
                                   buttonStyle="Danger"
                                   clickAction={props.taskDeleteClick}>
                    </CustomeButton>    
                </div>
                </div>
                                                           
            </div>
        </div>
            
        
    )
}
export default projectTask;