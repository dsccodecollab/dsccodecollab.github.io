import React from 'react'
import BlogType from '../../types/Blog/BlogItem'
import '../../styles/contest.css'
import '../../styles/blog.css'
import parse from 'html-react-parser'
import Moment from 'moment'

const BlogItem = ({ blog }: { blog: BlogType }) => {
  const maxLength = 200 // maximum number of characters to extract
  // trim the string to the maximum length
  const start = blog.description.indexOf('<p>')
  let trimmedString = blog.description.substr(start, maxLength)
  // re-trim if we are in the middle of a word
  trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(' ')))
  trimmedString = trimmedString.concat('...')

  return (
    <div className="p-10 col-lg-6 mx-auto">
      <div className="h-100 d-flex row mx-auto justify-center grid">
        <img className="thumb d-none d-sm-block lg:h-auto col-4 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden p-0" src={blog.thumbnail} alt={blog.title} />
        <div className="col-8 border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <div className="categories mb-2">
              {blog.categories.map((category) => (
                <span className="px-2 text-sm bg-orange-300 rounded-full mx-1 d-inline-block" key={category}>{category}</span>
              ))}
            </div>

            <div className="text-gray-900 font-bold text-xl mb-2"><a href={blog.guid}>{blog.title}</a></div>
            <p className="text-gray-700 text-base">{parse(trimmedString)}</p>
          </div>
          <div className="row justify-between">
            <div className="col-auto">
              <div className="">

                <p className="text-gray-900 leading-none">{blog.author}</p>
                <p className="text-gray-600">{Moment(blog.pubDate).format('DD MMMM, YYYY')}</p>
              </div>
            </div>
            <div className="col-auto">
              <a className="btn btn-info  float-right" href={blog.guid}>Read more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogItem
