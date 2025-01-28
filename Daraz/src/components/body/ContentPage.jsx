import React from 'react'
import AutoPlay from './Autoplay'
import FlashSale from './FlashSale'
import Categories from '../body/Categories'



const ContentPage = () => {
  return (
    <div className='flex flex-col w-full justify-center md:px-36 mx-0'>
<AutoPlay/>
<FlashSale/>
<Categories/>
    </div>
  )
}

export default ContentPage