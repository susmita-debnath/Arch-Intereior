import React from 'react'
import Header from '../components/Header'
import "../CSS/Dashboard.css"
import image from "../Assets/Images/quote_image.jpg"


const Dashboard = () => {
  return (
    <div className='Dashboard'>
      <Header></Header>
      <div className='Quote' >
        <img src={image}  alt="" >
          

          </img>


      </div>


    </div>
    
  )

}

export default Dashboard