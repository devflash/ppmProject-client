import React,{Component} from 'react';
import ProjectItem from './Project/ProjectItems';
import CustomeButton from './UI/Button';
import styles from './Dashboard.module.css';
import {connect} from 'react-redux';
import * as projectActions from '../store/actions/ProjectActions';

class Dashboard extends Component{
    componentDidMount(){
        console.log("test");
        this.props.onFetchProjects();
    }
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
                   {
                     this.props.projects ?  this.props.projects.map(cur=>(
                        <ProjectItem projectName={cur.projectName} projectDescription={cur.projectDescription}/>
                   )) : null
                   }

                    {/* <ProjectItem projectName="sahdkhkasdhkahd" projectDescription="aksjdakdhkahsdkhassd"/> */}
                    
               </div>
               </React.Fragment>
        )
    }

}
const mapEventToProps=(dispatch)=>{
    return{
        onFetchProjects:()=>dispatch(projectActions.fetchProjects())
    }

}
const mapStateToProps=(state)=>{
    return{
        projects:state.projectReducer.projects
    }
    
}

export default connect(mapStateToProps,mapEventToProps)(Dashboard);