import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Nav.module.css";
import logo from "../images/logo.jpg";
const Nav = () => {
    return (
      
            <header className={styles.header} >
 <div className={styles.container}>
     <ul className={styles.list}>
         <li><Link to="/">home</Link></li>
         <li><Link to="/">about</Link></li>
         <li><Link to="/Products">Producte</Link></li>
         <li><Link to="/">email</Link></li>
     </ul>
 </div>
 <div className={styles.logo}>
    <img className={styles.logo} src={logo} alt="logo"/>
 </div>
            </header>
        
    );
};

export default Nav;