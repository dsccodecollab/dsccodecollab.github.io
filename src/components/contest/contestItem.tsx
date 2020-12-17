import React from 'react'
import ContestType from '../../types/Contest'
import '../../styles/contest.css'

const ContestItem = ({ contest }: { contest: ContestType }) => {
  return (

    <div className='my-5 row'>
      <div className="col-md-4">
        <img src={contest.img} alt={contest.name} />
      </div>
      <div className="col-md-8 pl-5">
        <h2 className="text-left mb-4 title text-white">{contest.name}</h2>
        <p className="text-white mb-3">{contest.description}</p>
        <a href={contest.link} className="orange-button" target="_blank" rel="noopener noreferrer">
          {
            contest.status
            ?
            <button className="orange-button px-5 py-2">Register</button>
            :
            <button className="orange-button px-5 py-2">Try contest</button> 
          }
        </a>
      </div>
    </div>

  )
}

export default ContestItem
