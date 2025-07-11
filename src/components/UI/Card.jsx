import React from 'react'
import { useNavigate } from 'react-router-dom'  

function Cards({title, description, image}){
  const navigate = useNavigate();
  return (
    <div className='grid gap-2 shadow-5-xl border border-gray-200 rounded-lg hover:shadow-2xl transition-all duration-500 ease-in-out'>
        <img src={image} className='h-72 mx-auto'/>
        <div className='p-4 flex flex-col gap-4'>
            <h1 className='text-x1 font-semibold capatilize'>{title}</h1>
      <div className='line-clamp-3'>{description}</div>

      <div onClick={()=>{
        navigate(`/card/${title}`, )
      }} className='border border-blue-400 w-fit text-blue-400 h-fit px-10 py-2 rounded-md'>Read More</div>
      </div>
    </div>
  )
}

export default Cards
