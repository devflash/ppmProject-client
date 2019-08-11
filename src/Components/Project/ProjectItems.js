import React from 'react';
import styles from './ProjectItems.module.css';
import CustomeButton from '../UI/Button';

const ProjectItem=(props)=>{
    return(
        <div className={styles.ProjectItem}>
        <div className={styles.projectInfo}>
            <h2>{props.projectName}</h2>
            <span>{props.projectDescription}</span>
        </div>
        <div className={styles.ProjectOperations}>
            {/* <div className={styles.Success}>
                <a href="#">Project Board</a> 
            </div>
            <div className={styles.Success}>
                 <a href="#">Update Project</a>
            </div>
            <div className={styles.Danger}>
                 <a href="#">Delete Project</a>
            </div> */}
            <CustomeButton path="/showForm" buttonLabel="Project Board" buttonStyle="Success"/>
            <CustomeButton path="/showForm" buttonLabel="Update Project" buttonStyle="Success"/>
            <CustomeButton path="/showForm" buttonLabel="Delete Project" buttonStyle="Danger"/>
        </div>
    </div>
 
    )
}

export default ProjectItem;