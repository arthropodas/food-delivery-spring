import React from 'react'
import Carousal from '../schema/Carousal'

const CarousalItem = ({image, title}: Carousal) => {
    return (
        <div className='flex flex-col justify-center items-center max-[] h-300 object-cover'>
        <img src={image} alt={title}/>
        </div>
    )
}

export default CarousalItem