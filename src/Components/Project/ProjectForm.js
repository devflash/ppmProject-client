import React,{Component} from 'react';
import styles from './ProjectForm.module.css';
import  CustomInput from '../UI/Input';
import axios from 'axios';
class ProjectForm extends Component{
    state={
        projectForm:{
            projectName:{
                inputType:"input",
                id:'projectName',
                label:"Project Name",
                errorMessage:"",
                config:{
                    name:"projectName",
                    type:"input",
                    placeholder:"Project Name",
                    value:""
                   
                }

            },
            projectIdentifier:{
                inputType:"input",
                id:'projectIdentifier',
                label:'Project identifier',
                errorMessage:"",
                config:{
                    name:'projectIdentifier',
                    type:"input",
                    placeholder:"Project Identifier",
                    value:""
                }
            },
            projectDescription:{
                inputType:"input",
                id:'projectDescription',
                label:'Project Description',
                errorMessage:"",
                config:{
                    name:'projectDescription',
                    type:'input',
                    placeholder:"Project Description",
                    value:""
                }
            },
            startDate:{
                inputType:"input",
                id:'startDate',
                label:'Start Date',
                errorMessage:"",
                config:{
                    name:'startDate',
                    type:"date",
                    value:""
                }
            },
            endDate:{
                inputType:"date",
                id:'endDate',
                label:'End Date',
                errorMessage:"",
                config:{
                    name:'endDate',
                    type:"date",
                    value:""
                }
            }
        }
    }
    onSubmitClickHandler=(event)=>{
        event.preventDefault();
        const newProject={};
        for(const inputElement in this.state.projectForm)
        {
            newProject[inputElement]=this.state.projectForm[inputElement].config.value;
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
    inputValueChangeHandler=(event)=>{
        const updatedProjectForm={
            ...this.state.projectForm,
            [event.target.name]:{
                ...this.state.projectForm[event.target.name],
                config:{
                    ...this.state.projectForm[event.target.name].config,
                    value:event.target.value
                } 
            }

        }
        this.setState({projectForm:updatedProjectForm});
    }
    render()
    {
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
                <form onSubmit={(event)=>this.onSubmitClickHandler(event)}>
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
                            <CustomInput classList={classList} key={cur.id} inputType={cur.inputType} inputConfig={cur.config} valueChange={this.inputValueChangeHandler}/>
                            <p className={styles.errorMessage}>{cur.errorMessage}</p>
                        </div>
                        
                    )})
                }
                <div class={styles.buttonContainer}>
                    <button class={styles.submitFormButton}>Create Project</button>
                </div>
                
                </form>
                
            </div>
            </React.Fragment>
        )
    }
}

export default ProjectForm;