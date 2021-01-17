import React from 'react'
import "./Card.css"
import { Card, Button } from "react-bootstrap"
import "./NewsPage.css"
import { Link} from "react-router-dom"
export default function CustomCard(props) {



    let resultArray = props.cards.map(item => item.props)
    console.log(resultArray)
    let displayArray = resultArray.map(item => <Link to={`/news/${item.id}`}>
        <Card style={{ width: '17rem' }} className="card-item">
            <Card.Img variant="top" src={item.url} style={{ width: "17rem", height: "14rem" }} />
            <Card.Body className="card-body">
                <Card.Title style={{ overflow: "hidden" }}>{item.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted" style={{ overflow: "hidden", fontSize: "small" }}>{item.date}</Card.Subtitle>
            </Card.Body>
        </Card>
    </Link>
    )

    return (
        <React.Fragment>
            {displayArray}
        </React.Fragment>


    )
}
