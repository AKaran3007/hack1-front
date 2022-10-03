

import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../Product/Card'
import CardSlider from '../SliderDummy/CardSlider'
import Carous from './Carous'
import Categories from './Categories'
import Footer from './Footer'
import Mainnav from './Mainnav'
import NavbarTwo from './NavbarTwo'

function Home() {
  return (
    <>
       <nav class="navbar navbar-expand-lg navbar-light bg-grey">
  <div class="container">
       <Mainnav></Mainnav>
  </div>
  </nav>
<nav class="navbar navbar-expand-lg  navbar-light bg-dark">
  <div class="container">
    <NavbarTwo></NavbarTwo>
   
  </div>
</nav>
  
<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
<Carous></Carous>
</div>
 {/* <div class="container mt-5">
 <div class="row">
    <Card></Card>
 </div>
 </div>
   */}

   <div>
   <CardSlider></CardSlider>
   </div>
   <div>
    <Categories></Categories>
   </div>
   <div>
    <Footer></Footer>
   </div>
  
   </>
  )
}

export default Home