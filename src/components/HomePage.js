import React from 'react'
import CustomCard from "./Card"
import "./HomePage.css"
import heroImage from "../assets/hero.jpg"
import { Link } from "react-router-dom"



export default function HomePage(props) {


    return (
        <div>
            <div className="image-container">
                <div className="text-container"></div>
                <h1>T20 World Cup</h1>
                <img src={heroImage} alt="" />
            </div>
            <div className="subheader">
                <h3>Recently Added</h3>
            </div>
            <div className="container">
                <CustomCard cards={props.cards}  />
            </div>
                <div className="container">
                    <button>
                        <Link to="/all"> Show All </Link>
                    </button>
                </div>
            </div>
    )
}
