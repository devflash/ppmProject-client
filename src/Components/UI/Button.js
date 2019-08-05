import React from 'react';
import styles from './Button.module.css';
const customButton=(props)=>{
    return(
        <div className={styles[props.buttonStyle]}>
            <a href="#">{props.buttonLabel}</a> 
        </div>
    )
}

export default customButton;