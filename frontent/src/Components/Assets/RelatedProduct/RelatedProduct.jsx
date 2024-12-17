import React from 'react'
import './RelatedProduct.css'
import related_product from '../related_product'
import { Item } from '../../Item/Item'

export const RelatedProduct = () => {
  return (
    <div className='relatedproducts'>
        <h1>Related Product</h1>
        <hr />
        <div className="relatedproduct-item">
             {related_product.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
             })}
        </div>
    </div>
  )
}
