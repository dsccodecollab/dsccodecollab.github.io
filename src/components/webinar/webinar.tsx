import React, { useEffect, useState } from 'react'
import fire from '../../config'
import Webinarype from '../../types/Webinar'
import WebinarItem from './webinarItem'
import '../../styles/contest.css'

const Webinar = () => {
  const [webinars, setWebinars] = useState<Webinarype[]>([])
  useEffect(() => {
    getWebinars()
  }, [])

  const getWebinars = async () => {
    const webinarDoc = await fire.firestore().collection('resources').doc('webinars').get()
    const data = webinarDoc.data()
    setWebinars(data?.webinars.reverse())
  }

  return (

    <div className='h-min-full container'>
      <h1 className="text-4xl sm:text-4xl font-deepblue font-bold font-circular-std text-center">Webinars</h1>

      {webinars.map((webinar) => (
        <WebinarItem webinar={webinar} key={webinar.name}/>
      ))}
    </div>

  )
}

export default Webinar
