import React from 'react'
import "./History.scss"
import river from "../../Images/river.jpg"
import Card from './Card'
import { historyData } from '../../Data/Historydata'


export default function History() {
  return (
    <>
      <div className="historymain">
      <div className="historytop">
        <div className="topleft">
          <h1>The history of Harvard</h1>
        </div>
        <div className="topright">
          <p>
            Explore the history of our founding, our <span>Nobel Prize winners,</span> the <span>honorary degrees</span> we've awarded, and <span>how our iconic shield was created.</span>
          </p>
          <div className="explore-btn">
            <img src="https://cdn-icons-png.flaticon.com/128/189/189253.png" alt="next" />
            <h6>Explore all of Harvard's history</h6>
          </div>
        </div>
      </div>

        <div className="historymid">
          <div className="midleft">
            <img src={river} alt="group photo" />
          </div>
          <div className="midright">
            <div className="text">
            <p>On September 8, 1636, Harvard, the first college in the American colonies, was founded in Cambridge, Massachusetts. Harvard University was officially founded by a vote by the Great and General Court of the Massachusetts Bay Colony.</p>
            </div>
            <div className="text">
            <p> <span>Harvard's endowment</span> started with John Harvard’s initial donation of 400 books and half his estate, but in 1721, Thomas Hollis began the now standard practice of requiring that a donation be used for a specific purpose when he donated money for “a Divinity Professor, to read lectures in the Halls to the students.”</p>
            </div>
            
          </div>
        </div>

          <div className="carddata">
            {historyData.map((item, index) => (
              <Card item = {item} key={index}/>
              )
            )}
            
            
          </div>
      </div>
    </>
  )
}
