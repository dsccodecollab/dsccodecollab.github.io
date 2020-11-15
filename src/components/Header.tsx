import React from 'react'
import fire from '../config'
import { useHistory, Link } from 'react-router-dom'
import '../styles/header.css'

const Header = () => {
  const history = useHistory()

  const logout = () => {
    fire
      .auth()
      .signOut()
      .then(() => {
        history.push('/')
        window.location.assign('/join')
      })
      .catch((err) => {
        console.log('An error occured', err)
      })
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow-sm md:px-24">
      <Link className="navbar-brand text-center" to="/">
        <img
          src="https://cdn.discordapp.com/attachments/764129322088267837/770685331305005096/The_coding_culture-05.png"
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
            <Link className="nav-link btn px-4 mx-4 font-circular-std" to="/about">About</Link>
          </li>
          {fire.auth().currentUser != null ? (
            <li className="nav-item navs my-3">
              <button onClick={() => logout()} className="nav-link px-3 logout btn btn-warning">Logout</button>
            </li>
          ) : (
            <li className="nav-item navs my-3">
              <Link className="nav-link btn px-4 font-circular-std" to="/join">Get Started</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>

  )
}

export default Header
