import React from 'react'
import logo from '../assets/img/logo512.png'
import '../styles/NotFound.css'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
      <div className='Not__page'>
        <div className='Not__section'>
          <p>4</p>
          <Link to="/" onClick={() => window.scrollTo(0, 0) }>
            <img src={logo} alt="TCC_Logo" />
          </Link>
          <p>4</p>
        </div>
        <span>
          <strong>Page not Found!!</strong>
        </span>
      </div>
    </>
  )
}

export default NotFound
