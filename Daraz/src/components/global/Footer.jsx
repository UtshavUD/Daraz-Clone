import React from 'react'
import logo from '../../Images/Dlogo1.png'
import Appstore from '../../Images/Appstore.jpeg'
import Googleplay from '../../Images/Googleplay.jpeg'
import Appgallery from '../../Images/Appgallery.png'

const Footer = () => {
  return (
    <div className='mt-10 mb-5 flex'>
        <div className='flex gap-40 text-purple-900'>
            <span className='flex flex-col gap-1 text-xs'>

            <h1 className='text-lg'>Customer Care</h1>
<div className='flex flex-col items-start'>
            <button>Help Ceenter</button>
            <button>How to Buy</button>
            <button>Returns & Refunds</button>
               <button> Contact Us</button>
</div>
            </span>


            <span className='flex flex-col gap-1 text-xs'>

                <h1 className='text-xl'>Daraz</h1>
<div className='flex flex-col items-start'>
<button>Careers</button>
<button>About Daraz</button>
<button>Daraz Blog</button>
<button>Terms & Conditions</button>
<button>Privacy Policy</button>
<button>Digital Payments</button>
<button>Daraz Customer University</button>
<button>Daraz Affiliate Program</button>
<button>Review & Win</button>
<button>Meet the winners</button>
<button> Daraz  University</button>
<button>Sell on Daraz</button>
<button>Code of Conduct</button>
</div>
                
            </span>
        </div>

        <div className='flex h-fit ml-36 gap-10'>

            <div className='flex items-center self-start gap-3'>
            <img src={logo} className='h-10 w-12 bg-cyan-200 py-2 rounded-md'/>
            <span>
                <h1 className='text-orange-600 text-lg'>Happy Shopping </h1>
                <h1 className='text-purple-950 text-sm font-semibold'>Download App</h1>
            </span>
            </div>

            <span className='grid grid-cols-2 gap-2'>
                <button><img src={Appstore}/></button>
               <button><img src={Googleplay}/></button>
                <button><img src={Appgallery}/></button>
            </span>

        </div>



        
    </div>
  )
}

export default Footer