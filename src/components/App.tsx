import React, { useEffect } from 'react'
import Header from './Header'
import '../styles/App.css'
import Authenticate from './Authenticate'
import Landing from './Landing'
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import Dashboard from './Dashboard'
import fire from '../config'

const App = () => {
  async function IsLoggedIn () {
    try {
      await new Promise((resolve, reject) =>
        fire.auth().onAuthStateChanged(
          user => {
            if (user) {
              console.log(user)
              return true
            } else {
              return false
            }
          }
        )
      )
    } catch (error) {
      return false
    }
  }

  useEffect(() => {
    IsLoggedIn()
  }, [])

  if (fire.auth().currentUser) {
    return (
      <div
        className="container-fluid"
        style={{ width: '95%' }}
      >
        <Header />
        <Switch>
          {
            privateRoutes.map((url, index) => (
              <Route key={index} path={url.path} render={() => <url.component />} />
            ))
          }
        </Switch>
      </div>

    )
  } else {
    return (
      <div
        className="container-fluid"
        style={{ width: '95%' }}
      >
        <Header />
        <Switch>
          {
            publicRoutes.map((url, index) => (
              <Route key={index} path={url.path} render={() => <url.component />} />
            ))
          }
          <Redirect to="/" />
        </Switch>
      </div>
    )
  }
}

const publicRoutes = [
  {
    path: '/join',
    component: Authenticate
  },
  {
    path: '/',
    component: Landing
  }
]

const privateRoutes = [
  {
    path: '/',
    component: Dashboard
  }
]

export default App
