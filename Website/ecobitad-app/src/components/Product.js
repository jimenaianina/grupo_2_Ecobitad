import React from 'react';

function Product(props) {
    return (
        <div className="Product">
                <h2> {props.name}  </h2>
                <p> {props.description}  </p>
                <p> {props.colors}  </p>
                <p> {props.category}  </p>
                <p> {props.detailURL}  </p>
            </div>
    )
}

export default Product;