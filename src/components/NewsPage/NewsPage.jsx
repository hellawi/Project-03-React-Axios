import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NewsXRP from './NewsList'
import Header from '../Header'
import Footer from '../Footer/Footer'
import Partners from '../Partners'
import './NewsPage.scss'
import Loading from '../Loading'

function NewsPage() {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    useEffect(() => {
        setLoading(true)
        axios
            .get("https://newsdata.io/api/1/news?apikey=pub_26653983d05ca317d96d1db2b9031e86f0c9d&q=xrp")
            .then((res) => {
                setArticles(res.data.results)
                console.log(articles)
            })
            .catch((error) => setError(error.message))
            .finally(() => setLoading(false))
    }, [])
  return (
    <div>
        {loading && <div className="background">
                        <div className="spinner">
                            <Loading />
                        </div>
                    </div>}
        <Header />
        <div className="heading-news-box">
            <img src="/trending-nd.png" alt="" className='trending-img' />
            <h1 className='newss-heading'>Top 10 Crypto News</h1>
        </div>
        <NewsXRP articles={articles} />
        <Partners />
        <Footer />
    </div>
  )
}

export default NewsPage