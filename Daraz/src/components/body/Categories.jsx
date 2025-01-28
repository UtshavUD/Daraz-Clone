import React from 'react'
import HandGripper from  '../../Images/Gripper.jpg'
import Airpods from '../../Images/Airpods.jpg'
import Basket from  '../../Images/Basket.jpg'
import Dalmot from '../../Images/Dalmoth.jpg'
import Leggins from '../../Images/Leggins.jpg'
import Soap from '../../Images/Soap.jpg'
import CardCategory from './CardCategory'


const FlashSale = () => {

  const data=[
    {
      id:1,
      name: "Hand-Gripper",
      image:HandGripper,
      prevprice:349,
      dispercent:86
    },
    {
      id:2,
      name:"Blanket-Bag",
      image:Basket,
      prevprice:500,
      dispercent:50
    },
    {
      id:3,
      name:"Leggings",
      image:Leggins,
      prevprice:1125,
      dispercent:59
    },
    {
      id:4,
      name:"Airpods",
      image:Airpods,
      prevprice:1400,
      dispercent:71
    },
    {
        id:5,
        name:"Premium-Soap",
        prevprice:270,
        image:Soap,
        dispercent:20
    },
    {
      id:6,
      name:"Mix-Dalmoth",
      prevprice:200,
      image:Dalmot,
      dispercent:10
    },
    {
        id:7,
        name:"Mix-Dalmoth",
        prevprice:200,
        image:Dalmot,
        dispercent:10
      },
      {
        id:8,
        name:"Mix-Dalmoth",
        prevprice:200,
        image:Dalmot,
        dispercent:10
      },
      {
        id:1,
        name: "Hand-Gripper",
        image:HandGripper,
        prevprice:349,
        dispercent:86
      },
      {
        id:2,
        name:"Blanket-Bag",
        image:Basket,
        prevprice:500,
        dispercent:50
      },
      {
        id:3,
        name:"Leggings",
        image:Leggins,
        prevprice:1125,
        dispercent:59
      },
      {
        id:4,
        name:"Airpods",
        image:Airpods,
        prevprice:1400,
        dispercent:71
      },
      {
          id:5,
          name:"Premium-Soap",
          prevprice:270,
          image:Soap,
          dispercent:20
      },
      {
        id:6,
        name:"Mix-Dalmoth",
        prevprice:200,
        image:Dalmot,
        dispercent:10
      },
      {
          id:7,
          name:"Mix-Dalmoth",
          prevprice:200,
          image:Dalmot,
          dispercent:10
        },
        {
          id:8,
          name:"Mix-Dalmoth",
          prevprice:200,
          image:Dalmot,
          dispercent:10
        }
  ]
  return (
        
 <div className='w-full flex flex-col mt-5'>
        <h1 className='text-2xl py-1'>Categories</h1>

            <div className="grid grid-cols-8 w-full pb-1">
                {
                    data.map((item) => {
                    
                        return (
                            <CardCategory image={item.image} name={item.name} />
                        )
                    })
                }
            </div>
        </div>
    
  )
}

export default FlashSale