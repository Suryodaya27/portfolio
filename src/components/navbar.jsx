import React from 'react'
import { Link } from 'react-router-dom'
export const Navbar = () => {
  return (
    <div className='text-white navBar px-5 py-5 flex justify-between lg:px-16'>
      <div>
        <h3 className=' font-bold lg:text-2xl'>Suryodaya pandey</h3>
      </div>
      <div>
        <ul className='flex gap-3 lg:gap-12 lg:text-xl'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
        </ul>
      </div>
    </div>
  )
}
