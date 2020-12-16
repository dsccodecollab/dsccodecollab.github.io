import React from 'react'
import BlogType from '../../types/Blog/BlogItem'
import '../../styles/contest.css'
import parse from 'html-react-parser'
import Moment from 'moment'

const BlogItem = ({ blog }: { blog: BlogType }) => {
  const maxLength = 240 // maximum number of characters to extract
  // trim the string to the maximum length
  let trimmedString = blog.description.substr(0, maxLength)
  // re-trim if we are in the middle of a word
  trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(' ')))

  console.log(Moment(blog.pubDate).toString())

  return (

    <div className='my-5 col-md-4 text-white'>
      <a href={blog.guid}>
        <h2 className="text-left title text-white">{blog.title}</h2>
        <h3 className='mb-4'>{Moment(blog.pubDate).format('DD MMMM, YYYY')}</h3>
        {parse(trimmedString)}
      </a>
    </div>
  )
}

export default BlogItem
