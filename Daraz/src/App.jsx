import React from 'react'
import Navbar from './components/global/Navbar'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ContentPage from './components/body/ContentPage';


const App = () => {
  return (
    <div className='bg-gray-100'>
      <Navbar/>
    <ContentPage/>
    </div>

  )
}

export default App