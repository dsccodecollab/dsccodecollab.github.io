import React, { useState, useEffect } from 'react'
import { Player } from '@lottiefiles/react-lottie-player'
import fire from '../config'
import CommunityPType from '../types/CommunityPType'

function CommunityPartners () {
  const [modal, setModal] = useState(false)
  const [community, setCommunity] = useState<CommunityPType[]>([])

  useEffect(() => {
    getPartners()
  }, [])

  const getPartners = async () => {
    const Data = await fire.firestore().collection('partners').doc('community-partners').get()
    const data = Data.data()
    setCommunity(data?.cummunity)
  }

  return (
    <div className="container mx-auto">
      <div className="flex md:flex-row flex-col mt-12 md:px-20">
        <div className="flex flex-col flex justify-center px-6 sm:pt-12 md:px-24">
          <h1 className="text-4xl md:text-5xl font-deepblue font-bold font-circular-std text-left">Community Partners</h1>
          <p className="sm:pt-8 text-lg sm:pb-32 font-thin pb-4 font-circular-std leading-relaxed text-left text-white">
                If what we do speaks to you, then we hope you consider joining our movement. Let&apos;s work together and help the coding community grow and thrive. Together we can make it bigger and better than ever before.
          </p>
          <div className="">
            <button className="btn btn-outline-warning mr-3" onClick={() => setModal(!modal)}>
                    Check Brouchre
            </button>
            <button className="btn btn-warning px-8" onClick={ (e) => window.open('https://forms.gle/4wRZpWDWc3YgwzCv8') }>
                    Join Us
            </button>
          </div>

        </div>
        <div className="flex justify-items-center">
          <Player
            loop
            autoplay
            src="https://assets4.lottiefiles.com/packages/lf20_GtqlRg.json  "
            style={{ height: '400px', width: '400px' }}
          >
          </Player>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center px-32 py-10">

        {
          community.map((list, i) => {
            return (
              <div className="w-64 m-4 py-6 rounded-xl bg-current p-4 flex flex-col justify-between leading-normal" key={i}>
                <img className="w-32 h-32 mx-auto rounded-full mb-4 bg-white flex-none bg-cover text-center overflow-hidden" src={list.img} alt="" />
                <p className="mx-2 mt-2 text-center text-lg text-white font-semibold mb-4">{list.name}</p>
                <div className="flex justify-center items-center mt-2">
                  <i className="fab fa-facebook fa-2x mx-2 transition duration-500 ease-in-out transform hover:-translate-y-2 cursor-pointer rounded-full text-blue-800" onClick={ (e) => window.open(`${list.fbLink}`) }></i>
                  <i className="fab fa-twitter fa-2x mx-2 transition duration-500 ease-in-out transform hover:-translate-y-2 text-blue-500 cursor-pointer" onClick={ (e) => window.open(`${list.twLink}`) }></i>
                  <i className="fab fa-linkedin fa-2x mx-2 transition duration-500 ease-in-out transform hover:-translate-y-2 text-blue-600 cursor-pointer" onClick={ (e) => window.open(`${list.liLink}`) }></i>
                </div>
                <div className="flex justify-center items-center mt-3">
                  <i className="fab fa-instagram fa-2x mx-2 transition duration-500 ease-in-out transform hover:-translate-y-2 cursor-pointer rounded-full text-red-400" onClick={ (e) => window.open(`${list.igLink}`) }></i>
                  <i className="fas fa-external-link-alt fa-2x mx-2 transition duration-500 ease-in-out transform hover:-translate-y-2 text-red-600 cursor-pointer" onClick={ (e) => window.open(`${list.webLink}`) }></i>
                </div>
              </div>
            )
          })
        }

      </div>
      {
        modal
          ? <div className="absolute bg-black inset-0 bg-opacity-50 flex justify-center items-center">
            <div className="h-full w-5/6">
              <button className="btn btn-danger absolute md:mt-3 ml-3 py-2 w-32 mt-24" onClick={() => setModal(!modal)}>Close</button>
              <iframe className="fp-iframe" title="Brouchre" src="https://heyzine.com/flip-book/fe3f6050ec.html" style={{ border: '1px solid lightgray', width: '100%', height: '100%' }}></iframe>
            </div>
          </div>
          : null
      }
    </div>
  )
}

export default CommunityPartners
