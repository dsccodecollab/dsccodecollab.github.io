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

    <div
      className="container"
    >
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link className="navbar-brand px-3 py-2 my-3 text-center tcc-logo rounded-circle" to="/">
          <img
            src="https://cdn.discordapp.com/attachments/764129322088267837/770685331305005096/The_coding_culture-05.png"
            alt="the coding culture"
            height="64"
          />
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="mr-auto"></div>
          <ul className="navbar-nav px-3 justify-content-end">
            <li className="nav-item navs my-3">
              <Link className="nav-link btn btn-outline-warning px-4 mx-4" style={{ color: '#fff', letterSpacing: '2px' }} to="/team">Team</Link>
            </li>
            {fire.auth().currentUser != null ? (
              <li className="nav-item navs my-3">
                <button onClick={() => logout()} className="nav-link px-3 logout btn btn-warning">Logout</button>
              </li>
            ) : (
              <li className="nav-item navs my-3">
                <Link className="nav-link btn btn-warning px-4" to="/join">Get Started</Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>

  )
}

export default Header
