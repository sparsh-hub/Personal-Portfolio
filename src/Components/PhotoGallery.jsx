import React from 'react'
import { gallery } from '../Store'

const PhotoGallery = () => {
  return (
    <div className='text-white bg-[#023020] text-4xl grid grid-cols-4 h-110 gap-10'>
     
      {gallery.map((card,index) => {
        return(
        <div key={index} className='' >
          <img className='w-60 mt-20 ml-20 border-0 rounded-3xl h-60' src={card.link} alt="" />
        </div>
        )
      })}
    </div>
  )
}

export default PhotoGallery