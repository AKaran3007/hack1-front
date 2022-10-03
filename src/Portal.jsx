import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Home/Footer'
import Home from './Home/Home'
import Mainnav from './Home/Mainnav'

function Portal() {
  return (
    <>
    <div>
        <Mainnav></Mainnav>
        <Outlet/>
        <Footer></Footer>
    </div>
    
    </>
  )
}

export default Portal