import React,{Component} from 'react';
import CustomeButton from '../UI/Button';
import ProjectTask from './ProjectTask/ProjectTask';
import styles from './ProjectDashboard.module.css';
class ProjectDashboard extends Component
{
    render()
    {
        return(
            <div className={styles.projectDashboardContainer}>
                <div className={styles.createTaskButtonContainer}>
                    <CustomeButton  buttonLabel="Create Project Task" 
                                    buttonStyle="createProjectButton"
                                    path="/">
                    </CustomeButton>

                </div>
                <div className={styles.projectTasksContainer}>
                    <div className={styles.toDotaskList}>
                        <div className={styles.toDoHeader}>
                            <span>TO DO</span>
                        </div>
                        <div className={styles.projectTasks}>
                            <ProjectTask/>
                        </div>
                    </div>
                    <div className={styles.inprogressTaskList}>
                        <div className={styles.inProgressHeader}>
                            <span>In Progress</span>
                        </div>
                        <div className={styles.projectTasks}>
                            <ProjectTask/>
                            <ProjectTask/>
                        </div>
                    </div>
                    <div className={styles.completedTasksList}>
                        <div className={styles.completeHeader}>
                            <span>Done</span>
                        </div>
                        <div className={styles.projectTasks}>
                            <ProjectTask/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default ProjectDashboard;