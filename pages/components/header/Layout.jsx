import React from 'react'
import Header from './Header'
import Footer from '../footer/Footer'
import Headerrrr from './Test'

const Layout = (props) => {
  return (
    <div>
        <Header/>
        {props.children}
        <Footer/>
    </div>
  )
}

export default Layout