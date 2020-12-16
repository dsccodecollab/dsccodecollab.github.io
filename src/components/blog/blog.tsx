import React, { useEffect, useState } from 'react'
import BlogsType from '../../types/Blog/Blogs'
import BlogItem from './blogItem'
import '../../styles/contest.css'
import { BLOG_JSON_URL } from '../../config'
import { Player } from '@lottiefiles/react-lottie-player'

const Blog = () => {
  const [blogs, setBlogs] = useState<BlogsType>()
  useEffect(() => {
    getBlogs()
  }, [])

  const getBlogs = async () => {
    setBlogs(await (await fetch(BLOG_JSON_URL)).json())
  }

  return (

    <div className='h-min-full container'>
      <div className="flex md:flex-row flex-col mt-12 md:px-20 mb-10">
        <div className="flex flex-col flex justify-center px-6 sm:pt-12 md:px-24">
          <h1 className="text-4xl md:text-5xl font-deepblue font-bold font-circular-std text-left">Blogs</h1>
          <p className="sm:pt-8 text-lg sm:pb-32 font-thin pb-4 font-circular-std leading-relaxed text-left text-white">
            &quot;Blogs allow you to talk about any topic you are interested in and express your opinion&quot;</p>

          <p className="sm:pt-8 text-lg sm:pb-32 font-thin pb-4 font-circular-std leading-relaxed text-left text-white">Our blogs are solely written by our members, sharing their views and knowledge in various fields to help the community.            </p>
          <div>
            <button className="btn btn-warning px-3" onClick={ (e) => window.open('https://medium.com/the-coding-culture') }>
              <i className="fab fa-medium-m mr-2"></i>
                Follow on Medium
            </button>
          </div>
        </div>
        <div className="flex justify-items-center">
          <Player
            loop
            autoplay
            src="https://assets2.lottiefiles.com/packages/lf20_fGseie.json"
            style={{ height: '400px', width: '400px' }}
          >
          </Player>
        </div>
      </div>
      <div className='my-5 row'>
        {blogs && blogs.items.map((blog) => (
          <BlogItem blog={blog} key={blog.guid} />
        ))}
      </div>

    </div>

  )
}

export default Blog
