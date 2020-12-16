import React, { useEffect, useState } from 'react'
import BlogsType from '../../types/Blog/Blogs'
import BlogItem from './blogItem'
import '../../styles/contest.css'
import { BLOG_JSON_URL } from '../../config'

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
      <h1 className="text-4xl sm:text-4xl font-deepblue font-bold font-circular-std text-center">Blogs</h1>

      <div className='my-5 row'>
        {blogs && blogs.items.map((blog) => (
          <BlogItem blog={blog} key={blog.guid} />
        ))}
      </div>

    </div>

  )
}

export default Blog
