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
            <CustomeButton path="/" buttonLabel="Project Board" buttonStyle="Success"/>
            <CustomeButton clickAction={props.onUpdateClick} buttonLabel="Update Project" buttonStyle="Success"/>
            <CustomeButton clickAction={props.onDeleteClick} buttonLabel="Delete Project" buttonStyle="Danger"/>
        </div>
    </div>
 
    )
}

export default ProjectItem;