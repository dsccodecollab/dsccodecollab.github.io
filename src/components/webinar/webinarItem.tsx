import React from 'react'
import WebinarType from '../../types/Webinar'
import '../../styles/contest.css'

const WebinarItem = ({ webinar }: { webinar: WebinarType }) => {
  const now = new Date().getTime() / 1000
  return (

    <div className='my-5 row'>
      <div className={`col-md-${webinar.links.length === 1 ? '8' : '12'} pl-5`}>
        <span>
          <h2 className="text-left mb-4 title text-white d-inline">{webinar.name} </h2>
          {(webinar.startTime.seconds <= now && webinar.endTime.seconds >= now) ? (<h3 className="d-inline live text-white font-circular-std"> • LIVE</h3>) : ''}
        </span>
        <p className="text-white mb-3">{webinar.description}</p>
      </div>
      {webinar.links.map((link) => (
        <div className="col-md-4" key={link.name}>
          {webinar.links.length === 0 ? '' : <a href={link.link} target='_blank' rel='noopener noreferrer'><h3 className='text-white text-center mb-2 font-circular-std'>{link.name}</h3></a>}
          <div className='iframe-container'>
            <iframe title={link.name} className='iframe' src={link.embed} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>
          </div>
        </div>
      ))}
    </div>

  )
}

export default WebinarItem
