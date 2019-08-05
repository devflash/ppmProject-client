import React,{Component} from 'react';
import styles from './ProjectItems.module.css';
import CustomeButton from '../UI/Button';
class ProjectItem extends Component
{
    render(){
        return(
           <div className={styles.ProjectItem}>
               <div className={styles.projectInfo}>
                   <h2>Spring / React Project</h2>
                   <span>Project to create a Kanban Board with Spring Boot and React</span>
               </div>
               <div class={styles.ProjectOperations}>
                   {/* <div className={styles.Success}>
                       <a href="#">Project Board</a> 
                   </div>
                   <div className={styles.Success}>
                        <a href="#">Update Project</a>
                   </div>
                   <div className={styles.Danger}>
                        <a href="#">Delete Project</a>
                   </div> */}
                   <CustomeButton buttonLabel="Project Board" buttonStyle="Success"/>
                   <CustomeButton buttonLabel="Update Project" buttonStyle="Success"/>
                   <CustomeButton buttonLabel="Delete Project" buttonStyle="Danger"/>
               </div>
           </div>
           
           
        )
    }
}

export default ProjectItem;