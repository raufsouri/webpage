import React, { Component } from 'react'
import axios from 'axios';
import Dore from './Dore';
import styles from "./products.module.css"
class Products extends Component {
    constructor (props){
        super (props);
        this.state = {
            products : []
        }
    }
    componentDidMount (){
       axios.get("https://fakestoreapi.com/products")
       .then(response => this.setState ({
           products : response.data,
       }))
    }
  render() {
      const {products} = this.state;
    return (
      <div className={styles.contianer}>
         {
          products.length ?  products.map(product => <Dore key={product.id} image={product.image} name={product.title} cost={`${product.price} T` } />)  
        :  <h1>Loading ...</h1>
         }
      </div>

    )
  }
}
export default Products;