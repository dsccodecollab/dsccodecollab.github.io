import React from 'react'
import '../styles/About.css'

function About () {
  return (
    <div>
      <div className="justify-center">
        <h1 className="text-4xl sm:text-4xl font-deepblue font-bold font-circular-std text-center">The Coding Culture</h1>
        <p className="sm:pt-8 p-4 text-lg sm:pb-32 font-thin pb-4 font-circular-std leading-relaxed text-center text-white">
            &quot;Alone we can do so little; together we can do so much.&quot;
        </p>
        <div className="flex justify-center">
          <iframe title="0" src="https://www.google.com/maps/d/u/0/embed?mid=1ugNfaVWltiMgtNoIl2f_uwdAzcgDLizO" frameBorder="0" style={{ border: '0' }} width="800" height="500" className="map"></iframe>
        </div>
      </div>
    </div>
  )
}

export default About
