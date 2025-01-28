import React from "react";
import Slider from "react-slick";
import Img from "../../Images/Slider1.jpg";
import Img1 from "../../Images/Slider2.jpg";
import Img2 from "../../Images/Slider3.jpg";
import Img3 from "../../Images/Slider4.jpg";
import Img4 from "../../Images/Slider5.jpg";
import Img5 from "../../Images/Slider6.jpg";
import Dlogo from '../../Images/Dlogo1.png'
import folder from '../../Images/Folder.jpeg'
import { GoStarFill } from "react-icons/go";
import freedelivery from '../../Images/Freedelivery.png'
import limitededition from '../../Images/Limitedtime.png'
import QR from '../../Images/QRcode.jpg'
import Playstore from '../../Images/Googleplay.jpeg'
import Appstore from '../../Images/Appstore.jpeg'
import flash from '../../Images/FlashSale1.gif'




function AutoPlay() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 200,
    autoplaySpeed: 5000,
    cssEase: "linear",

    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "4px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ul style={{ margin: "0px", padding: "0px" }}> {dots} </ul>
      </div>
    ),
    dotsClass: "slick-dots slick-dots-custom",
  };


  return (
    <div className="grid grid-cols-12 w-full">
      {/* Slider Section */}
      <div className="sm:col-span-10 col-span-12 hover:cursor-grabbing">
        <Slider {...settings}>
          <div>
            <img src={Img} alt="Slider 1" />
          </div>
          <div>
            <img src={Img1}  alt="Slider 2" />
          </div>
          <div>
            <img src={Img2}  alt="Slider 3" />
          </div>
          <div>
            <img src={Img3} alt="Slider 4" />
          </div>
          <div>
            <img src={Img4} alt="Slider 5" />
          </div>
          <div>
            <img src={Img5}  alt="Slider 6" />
          </div>
        </Slider>
      </div>


      {/* Download Section */}
       <div className='col-span-2 w-full h-fit hidden xl:block relative bg-gradient-to-br from-white to-pink-300'>
       
       <div className='flex py-1 items-center justify-start w-full'>
       <img src={Dlogo} className='h-10 bg-transparent w-16 relative'/>
       <h1 className=' relative flex-nowrap text-sm text-orange-800 font-semibold'>Download the App</h1>
       </div>

           <img src={folder} className="px-2"/>
           
           <div className='text-sm w-full text-white absolute top-10 py-3 px-4'>
           <h1 className='text-white font-semibold flex items-end text-[12px]'><GoStarFill/>4.8 Rated</h1>
           
           <div className='flex flex-col items-center gap-3 py-1'>
             <h1 className="font-bold text-[12px]">Download App</h1>
              
              <div className='flex flex-col gap-2'>
               <h1 className='flex gap-2 font-semibold text-[14px]'><img src={freedelivery} className="size-10"/>Free <br/> Delivery</h1>
               <h1 className='flex gap-2 font-semibold text-[14px]'><img src={limitededition} className="size-10"/>Limited <br/> Time</h1>
               </div>
       </div>
       </div>
       
       <div className='flex'>
         <img src={QR} className="size-24 px-2 py-1"/>
       
       <div className='flex flex-col justify-center ml-3 gap-4'>
       <button><img src={Appstore} className="w-[80px] h-[24px] rounded-md"/></button>
       <button><img src={Playstore} className="w-[80px] h-[24px] rounded-md"/></button>
       </div>
       </div>
       
       <h1 className='bg-gradient-to-tr from-white to-pink-200 text-sm h-fit font-semibold px-2 py-2 pb-5'>Download the App Now!</h1>
           </div>
      
      <div className=" grid col-span-12 px-10">
        <button><img src={flash}/></button>
      </div>
           </div>

      
    
  );
}

export default AutoPlay;
