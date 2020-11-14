import React from 'react'
import Register from './Register'
import '../styles/Authenticate.css'
import Header from './Header'

const Authenticate = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="container authenticate mt-5" style={{ zIndex: 100 }}>
        <div className="row">
          <div className="col-sm-12 col-md-6 left-panel text-center py-5 px-5">
            <img
              src="https://cdn.discordapp.com/attachments/764129322088267837/770685331305005096/The_coding_culture-05.png"
              alt="the coding culture"
              height="150"
            />
            <p className="alternate text-center mt-2 text-wrap font-circular-std">Register for upcoming contests <br /> and get notified first</p>
          </div>
          <div className="col-sm-12 col-md-6 py-4 px-5">
            <Register />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Authenticate
