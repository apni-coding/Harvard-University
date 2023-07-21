import React from 'react'
import "./Button.scss";

export default function Button() {
  return (
    <>
    <div className="buttonbtn">
       <p>ABOUT HARVARD</p>
       <p>/</p>
       <button>History of Harvard</button>
       <button>Harvard in the Community</button>
       <button>Harvard in the World</button>
       <button>Leadership and Governance</button>
       <button type='dropdown'>More</button>
    </div><br /><br /><hr />
    </>
  )
}
