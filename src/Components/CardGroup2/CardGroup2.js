import React from 'react';
import {CardGroup} from 'react-bootstrap';
import Card2 from '../Card2/Card2';

const CardGroup2 = () => {
    const products = [
        {id:1,img:"https://i.ibb.co/R4q7qqk/stem-t4l-Aplbm-IMHw-AE-unsplash.jpg",name:'laptop-pro', price:2500},
        {id:2,img:"https://i.ibb.co/R4q7qqk/stem-t4l-Aplbm-IMHw-AE-unsplash.jpg",name:'laptop-cro', price:3500},
        {id:3,img:"https://i.ibb.co/R4q7qqk/stem-t4l-Aplbm-IMHw-AE-unsplash.jpg",name:'laptop-bro', price:4500},                                                               
        
    ];
    return (
        <div>
            <CardGroup>
            {
                products.map(product => <Card2
                key={product.id}
                product={product}
                
                ></Card2>)
            }

            </CardGroup>
          
        </div>
        
    );
};

export default CardGroup2;