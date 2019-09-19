import React,{Component} from 'react';
import styles from './ProjectForm.module.css';
import  CustomInput from '../UI/Input';
import axios from 'axios';
import {connect} from 'react-redux';
import Error from '../ErrorHandler/ErrorHandler'
import * as projectActions from '../../store/actions/ProjectActions';
let projectIdentifier="";
const taskPriorities={
    "Low":3,
    "Medium":2,
    "High":1
}
class ProjectForm extends Component{
    
    state={
        create:{
            projectName:{
                inputType:"input",
                id:'projectName',
                label:"Project Name",
                errorMessage:"",
                value:"",
                config:{
                    name:"projectName",
                    type:"input",
                    placeholder:"Project Name"
                    
                   
                }

            },
            projectIdentifier:{
                inputType:"input",
                id:'projectIdentifier',
                label:'Project identifier',
                errorMessage:"",
                value:"",
                config:{
                    name:'projectIdentifier',
                    type:"input",
                    placeholder:"Project Identifier"
                
                }
            },
            projectDescription:{
                inputType:"input",
                id:'projectDescription',
                label:'Project Description',
                errorMessage:"",
                value:"",
                config:{
                    name:'projectDescription',
                    type:'input',
                    placeholder:"Project Description"
                }
            },
            startDate:{
                inputType:"input",
                id:'startDate',
                label:'Start Date',
                errorMessage:"",
                value:"",
                config:{
                    name:'startDate',
                    type:"date"
                }
            },
            endDate:{
                inputType:"input",
                id:'endDate',
                label:'End Date',
                errorMessage:"",
                value:"",
                config:{
                    name:'endDate',
                    type:"date"
                }
            },
            buttonLabel:"Create Project"
        },
        update:{
            projectName:{
                inputType:"input",
                id:'projectName',
                label:"Project Name",
                errorMessage:"",
                value:"",
                config:{
                    name:"projectName",
                    type:"input",
                    placeholder:"Project Name"
                    
                   
                }

            },
            projectIdentifier:{
                inputType:"input",
                id:'projectIdentifier',
                label:'Project identifier',
                errorMessage:"",
                value:"",
                config:{
                    name:'projectIdentifier',
                    type:"input",
                    placeholder:"Project Identifier"
                
                }
            },
            projectDescription:{
                inputType:"input",
                id:'projectDescription',
                label:'Project Description',
                errorMessage:"",
                value:"",
                config:{
                    name:'projectDescription',
                    type:'input',
                    placeholder:"Project Description"
                }
            },
            startDate:{
                inputType:"input",
                id:'startDate',
                label:'Start Date',
                errorMessage:"",
                value:"",
                config:{
                    name:'startDate',
                    type:"date"
                }
            },
            endDate:{
                inputType:"input",
                id:'endDate',
                label:'End Date',
                errorMessage:"",
                value:"",
                config:{
                    name:'endDate',
                    type:"date"
                }
            },
            buttonLabel:"Update Project"
        },
        taskCreate:{
            summary:{
                inputType:"input",
                id:'summary',
                label:"Summary",
                errorMessage:"",
                value:"",
                config:{
                    name:"summary",
                    type:"input",
                    placeholder:"Summary"
                    
                   
                }
            },
            acceptanceCriteria:{
                inputType:"input",
                id:'acceptanceCriteria',
                label:"Acceptance criteria",
                errorMessage:"",
                value:"",
                config:{
                    name:"acceptanceCriteria",
                    type:"input",
                    placeholder:"Acceptance criteria"
                    
                   
                }
            },
            dueDate:{
                inputType:"input",
                id:'dueDate',
                label:'Due date',
                errorMessage:"",
                value:"",
                config:{
                    name:'dueDate',
                    type:"date"
                }
            },
            priority:{
                inputType:"select",
                id:'priority',
                label:'Priority',
                errorMessage:"",
                value:"",
                config:{
                    name:'priority',
                    options:['Low','Medium','High']
                }
            },
            buttonLabel:"Create Task"
        },
        taskUpdate:{
            summary:{
                inputType:"input",
                id:'summary',
                label:"Summary",
                errorMessage:"",
                value:"",
                config:{
                    name:"summary",
                    type:"input",
                    placeholder:"Summary"
                    
                   
                }
            },
            acceptanceCriteria:{
                inputType:"input",
                id:'acceptanceCriteria',
                label:"Acceptance criteria",
                errorMessage:"",
                value:"",
                config:{
                    name:"acceptanceCriteria",
                    type:"input",
                    placeholder:"Acceptance criteria"
                    
                   
                }
            },
            dueDate:{
                inputType:"input",
                id:'dueDate',
                label:'Due date',
                errorMessage:"",
                value:"",
                config:{
                    name:'dueDate',
                    type:"date"
                }
            },
            priority:{
                inputType:"select",
                id:'priority',
                label:'Priority',
                errorMessage:"",
                value:"",
                config:{
                    name:'priority',
                    options:['Low','Medium','High']
                }
            },
            buttonLabel:"Update Task"
        },
        serviceError:false
    }
    componentDidMount(){
        if(this.props.match.params.projectId && (this.props.match.params.formAction==="update" || this.props.match.params.formAction==="taskUpdate"))
        {
            
            const projectId=this.props.match.params.projectId;
            const selectedProject=this.props.projects.find(cur=>{
            return cur.projectIdentifier===projectId
            });
            delete selectedProject.created_At;
            delete selectedProject.updated_At;
            projectIdentifier=selectedProject.id;
            for(const inputField in selectedProject)
            {
                this.setState((prevState)=>{
                        if(prevState.update[inputField])
                        {
                        const updatedProject={
                            ...prevState.update,
                            [inputField]:{
                                ...prevState.update[inputField],
                                value:selectedProject[inputField]
                            }
    
                        }
                    
                        return{update:updatedProject}
                    }
                    });
                }
               
        }
    }
    onSubmitClickHandler=(event,formType)=>{
        event.preventDefault();
        
            const payload={};
            let url=null;
            let navigator=null;
            for(const inputElement in this.state[formType])
            {
                if(inputElement!=="buttonLabel")
                {
                    if(inputElement==="priority")
                        payload[inputElement]=taskPriorities[this.state[formType][inputElement].value];     
                    else
                        payload[inputElement]=this.state[formType][inputElement].value;
                }
                    
            }
            if(formType==="update" || formType==="create")
            {
                url="http://localhost:8080/api/project";
                navigator="/";
                if(formType==="update")
                {
                    payload.id=projectIdentifier;
                }
                
            }
            if(formType==="taskCreate" || formType==="taskUpdate")
            {
                url="http://localhost:8080/api/backlog/"+this.props.match.params.projectId;
                navigator="/projectDashboard/"+this.props.match.params.projectId;
                if(formType==="update")
                {
                    payload.id=projectIdentifier;
                } 
            }
            axios.post(url,payload)
                .then(response=>{
                this.props.history.push(navigator);
                })
                .catch(errors=>{
                if(errors.response){
                for(const inputField in this.state[formType])
                {
                    if(inputField!=="buttonLabel")
                    {
                        if(errors.response.data[inputField])
                        {
                            const updatedProjectForm={
                                ...this.state[formType],
                                    [inputField]:{
                                        ...this.state[formType][inputField],
                                        errorMessage:errors.response.data[inputField]
                                        }
                                    }
                            this.setState({[formType]:updatedProjectForm})
                                    
                        }
                        else
                        {
                            const updatedProjectForm={
                                ...this.state[formType],
                                [inputField]:{
                                    ...this.state[formType][inputField],
                                    errorMessage:""
                                }
                            }
                        this.setState({[formType]:updatedProjectForm})
                        
                        }
                    }
                   
                }
            }
            else
            {
                this.setState({serviceError:true});
            }
                })

            
           
            
    }
    inputValueChangeHandler=(event,formType)=>{
            const updatedProjectForm={
                ...this.state[formType],
                [event.target.name]:{
                    ...this.state[formType][event.target.name],
                    value:event.target.value 
                }
    
            }
            this.setState({[formType]:updatedProjectForm});
        }
        
   
    render()
    {
      
       const formType=this.props.match.params.formAction;
       
       const projectFormInput=[];
 
        for(let key in this.state[formType])
        {
            if(key!=="buttonLabel")
                projectFormInput.push(this.state[formType][key]);
        }
        return(
            <React.Fragment>
            <div className={styles.CenterTitle}>
                  <h1>Project Form</h1>
            </div>
            {
                this.state.serviceError ?
                    <Error errorMessage="Please check connection"></Error>
                :
                    null
            }
            <div className={styles.ProjectFrom}>
                <form onSubmit={(event)=>this.onSubmitClickHandler(event,formType)}>
                {
                   
                    projectFormInput.map(cur=>{
                        let classList="";
                        if(cur.errorMessage)
                        {
                            classList="InvalidInput";
                        }
                       return (
                        <div class={styles.inputElement}>
                            <label>{cur.label}</label>
                            <CustomInput classList={classList}
                                 key={cur.id} inputType={cur.inputType}
                                 inputConfig={cur.config} 
                                 valueChange={(event)=>this.inputValueChangeHandler(event,formType)}
                                 inputValue={cur.value}/>
                            <p className={styles.errorMessage}>{cur.errorMessage}</p>
                        </div>
                        
                    )})
                 
            }
                <div class={styles.buttonContainer}>
                    <button class={styles.submitFormButton}>{this.state[formType].buttonLabel}</button>
                </div>
                
                </form>
                
            </div>
            </React.Fragment>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        projects:state.projectReducer.projects,
       
    }
    
}

export default connect(mapStateToProps,null)(ProjectForm);