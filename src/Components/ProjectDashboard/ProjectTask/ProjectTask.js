import React from 'react';
import styles from './ProjectTask.module.css';
import CustomeButton from '../../UI/Button';
const projectTask=(props)=>{
    return(
        <div className={styles.projectTask}>
            <div className={styles.projectTaskHeader}>
                <span>ID: PRO8-5 </span>
                <span>Priority: LOW</span>
            </div>
            <div className={styles.projectTaskBody}>
                <div className={styles.projectTaskDescription}>
                    <div>
                        <span>Project Title</span>
                    </div>
                    <div>
                        <span>Project acceptance criteria</span>
                    </div>
                </div>
                <div className={styles.projectTaskOperations}>
                <div className={styles.projectTaskOperation}>
                    <CustomeButton buttonLabel="Update" 
                                   buttonStyle="Success"
                                   path="/">
                    </CustomeButton>                   
                </div>
                <div className={styles.projectTaskOperation}>
                <CustomeButton buttonLabel="Delete" 
                                   buttonStyle="Danger"
                                   path="/">
                    </CustomeButton>    
                </div>
                </div>
                                                           
            </div>
        </div>
            
        
    )
}
export default projectTask;