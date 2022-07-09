import React from 'react';
import {Card} from 'react-bootstrap';

const Card2 = (props) => {
    const { name, img, price } = props.product;
    return (
        <Card  className="ms-2 me-2">
            <Card.Img variant="top" src={img} className="w-100 h-50 rounded" />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">{price}</small>
            </Card.Footer>
        </Card>
    );
};

export default Card2;