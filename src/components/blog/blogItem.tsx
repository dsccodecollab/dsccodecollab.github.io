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

    <div className="p-10 container mx-auto">
      <div className="md:flex container mx-auto justify-center w-8/12 grid">
        <img className="lg:h-auto lg:w-7/12 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" src={blog.thumbnail} alt="" />
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <div className="mb-2">
              <span className="px-2 text-sm bg-orange-300 rounded-full mr-2">Hot</span>
              <span className="px-2 bg-red-300 text-xs rounded-full">New</span>
            </div>

            <div className="text-gray-900 font-bold text-xl mb-2">{blog.title}</div>
            <p className="text-gray-700 text-base">{parse(trimmedString)}</p>
          </div>
          <div className="flex justify-between">
            <div className="flex">
              <div className="">

                <p className="text-gray-900 leading-none">{blog.author}</p>
                <p className="text-gray-600">{Moment(blog.pubDate).format('DD MMMM, YYYY')}</p>
              </div>
            </div>
            <div className="flex">
              <button className="btn btn-info" onClick={ (e) => window.open(`${blog.guid}`) }>Read more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogItem
