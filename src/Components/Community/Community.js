import React from 'react'
import "./Community.scss";
import Commucard from './Commucard';
import {Communcarddata} from "../../Data/Communitycard"

export default function Community() {
  return (
   <div className="community">

    <div className="communitytop">
      <div className="left">
      <h1>The greater Harvard community</h1>
      </div>
      <div className="right">
      <p>Harvard is dedicated to being a good neighbor to the communities we reside within, whether in Massachusetts or at one of our locations abroad.</p>
      </div>
    </div>

    <div className="communitymid">
      <div className="middata">
        <h3>$3 million</h3>
        <p>in Harvard funding provided in support of affordable homeownership in Allston-Brighton through the All Bright Homeownership Program.</p>
      </div>

      <div className="middata">
        <h3>650,000</h3>
        <p>visitors to Harvard museums each year.</p>
      </div>

      <div className="middata">
        <h3>22</h3>
        <p>locations abroad that link Harvard faculty and students to local academic institutions, government organizations, businesses, and communities</p>
      </div>

    </div>

    <div className="communitycard">
      {
        Communcarddata.map((item) => (
          <Commucard item={item} key={item.id}/>
        ))
      }
      
    </div>
   </div>
  )
}
