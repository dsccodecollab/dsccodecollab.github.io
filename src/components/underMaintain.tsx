import React from 'react'
import gif from '../assets/img/maintain1.gif'
import '../styles/underMaintain.css'

const underMaintain = () => {
  return (
    <>
      <div className="Maintain__page">
        <div className="image__main">
          <img src={gif} alt="maintain pic"/>
        </div>
        <span>
          <strong>Under Maintenance</strong>
        </span>
      </div>
    </>
  )
}

export default underMaintain
