import React , {Component} from 'react'
import styles from './Header.module.css';
import {Link} from 'react-router-dom';
class Header extends Component{
    render(){
        return(
           <div className={styles.header}>
               <div className={styles.title}>
                   <span>Personal Project Management Tool</span>
               </div>
               <div className={styles.nav}>
                   <div className={styles.navItem}>
                       <Link to="/" className={styles.navigationItem}>Dashboard</Link>
                   </div>
                   <div className={styles.navItem}>
                       <Link to="/" className={styles.navigationItem}>SignUp</Link>
                       <Link to="/" className={styles.navigationItem}>SignIn</Link>
                   </div>
               </div>
               <div className={styles.toggleHamburger} onClick={this.props.hamburgerClick}>
                    <div></div>
                    <div></div>
                    <div></div>
               </div>
           </div>
        )
        
    }
}

export default Header;