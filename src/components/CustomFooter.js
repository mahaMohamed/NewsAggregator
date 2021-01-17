import React from 'react'
import { Card } from "react-bootstrap"
import "./CustomFooter.css"
import footballImage from "../assets/football.png"


export default function CustomFooter() {
    return (
        <div className="my-footer">
            <Card style={{ width: '100%', backgroundColor: "rgb(54,72,129)", color: "white" }} >
                <Card.Body>
                    <div className="footer-image-container">
                        <Card.Img variant="bottom" src={footballImage} style={{ width: "5rem", height: "5rem" }} />
                        <Card.Text > <h2>SportsLive</h2>  </Card.Text>

                    </div>


                    <div className="footer">
                        <div className="copy-rights">
                            <Card.Text > <p>Copy Rights Reserved</p>  </Card.Text>

                        </div>
                    </div>
                </Card.Body>
            </Card>

        </div>
    )
}
