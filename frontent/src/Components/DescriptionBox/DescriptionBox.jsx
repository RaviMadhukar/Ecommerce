import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = (props) => {
    const {product} = props;
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-nav">Description</div>
        <div className="descriptionbox-description">
            <p>{product.description}</p>
        </div>
    </div>
  )
}
