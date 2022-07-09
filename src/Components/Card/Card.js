import React from 'react';

const Card = (props) => {
    const {img, name, price } = props.product;
    return (

        <div className="card">

            <div>
                <img src={img} className="w-100 h-75 rounded" alt="..." />
            </div>

            
                <h5 className="card-title">{name}</h5>
                <p className="card-text">This is a wider card with supporting...</p>
                <p className="card-text"><small className="text-muted">{price}</small></p>
            

        </div>

    );
};

export default Card;