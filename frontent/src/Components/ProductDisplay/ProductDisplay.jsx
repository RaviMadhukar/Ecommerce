import React, { useContext } from 'react'
import './ProductDisplay.css'
import { ShopContext } from '../../Context/ShopContext';

export const ProductDisplay = (props) => {

    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt="" />
            </div>
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.title}</h1>
            <div className="productdisplay-right-price">
                <div className="productdisplay-right-price-old">₹{product.old_price}</div>
                <div className="productdisplay-right-price-new">₹{product.new_price}</div>
            </div>
            <h3>In Stock</h3>
            <h2>About this items</h2>
            <div className="about-item">
                <p><span>Brand :</span> Gaumayam</p>
                <p><span>Item Form	:</span> {}</p>
                <p><span>Material :</span> {}</p>
                <p><span>Sticks : </span> {}</p>
                <p><span>Scent :</span> {}</p>
            </div>
            <button onClick={() => {addToCart(product.id)}}>Add To Cart</button>
        </div>
    </div>
  )
}
