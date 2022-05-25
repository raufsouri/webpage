import React, { Component } from 'react'
import Banner from './Banner'
import Doreha from './Doreha'
import Search from './Search'
import Logo from './Logo'

 class Landing extends Component {
  render() {
    return (
      <div> 
          
      <Banner />
      <Doreha />
      <Search />
      <Logo />
      </div>
    )
  }
}
export default Landing;