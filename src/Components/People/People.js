import React from 'react'
import people from "../../Images/people.jpg"
import "./People.scss";
export default function People() {

  return (
    <>

      <div className="harvardpeople">
        <div className="leftpeople">
          <h1>The people of Harvard </h1>
        </div>
        <div className="rightpeople">
          <p>What makes Harvard special are our people. Through continued <span>efforts in inclusion and belonging,</span> Harvard has built a community comprising many backgrounds, cultures, races, identities, life experiences, perspectives, beliefs, and values.</p>
        </div>
      </div>
      <div className="secondpart">
        <div className="secleft">
          <img src={people} alt="" />
        </div>
        <div className="secright">
          <div className="details">
            <h1>25,266</h1>
            <p>undergraduate and graduate students</p>
          </div>

          <div className="details">
            <h1>19,639</h1>
            <p>faculty and staff</p>
          </div>

          <div className="details">
            <h1>400k+</h1>
            <p>alumni worldwide</p>
          </div>
          <p>Explore more data about our community with the <span>Harvard Fact Book</span></p>
        </div>
      </div>

      <div className="footerpara">
        <p>Harvard <span>leadership and governance</span> is composed of four components:</p>
      </div>
      <div className="peoplefooter">

        <div className="footerdetails">
          <h1>The President</h1>
          <p>Claudine Gay, Harvard's 30th president</p>
        </div>

        <div className="footerdetails">
          <h1>Deans and Officers</h1>
          <p>Leading Harvard's 15 Schools and many offices</p>
        </div>

        <div className="footerdetails">
          <h1>Harvard corporation</h1>
          <p>The oldest corporation in the Western Hemisphere</p>
        </div>

        <div className="footerdetails">
          <h1>Board of Overseers</h1>
          <p>Alumni committed to Harvard's missions and interests</p>
        </div>


      </div>
      
    </>
  )
}
