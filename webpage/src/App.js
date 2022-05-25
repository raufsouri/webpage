import React, { Component } from 'react'
import { Route , Routes , Navigate } from 'react-router-dom'
import Nav from './cmp/Nav'
import Landing from './cmp/Landing'
import Products from './cmp/Products'
import Footer from './cmp/Footer'
import Detailspage from './cmp/Detailspage'
 class App extends Component {
  render() {
    return (
      <div>
         <Nav />
       <Routes>
          <Route path="/Products" element={<Products/>}/>
          <Route path="/Products/:id" element={<Detailspage/>}/>
          <Route path="/"  element={< Landing />}/>
          <Route path="*" element={<Navigate to="/Products/5" />}/>
          </Routes>
       
        
    
         <Footer />
      </div>

    )
  }
}
export default App