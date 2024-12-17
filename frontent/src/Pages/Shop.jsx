import React from 'react'
import { Hero } from '../Components/Hero/Hero'
import { Popular } from '../Components/Popular/Popular'
import { Offers } from '../Components/Offers/Offers'
import { NewCollection } from '../Components/New_Collection/NewCollection'
import { Newsletter } from '../Components/Newsletter/Newsletter'

export const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers />
      <NewCollection />
      <Newsletter/>
    </div>
  )
}
