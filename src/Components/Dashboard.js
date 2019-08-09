import React,{Component} from 'react';
import ProjectItem from './Project/ProjectItems';
import CustomeButton from './UI/Button';
import styles from './Dashboard.module.css';

class Dashboard extends Component{
    render(){
        return(
            <React.Fragment>
               <div className={styles.CreateProject}>
                    <div className={styles.CenterTitle}>
                        <h1>Projects</h1>
                    </div>
                    {/* <div className={styles.createProjectButton}>
                        <a href="#">Create Project</a>
                    </div> */}
                    <CustomeButton 
                        buttonLabel="Create Project" 
                        buttonStyle="createProjectButton"
                        path="/showForm"/>
               </div>
               <div className={styles.ProjectItems}>
                    <ProjectItem/>
                    <ProjectItem/>
               </div>
               </React.Fragment>
        )
    }
}


export default Dashboard;