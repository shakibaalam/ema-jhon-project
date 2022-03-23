import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb } from '../../utilities/fakedb';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    // Cart button clicked
    const [cart, setCart] = useState([]);
    const HandleCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        //for local storage
        addToDb(product.id);
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                <h1><span className='color'>Pro</span>ducts<span className='color'>....</span>.... {products.length}</h1>
                <div className='show-products'>
                    {
                        products.map(product => <Product
                            key={product.id}
                            product={product}
                            HandleCart={HandleCart}
                        ></Product>)
                    }
                </div>
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;