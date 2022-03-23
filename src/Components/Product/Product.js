import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const { name, seller, price, ratings, img } = props.product;
    return (
        <div className=''>
            <div className='card'>
                <img src={img} className="img-w" alt="" />
                <div className='card-body'>
                    <h4>{name}</h4>
                    <h2 className=''>Price: $ {price}</h2>
                    <p> Ratings : {ratings}</p>
                    <p>{seller}</p>
                </div>
                <div>
                    <button onClick={() => props.HandleCart(props.product)} className='btn'>Add to Cart <FontAwesomeIcon icon={faCartArrowDown} /></button>
                </div>
            </div>
        </div>
    );
};

export default Product;