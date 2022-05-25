import React from 'react';
import styles from "./Banner.module.css";
import banner from "../images/banner.jpg"
const Banner = () => {
    return (
        <div className={styles.container}>
            <img className={styles.banner} src={banner} alt={banner}/>
            <div className={styles.text}>
                <h1>React.Script</h1>
                <p>first learn then <span>react !</span></p>
            </div>
        </div>
    );
};

export default Banner;