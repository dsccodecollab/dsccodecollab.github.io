import React from 'react'

function Header () {
  return (
    <div className=" container-fluid header mt-4 py-2">
      <nav className="navbar navbar-expand-lg navbar-light ">
        <a className="navbar-brand navs px-3 py-2" href="/">The Coding Culture</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="mr-auto"></div>
          <ul className="navbar-nav px-3">
            <li className="nav-item navs">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item navs">
              <a className="nav-link" href="/about">About</a>
            </li>
            <li className="nav-item navs">
              <a className="nav-link" href="/contact">Contact</a>
            </li>
            <li className="nav-item navs">
              <a className="nav-link" href="/join">Register/Login</a>
            </li>
          </ul>

        </div>
      </nav>
    </div>
  )
}

export default Header
