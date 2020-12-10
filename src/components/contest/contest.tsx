import React, { useEffect, useState } from 'react'
import fire from '../../config'
import ContestType from '../../types/Contest'
import ContestItem from './contestItem'
import '../../styles/contest.css'

const Contest = () => {
  const [contests, setContests] = useState<ContestType[]>([])
  useEffect(() => {
    getContests()
  }, [])

  const getContests = async () => {
    const contestDoc = await fire.firestore().collection('resources').doc('contests').get()
    const data = contestDoc.data()
    setContests(data?.contests.reverse())
  }

  return (

    <div className='h-min-full container'>
      <h1 className="text-4xl sm:text-4xl font-deepblue font-bold font-circular-std text-center">Contests</h1>

      {contests.map((contest) => (
        <ContestItem contest={contest} key={contest.name}/>
      ))}
    </div>

  )
}

export default Contest
