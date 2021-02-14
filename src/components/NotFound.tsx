import React from 'react'
import logo from '../assets/img/logo512.png'
import '../styles/NotFound.css'

const NotFound = () => {
  return (
    <>
      <div className='Not__page'>
        <div className='Not__section'>
          <p>4</p>
          <img src={logo} alt="TCC_Logo" />
          <p>4</p>
        </div>
        <span>
          <p>Page not Found!!</p>
        </span>
      </div>
    </>
  )
}

export default NotFound
