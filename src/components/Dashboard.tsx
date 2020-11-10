import React from 'react'
import fire from '../config'

const Dashboard = () => {
  return (
    <div className="text-center mt-4">
      <h1>Welcome {fire.auth().currentUser?.email}!</h1>
      <p>The server is under maintanance</p>
    </div>
  )
}

export default Dashboard
