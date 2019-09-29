import React from 'react';
import styles from './Sidebar.module.css';
import {Link} from 'react-router-dom';
import Backdrop from '../UI/Backdrop';
const sidebar=(props)=>{
    let sidebarClassess=[styles.nav];
    if(props.showSidebar)
    {
        sidebarClassess.push(styles.openSidebar);
    }
    return(
        <React.Fragment>
        <Backdrop backdropClick={props.backdropClick} show={props.showSidebar}/>
        <div className={sidebarClassess.join(' ')}>
            <div className={styles.navItem}>
                <Link to="/" className={styles.navigationItem}>Dashboard</Link>
                <Link to="/" className={styles.navigationItem}>SignUp</Link>
                <Link to="/" className={styles.navigationItem}>SignIn</Link>
            </div>
        </div>
        </React.Fragment>
        
    )
}

export default sidebar;