import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import styles from "./Dore.module.css";
import down from "../images/down.svg";
import up from "../images/up.svg"; 
 
 class Dore extends Component {

     constructor() {
       super();
       this.state={
         counter : 0,
       }
     }
     downHandler = () => {
       if(this.state.counter >= 1){
        this.setState(prevState => ({
          counter : prevState.counter -1,
        }))
       }

     }

     upHandler = () => {
      this.setState(prevState => ({
        counter : prevState.counter + 1,
      }))
           }
  render() {
      const {image , name , cost , id} =this.props;
      const {counter} = this.state;
    return (
      <div className={styles.container}>
          
          <img className={styles.css} src={image} alt="css" />
          
          <h3>
            <Link to= {`/products/${id}`}>{name}</Link> 
            </h3>
          <p>{cost} {counter ? `*${counter} = ${counter * Number(cost.split(" ")[0])}` : ""}</p>
         
          <div className={styles.counter}>
     <img className={!counter ? styles.deactive : ""} src={down} alt="arrow" onClick={this.downHandler}/>
     <span>{counter}</span>
     <img  src={up} alt="arrow" onClick={this.upHandler}/>
   
     </div>
     </div>
    )
  }
}
export default Dore;