import React from 'react'
import Header from './Header'
import Footer from '../footer/Footer'
import ResponsiveAppBar from './Test'


const Layout = (props) => {
  return (
    <div>
        <ResponsiveAppBar/>
        {props.children}
        <Footer/>
    </div>
  )
}

export default Layout