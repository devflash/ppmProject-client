import React , {Component} from 'react'
import styles from './Header.module.css';
class Header extends Component{
    render(){
        return(
           <div className={styles.header}>
               <div className={styles.title}>
                   <span>Personal Project Management Tool</span>
               </div>
               <div className={styles.nav}>
                   <div className={styles.navItem}>
                       <a href="#" className={styles.navigationItem}>Dashboard</a>
                   </div>
                   <div className={styles.navItem}>
                       <a href="#" className={styles.navigationItem}>SignUp</a>
                       <a href="#" className={styles.navigationItem}>SignIn</a>
                   </div>
               </div>
               <div className={styles.toggleHamburger}>
                    <div></div>
                    <div></div>
                    <div></div>
               </div>
           </div>
        )
        
    }
}

export default Header;