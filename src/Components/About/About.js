import React from 'react'
import "./About.scss"
import logo from "../../Images/logo.png"

export default function About() {
  return (
    <>
    <div className="about">
      <div className="aboutmain">
        <div className="nav">
          <div className="logo">
            <img src={logo} alt="" />
            <span>Harvard University</span>
          </div>
          <div className="right">
            <img src="https://cdn-icons-png.flaticon.com/128/7952/7952656.png" alt="" />
            <span>Search</span>
            <img src="https://cdn-icons-png.flaticon.com/128/10629/10629635.png" alt="" />
            <span>Menu</span>
          </div>
        </div>
        <div className="aboutfooter">
        <div className="aboutleft">
          <h1>About Harvard</h1>
        </div>
        <div className="aboutright">
          <h3>Those who venture here-to learn, reasarch, teach, work, and grow-join nearly four centuries of students and scholars in the pursuit of truth, knowledge, and better world. </h3>
        </div>
        </div>
      </div>
    </div>
      <div className="line"></div> 
</>
  )
}



