import React from 'react'

function Carous() {
  return (
    <>
    
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://wallpaperaccess.com/full/299035.jpg" class="d-block w-100" style={{height:"500px"}} alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://static-koimoi.akamaized.net/wp-content/new-galleries/2021/12/heres-how-pushpa-performed-on-day-4-all-languages-001.jpg" class="d-block w-100" style={{height:"500px"}} alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://picstatio.com/large/e9c26b/avengers-infinity-war-2018-artwork-4k.jpg" class="d-block w-100" style={{height:"500px"}} alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>

  
    </>
  )
}

export default Carous;