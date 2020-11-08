import React from 'react'
import fire from '../config'
import { useHistory, Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Home from '@material-ui/icons/Home'
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar'
import InfoIcon from '@material-ui/icons/Info'
import PersonAddIcon from '@material-ui/icons/PersonAdd'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'

const useStyles = makeStyles({
  root: {
    width: 500
  }
})

const Header = () => {
  const history = useHistory()

  const logout = () => {
    fire.auth().signOut()
      .then(() => {
        history.push('/')
      })
      .catch((err) => {
        console.log('An error occured', err)
      })
  }

  const classes = useStyles()
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
          <Link className="navbar-brand navs px-3 py-2" to="/">The Coding Culture</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="mr-auto"></div>
            <ul className="navbar-nav px-3">
              <li className="nav-item navs">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item navs">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item navs">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
              {
                fire.auth().currentUser != null
                  ? <li className="nav-item navs">
                    <button onClick={() => logout()} className="nav-link logout">Logout</button>
                  </li>
                  : <li className="nav-item navs">
                    <Link className="nav-link" to="/join">Join</Link>
                  </li>
              }

            </ul>

          </div>
        </nav>
      </div>
      <div
        className="d-block d-sm-none"
        style={{
          position: 'fixed',
          width: '100%',
          overflow: 'scroll',
          bottom: '0',
          zIndex: 1
        }}
      >
        {
          fire.auth().currentUser != null
            ? <BottomNavigation value={value} onChange={handleChange} className={classes.root} >
              <BottomNavigationAction label="Home" value="home" icon={<Home />} />
              <BottomNavigationAction label="Contact" value="contact" icon={<PermContactCalendarIcon />} />
              <BottomNavigationAction label="Logout" value="logout" icon={<ExitToAppIcon />} />
              <BottomNavigationAction label="About" value="about" icon={<InfoIcon />} />
            </BottomNavigation>
            : <BottomNavigation value={value} onChange={handleChange} className={classes.root} >
              <BottomNavigationAction label="Home" value="home" icon={<Home />} />
              <BottomNavigationAction label="Contact" value="contact" icon={<PermContactCalendarIcon />} />
              <BottomNavigationAction label="Join" value="join" icon={<PersonAddIcon />} />
              <BottomNavigationAction label="About" value="about" icon={<InfoIcon />} />
            </BottomNavigation>
        }

      </div>
    </>
  )
}

export default Header
