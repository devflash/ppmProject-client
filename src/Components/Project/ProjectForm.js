import React,{Component} from 'react';
import styles from './ProjectForm.module.css';
import  CustomInput from '../UI/Input';
class ProjectForm extends Component{
    state={
        projectForm:{
            projectName:{
                inputType:"input",
                id:'projectName',
                label:"Project Name",
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
                config:{
                    name:'endDate',
                    type:"date",
                    value:""
                }
            }
        }
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
        console.log(projectFormInput);
        return(
            <React.Fragment>
            <div className={styles.CenterTitle}>
                  <h1>Project Form</h1>
            </div>
            <div className={styles.ProjectFrom}>
                <form>
                {
                    projectFormInput.map(cur=>(
                        <div class={styles.inputElement}>
                            <label>{cur.label}</label>
                            <CustomInput key={cur.id} inputType={cur.inputType} inputConfig={cur.config} valueChange={this.inputValueChangeHandler}/>
                        </div>
                        
                    ))
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