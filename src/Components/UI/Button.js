import React from 'react';
import styles from './Button.module.css';
import {Link} from 'react-router-dom';
const customButton=(props)=>{
    return(
        <div className={styles[props.buttonStyle]}>
            <Link to={props.path} onClick={props.clickAction}>{props.buttonLabel}</Link> 
        </div>
    )
}

export default customButton;