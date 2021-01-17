import React from 'react'
import {useParams} from "react-router-dom"
import articles from '../assets/news';
import "./SingleNewsPage.css"

export default function SingleNewsPage(props) {

    let {id} = useParams(); 
    let {news} = props;

    let article = news.find(item => item.id == id)

    console.log(article)

        return (
        <div >
            <div className="image-container-news">
                <img src={article.urlToImage} alt="" />
            </div>
            <div className="meta-container">
                <h2>{article.title}</h2>
                <h6>{article.publishedAt}</h6>
            </div>
            <div className="news-text-container">
                <p>{article.content}</p>

            </div>
        </div>
    )
}
