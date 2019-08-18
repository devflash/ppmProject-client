import React,{Component} from 'react';
import styles from './ProjectForm.module.css';
import  CustomInput from '../UI/Input';
import axios from 'axios';
import {connect} from 'react-redux';
import * as projectActions from '../../store/actions/ProjectActions';
class ProjectForm extends Component{
    state={
        projectForm:{
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
                inputType:"date",
                id:'endDate',
                label:'End Date',
                errorMessage:"",
                value:"",
                config:{
                    name:'endDate',
                    type:"date"
                }
            }
        }
    }
    onSubmitClickHandler=(event,formType)=>{
        event.preventDefault();
        if(formType==='create')
        {
            const newProject={};
            for(const inputElement in this.state.projectForm)
            {
                newProject[inputElement]=this.state.projectForm[inputElement].value;
            }
            axios.post("http://localhost:8080/api/project",newProject)
                .then(response=>{
                this.props.history.push("/");
                })
                .catch(errors=>{
                for(const inputField in this.state.projectForm)
                {
                    if(errors.response.data[inputField])
                    {
                        const updatedProjectForm={
                            ...this.state.projectForm,
                                [inputField]:{
                                    ...this.state.projectForm[inputField],
                                    errorMessage:errors.response.data[inputField]
                                    }
                                }
                        this.setState({projectForm:updatedProjectForm})
                                
                    }
                    else
                    {
                        const updatedProjectForm={
                            ...this.state.projectForm,
                            [inputField]:{
                                ...this.state.projectForm[inputField],
                                errorMessage:""
                            }
                        }
                    this.setState({projectForm:updatedProjectForm})
                    
                    }
                }
                })

            }
            else
            {
                this.props.onUpdateProject(this.props.updatedProject);
            }
            
    }
    inputValueChangeHandler=(event,formType)=>{
        if(formType==='create')
        {
            const updatedProjectForm={
                ...this.state.projectForm,
                [event.target.name]:{
                    ...this.state.projectForm[event.target.name],
                    value:event.target.value 
                }
    
            }
            this.setState({projectForm:updatedProjectForm});
        }
        else
        {
            this.props.onUpdatedProjectValueChanged(event.target.name,event.target.value);
        }
        
    }
    render()
    {
       const formType=this.props.match.params.formAction;
        const projectFormInput=[];
 
        for(let key in this.state.projectForm)
        {
            projectFormInput.push(this.state.projectForm[key]);
        }
       

        return(
            <React.Fragment>
            <div className={styles.CenterTitle}>
                  <h1>Project Form</h1>
            </div>
            <div className={styles.ProjectFrom}>
                <form onSubmit={(event,formType)=>this.onSubmitClickHandler(event,formType)}>
                {
                    formType==="create" ?
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
                                 valueChange={(formType)=>this.inputValueChangeHandler(formType)}
                                 inputValue={cur.value}/>
                            <p className={styles.errorMessage}>{cur.errorMessage}</p>
                        </div>
                        
                    )})
                    : 
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
                                         key={cur.id} 
                                         inputType={cur.inputType} 
                                         inputConfig={cur.config} 
                                         valueChange={this.inputValueChangeHandler}
                                         inputValue={this.props.updatedProject[cur.id]}/>

                            <p className={styles.errorMessage}>{cur.errorMessage}</p>
                        </div>
                        
                    )
                    })
                 
            }
                <div class={styles.buttonContainer}>
                    <button class={styles.submitFormButton}>Update Project</button>
                </div>
                
                </form>
                
            </div>
            </React.Fragment>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        updatedProject:state.projectReducer.updatedProject.updatedProjectDetails,
        updationErrors:state.projectReducer.updatedProject.updationErrors
    }
    
}
const mapEventToProps=(dispatch)=>{
    return{
        onUpdatedProjectValueChanged:(inputName,updatedValue)=>dispatch(projectActions.updateProjectValueChanged(inputName,updatedValue)),
        onUpdateProject:(updatedProject)=>dispatch(projectActions.updateProject(updatedProject))
    }

}

export default connect(mapStateToProps,mapEventToProps)(ProjectForm);