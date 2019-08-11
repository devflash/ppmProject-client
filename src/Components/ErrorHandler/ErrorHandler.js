import React from 'react';
import styles from './ErrorHandler.module.css';
const errorHandler=(props)=>{
    return(
        <div className={styles.errorContainer}>
            <p>{props.errorMessage}</p>
        </div>
    )
}

export default errorHandler;