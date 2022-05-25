import React, { Component } from 'react'
import Dore from './Dore';
import styles from "./Doreha.module.css";
import css from "../images/css.png";
import github from "../images/github.png";
import js from "../images/js(1)-png.png";
import react from "../images/React.png";




 class Doreha extends Component {
constructor () {
super ()
this.state={
  doreData : [
    {image: css , name :"css" , cost :"250 T"},
    {image: github , name :"github" , cost :"150 T"},
    {image: js , name :"js" , cost :"500 T"},
    {image: react , name :"react" , cost :"100 T"},
  ]
}
}

  render() {
    return (
      <div className={styles.contianer}>
         {/* <Dore image={css} name="Css" cost="250 T" />
         <Dore image={github} name="github" cost="150 T" />
         <Dore image={js} name="js" cost="500 T" />
         <Dore image={react} name="react" cost="100 T" /> */}
         {this.state.doreData.map((dore) => 
         <Dore
          key={dore.id} 
          image={dore.image}
           name={dore.name} 
           cost={dore.cost}
            id={dore.id}
             />
             )}
          </div>
    )
  }
}
export default Doreha;