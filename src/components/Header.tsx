import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/header.css'

const Header = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg navbar-light shadow-sm md:px-24">
      <Link className="navbar-brand text-center" to="/">
        <img
          src="/logo512.png"
          alt="the coding culture"
          className="w-16 h-auto"
          style={{ filter: 'invert(1)' }}
        />
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon text-white"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <div className="mr-auto"></div>
        <ul className="navbar-nav px-3 justify-content-end">
          <li className="nav-item navs my-3">
            <Link className="nav-link btn px-4 font-circular-std" to="/contest">Contests</Link>
          </li>
          <li className="nav-item navs my-3">
            <Link className="nav-link btn px-4 font-circular-std" to="/webinar">Webinars</Link>
          </li>
          <li className="nav-item navs my-3">
            <Link className="nav-link btn px-4 mx-4 font-circular-std" to="/about">Organizers</Link>
          </li>
          <li className="nav-item navs my-3">
            <Link className="nav-link btn px-4 font-circular-std" to="/join">Register</Link>
          </li>
          {/* uncomment when enable login */}
          {/* <li className="nav-item navs my-3">
            <Link className="nav-link btn px-4 font-circular-std" to="/login">Login</Link>
          </li> */}
        </ul>
      </div>
    </nav>

  )
}

export default Header
