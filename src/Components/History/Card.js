import React from 'react'
import "./Card.scss"
export default function Card({item}) {
    return (
        <div className="card">
            <div className="cardtop">
                <img src={item.img} alt="" />
            </div><div className="cardmid">
                <h1>{item.heading}</h1>
                <p>{item.para}</p>
            </div>
            <div className="cardbottom">
                <button className="learn-more-button">
                   
                    <span className="arrow">&rarr;</span>
                </button>
                <p> {item.footerpara}</p>
            </div>

        </div>
    )
}
