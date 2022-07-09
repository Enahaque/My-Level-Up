import React from 'react';
import Card from '../Card/Card';

const CardGroup = () => {
    const products = [
        {id:1,img:"https://i.ibb.co/R4q7qqk/stem-t4l-Aplbm-IMHw-AE-unsplash.jpg",name:'laptop-pro', price:2500},
        {id:2,img:"https://i.ibb.co/R4q7qqk/stem-t4l-Aplbm-IMHw-AE-unsplash.jpg",name:'laptop-cro', price:3500},
        {id:3,img:"https://i.ibb.co/R4q7qqk/stem-t4l-Aplbm-IMHw-AE-unsplash.jpg",name:'laptop-bro', price:4500},                                                               
        
    ];
    
    
    return (
       
            <div class="card-group gap-3 px-3">
                {
                    products.map(product=><Card
                        key={product.id}
                        product={product}
                    
                    ></Card>)
                }
                
            </div>
        
    );
};

export default CardGroup;