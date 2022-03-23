import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    let total = 0;
    let shipping = 0;
    for (const product of cart) {
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));//2 dec dekabe r ata string tai float
    const gradTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h2>Order List :</h2>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h3>Grand Total: ${gradTotal}</h3>
        </div>
    );
};

export default Cart;