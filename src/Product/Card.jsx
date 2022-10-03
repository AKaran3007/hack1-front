import React from 'react'
import Footer from '../Home/Footer'
import Mainnav from '../Home/Mainnav'
import Product from './Product'

function Card() {
    const movie = [
        {
            id: 1,
            title: "Fast Furious",
            price: 200,
        },
        {
            id: 2,
            title: "Intersteller",
            price: 250,
        },
        {
            id: 3,
            title: "Iron man",
            price: 200,
        },
        {
            id: 4,
            title: "x-men",
            price: 199,
        },
        {
            id: 5,
            title: "Tenent",
            price: 200,
        },
        {
            id: 6,
            title: "Prince of persia",
            price: 200,
        },
    ]
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-grey">
                <div class="container">
                    <Mainnav></Mainnav>
                </div>
            </nav>
            <div class="container mt-5">
                <div class="row">
                    <div class="col-lg-12 col-md-6 col-sm-12">
                        <div class="row">
                            {/* <Product></Product>
                        <Product></Product>
                        <Product></Product>
                        <Product></Product>
                        <Product></Product>
                        <Product></Product>
                         */}
                            {
                                movie.map((item) => {
                                    return <Product item={item}></Product>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <Footer ></Footer>
            </footer>



        </>
    )
}

export default Card