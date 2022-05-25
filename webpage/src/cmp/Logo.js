import React from 'react';
import styles from "./Logo.module.css";
import mylogo from "../images/logo.jpg";
const Logo = () => {
    return (
        <div className={styles.container}>
            <h3>Who is producted this Corses?</h3>
           <div> <img className={styles.img} src={mylogo} alt="logo" />
           </div>
        </div>
    );
};

export default Logo;