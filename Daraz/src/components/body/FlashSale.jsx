import React from 'react'
import Card from './Card'
import HandGripper from  '../../Images/Gripper.jpg'
import Airpods from '../../Images/Airpods.jpg'
import Basket from  '../../Images/Basket.jpg'
import Dalmot from '../../Images/Dalmoth.jpg'
import Leggins from '../../Images/Leggins.jpg'
import Soap from '../../Images/Soap.jpg'


const FlashSale = () => {

  const data=[
    {
      id:1,
      name: "Hand Wrist Power Grip Strength Training Fitness Gym Exerciser Gripper",
      image:HandGripper,
      prevprice:349,
      dispercent:86
    },
    {
      id:2,
      name:"110L Foldable Blanket Storage Bags Storage Containers for Organizing Bedroom Closet Clothing Comforter",
      image:Basket,
      prevprice:500,
      dispercent:50
    },
    {
      id:3,
      name:"Warm Winter Fake Skin Transparent High Waist Stretchy Leggings Stockings For Women | Winter Stocking For Women",
      image:Leggins,
      prevprice:1125,
      dispercent:59
    },
    {
      id:4,
      name:"TWS Wireless Bluetooth Airpods Charging Case Super Sound Premium Pro 2 With Free Silicon Case",
      image:Airpods,
      prevprice:1400,
      dispercent:71
    },
    {
        id:5,
        name:"Premium Kojic Acid Soap by Zuwa Cosmetics, Exfoliates, Smoothens, Lightens - 135 gm",
        prevprice:270,
        image:Soap,
        dispercent:20
    },
    {
      id:6,
      name:"Agraj Mix Dalmoth-400 GM",
      prevprice:200,
      image:Dalmot,
      dispercent:10
    }
  ]
  return (
        
 <div className='w-full flex flex-col'>
        <h1 className='text-2xl'>Flash Sale</h1>

        <div className='flex justify-between items-center border py-3 px-3 h-full w-full bg-white'>
          <h1 className='font-semibold text-orange-600 text-sm'>On Sale Now</h1>
          <h1 className='border border-orange-600 p-2 text-sm font-semibold text-orange-600'>SHOP ALL PRODUCTS</h1>
        </div>

            <div className="grid grid-cols-6 w-fit pb-1">
                {
                    data.map((item) => {
                      const priceafterdis =Math.floor( 
          item.prevprice - (item.prevprice * item.dispercent) /100);
                        return (
                            <Card image={item.image} name={item.name.slice(0,45)+"..."} prevprice={`Rs.${item.prevprice}`} dispercent={`-${item.dispercent}%`} priceafterdis={`Rs.${priceafterdis}`}  />
                        )
                    })
                }
            </div>
        </div>
    
  )
}

export default FlashSale