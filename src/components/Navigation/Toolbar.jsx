import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Toolbar() {

  const location = useLocation()

  const navitem = [
    { title: 'home', path: '/' },
    { title: 'contact', path: '/Contact' },
    { title: 'Location', path: '/Location' },
    { title: 'about', path: '/About' }
  ]
  return (
    <div className=' bg-blue-500 p-10.5 shadow-2xl flex  justify-between py-10  m-2xl'>
      <div className=' text-white'>Training</div>
      <div className='flex gap-6 '>
        {
          navitem.map((val, i) => {
            return (
              <div>
                <Link className={`capitalize ${location.pathname == val.path ? "text-red-900" : "text-white"}`} key={i} to={val.path}>
                  {val.title}
                </Link>
                <div className={`h-1 bg-white ${location.pathname==val.path ? 'w-full':'w-0'} transition-all duration-700 delay-75 ease-in-out`}>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Toolbar