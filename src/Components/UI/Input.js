import React from 'react';
import styles from './Input.module.css';
const Input =(props)=>{

    switch(props.inputType)
    {
        case 'input':
            return (<input 
                        type={props.inputConfig.type}
                        value={props.inputConfig.value}
                        name={props.inputConfig.name}
                        placeholder={props.inputConfig.placeholder} 
                        onChange={(event)=>props.valueChange(event)} 
                        className={[styles.Input,styles[props.classList]].join(" ")}/>);
        case 'textarea':
            return (<textarea 
                        value={props.inputConfig.value} 
                        name={props.inputConfig.name} 
                        placeholder={props.inputConfig.placeholder} 
                        onChange={(event)=>props.valueChange(event)}
                        className={[styles.Textarea,styles.Input].join(' ')}></textarea>);
        default:
            return (<input 
                        type={props.inputConfig.type} 
                        value={props.inputConfig.value} 
                        name={props.inputConfig.name} 
                        onChange={(event)=>props.valueChange(event)} 
                        className={styles.Input}/>);

    }
   
        
   

}


export default Input;