import React from 'react'
import CustomCard from "./Card"
import "./NewsPage.css"


export default function NewsPage(props) {
    return (
        <div>
            <div className="news-meta-container">
                <h3>Recently Added </h3>

            </div>
            <div className="container">
                <CustomCard cards={props.cards} />
            </div>
        </div>
    )
}
