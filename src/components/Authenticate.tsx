import React from 'react'
import Register from './Register'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import '../styles/Authenticate.css'
// import Login from './Login'

const Authenticate = () => {
  return (
    <div className="">
      <div className="container authenticate mt-5 ">
        <div className="row">
          <div className="col-sm-12 col-md-6 left-panel text-center py-5 px-5">
            <img src="/logo512.png" alt="the coding culture" height="150" />
            <p className="alternate text-center mt-2 text-wrap font-circular-std">Register for upcoming contests <br /> and get notified first</p>
          </div>
          <div className="col-sm-12 col-md-6 py-4 px-5">
            <BrowserRouter>
              <Switch>
                {authRoutes.map((url, index) => (
                  <Route
                    key={index}
                    path={url.path}
                    component={() => <url.component />}
                  />
                ))}
                <Redirect to="/" />
              </Switch>
            </BrowserRouter>
          </div>
        </div>
      </div>
    </div>
  )
}

const authRoutes = [
  {
    path: '/join',
    component: Register
  }
  /* uncomment to enable login
  {
    path: "/login",
    component: Login,
  }, */
]

export default Authenticate
