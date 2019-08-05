import React,{Component} from 'react';
import ProjectItem from './Project/ProjectItems';
import styles from './Dashboard.module.css';
class Dashboard extends Component{
    render(){
        return(
           <div className={styles.DashboardContainer}>
               <div className={styles.CreateProject}>
                    <div className={styles.CenterTitle}>
                        <h1>Projects</h1>
                    </div>
                    <div className={styles.createProjectButton}>
                        <a href="#">Create Project</a>
                    </div>
               </div>
               <div className={styles.ProjectItems}>
                    <ProjectItem/>
                    <ProjectItem/>
               </div>
           </div>
        )
    }
}


export default Dashboard;