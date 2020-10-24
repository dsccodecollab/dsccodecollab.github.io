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
    </div>
  )
}

export default App
