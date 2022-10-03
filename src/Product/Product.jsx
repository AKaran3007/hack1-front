import React from 'react';
import { StarRating } from 'react-star-rating-element';

function Product({item}) {
    return (
        <>
            <div class="col-lg-3 mb-2">
                <div class="card" style={{ width: "18rem" }}>
                    <img src="https://almasboobsmagic.com/wp-content/uploads/2021/03/check-circle.gif" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title"><b>{item.title}</b></h5>
                        <p class="card-text"><b>${item.price}</b></p>
                        
                    </div>
                </div>
            </div>


        </>


    )
}

export default Product