import React from 'react';
import styles from './Input.module.css';
const Input =(props)=>{

    switch(props.inputType)
    {
        case 'input':
            return (<input 
                        type={props.inputConfig.type}
                        value={props.inputValue}
                        name={props.inputConfig.name}
                        placeholder={props.inputConfig.placeholder} 
                        onChange={props.valueChange} 
                        className={[styles.Input,styles[props.classList]].join(" ")}/>);
        case 'textarea':
            return (<textarea 
                        value={props.inputValue} 
                        name={props.inputConfig.name} 
                        placeholder={props.inputConfig.placeholder} 
                        onChange={props.valueChange}
                        className={[styles.Textarea,styles.Input].join(' ')}></textarea>);
        case 'select':
            return (
                <select name={props.inputConfig.name}
                        onChange={props.valueChange}
                        className={[styles.Input,styles[props.classList]].join(' ')}>
                    {props.inputConfig.options.map(cur=>(
                        <option value={cur}>{cur}</option>
                    ))}        
                </select>
            );
        default:
            return (<input 
                        type={props.inputConfig.type} 
                        value={props.inputValue} 
                        name={props.inputConfig.name} 
                        onChange={props.valueChange} 
                        className={styles.Input}/>);

    }
   
        
   

}


export default Input;