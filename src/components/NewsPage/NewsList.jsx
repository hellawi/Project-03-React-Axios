import React from 'react'
import Header from '../Header'

function NewsXRP({ articles }) {
  return (
    <div>
        <ul className='flex'>
        {articles.map(({ source_id, link, title, description, image_url }) => (
        <li key={source_id} className='li'>
          {/* <a href={link} target="_blank" rel="noreferrer noopener">
            {title}
          </a> */}
          <h1 className='news-title'>{title}</h1>
          <p className='desc'>{description}</p>
          <div className='link-box'>
            <a href={link} className='link'>Read More</a>
          </div>
        </li>
      ))}
    </ul>
        
    </div>
  )
}

export default NewsXRP;