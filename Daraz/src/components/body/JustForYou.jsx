import React from 'react'
import CardJustForYou from './CardJustForYou'
import HandGripper from  '../../Images/Gripper.jpg'
import Airpods from '../../Images/Airpods.jpg'
import Basket from  '../../Images/Basket.jpg'
import Dalmot from '../../Images/Dalmoth.jpg'
import Leggins from '../../Images/Leggins.jpg'
import Soap from '../../Images/Soap.jpg'


const JustForYou = () => {

  const data=[
    {
      id:1,
      name: "Hand Wrist Power Grip Strength Training Fitness Gym Exerciser Gripper",
      image:HandGripper,
      price:349,
      dispercent:86
    },
    {
      id:2,
      name:"110L Foldable Blanket Storage Bags Storage Containers for Organizing Bedroom Closet Clothing Comforter",
      image:Basket,
      price:500,
      dispercent:50
    },
    {
      id:3,
      name:"Warm Winter Fake Skin Transparent High Waist Stretchy Leggings Stockings For Women | Winter Stocking For Women",
      image:Leggins,
      price:1125,
      dispercent:59
    },
    {
      id:4,
      name:"TWS Wireless Bluetooth Airpods Charging Case Super Sound Premium Pro 2 With Free Silicon Case",
      image:Airpods,
      price:1400,
      dispercent:71
    },
    {
        id:5,
        name:"Premium Kojic Acid Soap by Zuwa Cosmetics, Exfoliates, Smoothens, Lightens - 135 gm",
        price:270,
        image:Soap,
        dispercent:20
    },
    {
      id:6,
      name:"Agraj Mix Dalmoth-400 GM",
      price:200,
      image:Dalmot,
      dispercent:10
    },
    {
        id:1,
        name: "Hand Wrist Power Grip Strength Training Fitness Gym Exerciser Gripper",
        image:HandGripper,
        price:349,
        dispercent:86
      },
      {
        id:2,
        name:"110L Foldable Blanket Storage Bags Storage Containers for Organizing Bedroom Closet Clothing Comforter",
        image:Basket,
        price:500,
        dispercent:50
      },
      {
        id:3,
        name:"Warm Winter Fake Skin Transparent High Waist Stretchy Leggings Stockings For Women | Winter Stocking For Women",
        image:Leggins,
        price:1125,
        dispercent:59
      },
      {
        id:4,
        name:"TWS Wireless Bluetooth Airpods Charging Case Super Sound Premium Pro 2 With Free Silicon Case",
        image:Airpods,
        price:1400,
        dispercent:71
      },
      {
          id:5,
          name:"Premium Kojic Acid Soap by Zuwa Cosmetics, Exfoliates, Smoothens, Lightens - 135 gm",
          price:270,
          image:Soap,
          dispercent:20
      },
      {
        id:6,
        name:"Agraj Mix Dalmoth-400 GM",
        price:200,
        image:Dalmot,
        dispercent:10
      },
      {
        id:1,
        name: "Hand Wrist Power Grip Strength Training Fitness Gym Exerciser Gripper",
        image:HandGripper,
        price:349,
        dispercent:86
      },
      {
        id:2,
        name:"110L Foldable Blanket Storage Bags Storage Containers for Organizing Bedroom Closet Clothing Comforter",
        image:Basket,
        price:500,
        dispercent:50
      },
      {
        id:3,
        name:"Warm Winter Fake Skin Transparent High Waist Stretchy Leggings Stockings For Women | Winter Stocking For Women",
        image:Leggins,
        price:1125,
        dispercent:59
      },
      {
        id:4,
        name:"TWS Wireless Bluetooth Airpods Charging Case Super Sound Premium Pro 2 With Free Silicon Case",
        image:Airpods,
        price:1400,
        dispercent:71
      },
      {
          id:5,
          name:"Premium Kojic Acid Soap by Zuwa Cosmetics, Exfoliates, Smoothens, Lightens - 135 gm",
          price:270,
          image:Soap,
          dispercent:20
      },
      {
        id:6,
        name:"Agraj Mix Dalmoth-400 GM",
        price:200,
        image:Dalmot,
        dispercent:10
      },
      {
          id:1,
          name: "Hand Wrist Power Grip Strength Training Fitness Gym Exerciser Gripper",
          image:HandGripper,
          price:349,
          dispercent:86
        },
        {
          id:2,
          name:"110L Foldable Blanket Storage Bags Storage Containers for Organizing Bedroom Closet Clothing Comforter",
          image:Basket,
          price:500,
          dispercent:50
        },
        {
          id:3,
          name:"Warm Winter Fake Skin Transparent High Waist Stretchy Leggings Stockings For Women | Winter Stocking For Women",
          image:Leggins,
          price:1125,
          dispercent:59
        },
        {
          id:4,
          name:"TWS Wireless Bluetooth Airpods Charging Case Super Sound Premium Pro 2 With Free Silicon Case",
          image:Airpods,
          price:1400,
          dispercent:71
        },
        {
            id:5,
            name:"Premium Kojic Acid Soap by Zuwa Cosmetics, Exfoliates, Smoothens, Lightens - 135 gm",
            price:270,
            image:Soap,
            dispercent:20
        },
        {
          id:6,
          name:"Agraj Mix Dalmoth-400 GM",
          price:200,
          image:Dalmot,
          dispercent:10
        }
  ]
  return (
        
 <div className='w-full flex flex-col mt-5'>
        <h1 className='text-2xl'>Just For You</h1>

            <div className="grid grid-cols-6 w-fit pb-1 gap-x-2 gap-y-4">
                {
                    data.map((item) => {
                        return (
                            <CardJustForYou image={item.image} name={item.name.slice(0,42)+"..."} price={`Rs.${item.price}`} dispercent={`-${item.dispercent}%`}  />
                        )
                    })
                }
            </div>
            <button className='w-fit border border-cyan-600 text-cyan-700 px-40 py-2 self-center mt-10'>LOAD MORE</button>
        </div>
    
  )
}

export default JustForYou 