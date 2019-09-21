import React,{Component} from 'react';
import CustomeButton from '../UI/Button';
import ProjectTask from './ProjectTask/ProjectTask';
import styles from './ProjectDashboard.module.css';
import * as taskActions from '../../store/actions/TaskActions';
import {connect} from 'react-redux';
import ErrorHandler from '../ErrorHandler/ErrorHandler';
import axios from 'axios';
const taskPriorities={
    "3":"Low",
    "2":"Medium",
    "1":"High"
}
class ProjectDashboard extends Component
{
    state={
        serviceError:false
    }
    componentDidMount(){
        this.props.onFetchTasks(this.props.match.params.projectId);
    }
    onDeleteTaskListener=(projectId,taskId)=>{
        const confirm=window.confirm("Are you sure? Action can not be reverted");
        if(confirm)
        {
        axios.delete("http://localhost:8080/api/backlog/"+projectId+"/"+taskId)
            .then(response=>{
                this.props.onFetchTasks(this.props.match.params.projectId);
            }).catch(error=>{
                this.setState({serviceError:true})
            })
        }
    }
    render()
    {
        let toDOList=[];
        let inProgressList=[];
        let completedList=[];
        const projectId=this.props.match.params.projectId;
        let tasksToDisplay=null;
        let error=null;
        if(this.props.tasks!==null && this.props.tasks.length!==0)
        {
            this.props.tasks.forEach(element => {
                if(element.status==="To do")
                    toDOList.push(element);
                if(element.status==="Inprogress")
                    inProgressList.push(element);
                if(element.status==="Completed")
                    completedList.push(element);    
            });
            tasksToDisplay=(
                <React.Fragment>
                    <div className={styles.toDotaskList}>
                        <div className={styles.toDoHeader}>
                            <span>TO DO</span>
                        </div>
                        <div className={styles.projectTasks}>
                            {toDOList.map(cur=>(
                                <ProjectTask projectId={projectId} taskId={cur.projectSequence} taskName={cur.summary} acceptanceCriteria={cur.acceptanceCriteria} priority={taskPriorities[cur.priority]} taskDeleteClick={()=>this.onDeleteTaskListener(projectId,cur.projectSequence)}/>
                            ))}
                            
                        </div>
                    </div>
                    <div className={styles.inprogressTaskList}>
                        <div className={styles.inProgressHeader}>
                            <span>In Progress</span>
                        </div>
                        <div className={styles.projectTasks}>
                            {inProgressList.map(cur=>(
                                <ProjectTask projectId={projectId} taskId={cur.projectSequence} taskName={cur.summary} acceptanceCriteria={cur.acceptanceCriteria} priority={taskPriorities[cur.priority]} taskDeleteClick={()=>this.onDeleteTaskListener(projectId,cur.projectSequence)}/>
                            ))}
                        </div>
                    </div>
                    <div className={styles.completedTasksList}>
                        <div className={styles.completeHeader}>
                            <span>Done</span>
                        </div>
                        <div className={styles.projectTasks}>
                            {completedList.map(cur=>(
                                <ProjectTask projectId={projectId} taskId={cur.projectSequence} taskName={cur.summary} acceptanceCriteria={cur.acceptanceCriteria} priority={taskPriorities[cur.priority]} taskDeleteClick={()=>this.onDeleteTaskListener(projectId,cur.projectSequence)}/>
                            ))}
                            
                        </div>
                    </div>
                </React.Fragment>
            )

        }
        else
        {
            error=<ErrorHandler errorMessage="No task is created for the project"></ErrorHandler>
        }
        if(this.props.error || this.state.serviceError)
        {
            error=(<ErrorHandler errorMessage="Please check connection"/>)
        }
        

        return(
            // <div>
            //     <h1>Hello</h1>
            // </div>
            <React.Fragment>
            <div className={styles.createTaskButtonContainer}>
                     <CustomeButton  buttonLabel="Create Project Task" 
                                     buttonStyle="createProjectButton"
                                     path={"/showForm/taskCreate/"+projectId}>
                     </CustomeButton>

            </div>
            <div className={styles.projectTasksContainer}>
                {tasksToDisplay}
                {error}
            </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        tasks:state.taskReducer.tasks
    }
}
const mapEventToProps=(dispatch)=>{
    return{
        onFetchTasks:(projectId)=>dispatch(taskActions.fetchTasks(projectId))
    }
}

export default connect(mapStateToProps,mapEventToProps)(ProjectDashboard);