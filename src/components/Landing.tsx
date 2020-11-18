import React from 'react'
import '../styles/landing.css'
import CodeEditor from './CodeEditor'

const Landing = () => {
  return (
    <div className="h-full flex flex-col overflow-auto">
      <div className="md:grid md:grid-cols-2 flex flex-col flex-grow justify-center pb-20 pt-12">
        <div className="flex flex-col justify-center items-start px-12 m-2 sm:pl-12 md:pl-24 xl:pl-48">
          <h1 className="text-4xl sm:text-4xl font-deepblue font-bold font-circular-std text-left">The Coding Culture</h1>
          <p className="sm:pt-8 pt-4 text-lg sm:pb-32 font-thin pb-4 font-circular-std leading-relaxed text-left text-white">
            The biggest student-run coding community in India. The Coding Culture aims to be a community that is consistent in providing resources, conducting sessions, and enables interaction among students of different domains and capabilities. We will also be organizing regular contests wherein one can apply their learning and thus understand what things do they need to work on.
          </p>
          <button
            className="flex text-white items-center px-4 py-2 w-auto h-14 bg-indigo-600 rounded-full hover:bg-indigo-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none font-bold"
            onClick={ (e) => window.open('https://discord.gg/nP4EYkF') }
          >
            <i className="fab fa-discord fa-2x"></i>&nbsp;
            <span>&nbsp;Join Our Community</span>
          </button>
        </div>
        <div className="flex flex-col hidden md:flex justify-center">
          <div className="sm:pb-32 sm:pr-8 md:pr-12 lg:pr-32">
            <CodeEditor />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
