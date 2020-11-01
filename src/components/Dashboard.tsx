import React from 'react'
import fire from '../config'
function Dashboard () {
  return (
    <div className="jumbotron text-center mt-4">
      <h1>Welcome {fire.auth().currentUser?.email}!</h1>
      <p>The server is under maintanance</p>
    </div>
  )
}

export default Dashboard
