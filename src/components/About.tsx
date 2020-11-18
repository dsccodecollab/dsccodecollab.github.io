import React from 'react'
import '../styles/About.css'
import Header from './Header'

function About () {
  return (
    <div className="h-full flex flex-col overflow-auto">
      <Header />
      <div className="md:grid md:grid-cols-2 flex flex-col flex-grow justify-center">
        <div className="flex flex-col justify-center items-end px-12 m-2 sm:pl-12 md:pl-24 xl:pl-48">
          <h1 className="text-4xl sm:text-4xl font-deepblue font-bold font-circular-std text-right">The Coding Culture</h1>
          <p className="sm:pt-8 pt-4 text-lg sm:pb-32 font-thin pb-12 font-circular-std leading-relaxed text-right text-white">
            The biggest student-run coding community in India. The Coding Culture aims to be a community that is consistent in providing resources, conducting sessions, and enables interaction among students of different domains and capabilities. We will also be organizing regular contests wherein one can apply their learning and thus understand what things do they need to work on.
          </p>
        </div>
        <div className="flex flex-col md:flex justify-center">
          <div className="sm:pb-32 sm:pr-8 md:pr-12 lg:pr-32">
            <iframe title="0" src="https://www.google.com/maps/d/embed?mid=1ugNfaVWltiMgtNoIl2f_uwdAzcgDLizO&hl=en" frameBorder="0" style={{ border: '0' }} width="600" height="450" className="map"></iframe>

          </div>
        </div>
      </div>
    </div>
    // <div className="container text-center">
    //   <Header />
    //   <iframe src="https://www.google.com/maps/d/embed?mid=1ugNfaVWltiMgtNoIl2f_uwdAzcgDLizO&hl=en" frameBorder="0" style={{ border: '0' }} width="800" height="500" className="map"></iframe>
    // </div>
  )
}

export default About
