import React from 'react'
import '../styles/landing.css'
import CodeEditor from './CodeEditor'

const Landing = () => {
  return (
    <div className="welcome-tab">
      <div className="row">
        <div className="col-12">
          <p className="text-center tag-line">The Biggest Student-run coding community of India</p>
          <CodeEditor />
        </div>
      </div>
    </div>
  )
}

export default Landing
