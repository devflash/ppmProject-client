import React,{Component} from 'react';
import ProjectItem from './Project/ProjectItems';
import CustomeButton from './UI/Button';
import styles from './Dashboard.module.css';
import {connect} from 'react-redux';
import * as projectActions from '../store/actions/ProjectActions';
import ErrorHandler from './ErrorHandler/ErrorHandler';
import axios from 'axios';

class Dashboard extends Component{
    state={
        serviceError:false
    }
    componentDidMount(){
        this.props.onFetchProjects();
    }

    onDeleteClickHandler=(projectId)=>{
       axios.delete('http://localhost:8080/api/project/'+projectId)
        .then(response=>{
            this.props.onFetchProjects();
        }).catch(error=>{
           this.setState({serviceError:true})
        })
    }
    onUpdateClickHandler=(projectId)=>{
        this.props.history.push({
            pathname:'showForm/update/'+projectId,

        })
    }
    render(){
        let projectsToDisplay=[];
        let error=null;
        if(this.props.projects!==null && this.props.projects.length!==0)
        {
            projectsToDisplay=this.props.projects.map(cur=>(
                <ProjectItem key={cur.projectIdentifier} 
                             projectName={cur.projectName} 
                             projectDescription={cur.projectDescription}
                             onCreateClick={this.onCreateClickHandler}
                             onDeleteClick={()=>this.onDeleteClickHandler(cur.projectIdentifier)}
                             onUpdateClick={()=>this.onUpdateClickHandler(cur.projectIdentifier)}/>
                                
            ));
        }
        else{
            error=(<ErrorHandler errorMessage="Please create new Project"/>)
        }
        if(this.props.error || this.state.serviceError)
        {
            error=(<ErrorHandler errorMessage="Please check connection"/>)
        }
        return(
            <React.Fragment>
               <div className={styles.CreateProject}>
                    <div className={styles.CenterTitle}>
                        <h1>Projects</h1>
                    </div>
                    <CustomeButton 
                        buttonLabel="Create Project" 
                        buttonStyle="createProjectButton"
                        path="/showForm/create"/>
               </div>
               <div className={styles.ProjectItems}>
                  {error}
                  {projectsToDisplay}
                  
                    
               </div>
               </React.Fragment>
        )
    }

}
const mapEventToProps=(dispatch)=>{
    return{
        onFetchProjects:()=>dispatch(projectActions.fetchProjects()),
       
    }

}
const mapStateToProps=(state)=>{
    return{
        projects:state.projectReducer.projects,
        error:state.projectReducer.error
    }
    
}

export default connect(mapStateToProps,mapEventToProps)(Dashboard);