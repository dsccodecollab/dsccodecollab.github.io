import React from 'react'
// import Component1 from './compenent1'
// import ExampleType from '../types/ExampleType'
import Header from './Header'
import '../styles/App.css'

const App = () => {
  // const prop: ExampleType = {
  //   id: 12345,
  //   name: 'some name',
  //   obj: [
  //     {
  //       num: 1,
  //       somethings: ['a', 'b', 'c']
  //     },
  //     {
  //       num: 2,
  //       somethings: ['d', 'e', 'f']
  //     },
  //     {
  //       num: 3,
  //       somethings: ['g', 'h', 'i']
  //     }
  //   ]
  // }

  return (
    <div
      className="container-fluid"
      style={{ width: '95%' }}
    >
      <Header />
      <div className="jumbotron text-center mt-4 welcome-tab">
        <p className="welcome">Welcome to The Code Culture</p>
        <h1 className="brand-heading">Talk is cheap, show me the code</h1>
      </div>
    </div>
  )
}

export default App
