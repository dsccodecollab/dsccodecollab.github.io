import React from 'react'
import fire from '../config'
import { useHistory, Link } from 'react-router-dom'
import Home from '@material-ui/icons/Home'
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar'
import InfoIcon from '@material-ui/icons/Info'
import PersonAddIcon from '@material-ui/icons/PersonAdd'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
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
  const [value, setValue] = React.useState('home')

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue)
    if (newValue === 'logout') {
      logout()
    }
    history.push(`/${newValue}`)
  }

  return (
    <>
      <div className="container-fluid header mt-4 py-2 d-none d-sm-block">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <Link className="navbar-brand px-3 py-2 my-3" to="/">
            <img
              src="https://cdn.discordapp.com/attachments/764129322088267837/770685331305005096/The_coding_culture-05.png"
              alt="the coding culture"
              height="64"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="mr-auto"></div>
            <ul className="navbar-nav px-3">
              <li className="nav-item navs my-3">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item navs my-3">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item navs my-3">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
              {fire.auth().currentUser != null ? (
                <li className="nav-item navs my-3">
                  <button onClick={() => logout()} className="nav-link logout">Logout</button>
                </li>
              ) : (
                <li className="nav-item navs my-3">
                  <Link className="nav-link" to="/join">Join</Link>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </div>
      <div className="d-block d-sm-none bottom-nav">
        <BottomNavigation value={value} onChange={handleChange}>
          <BottomNavigationAction label="Home" value="home" icon={<Home />} />
          <BottomNavigationAction
            label="Contact"
            value="contact"
            icon={<PermContactCalendarIcon />}
          />
          {fire.auth().currentUser != null ? (
            <BottomNavigationAction
              label="Logout"
              value="logout"
              icon={<ExitToAppIcon />}
            />
          ) : (
            <BottomNavigationAction
              label="Join"
              value="join"
              icon={<PersonAddIcon />}
            />
          )}
          <BottomNavigationAction
            label="About"
            value="about"
            icon={<InfoIcon />}
          />
        </BottomNavigation>
      </div>
    </>
  )
}

export default Header
