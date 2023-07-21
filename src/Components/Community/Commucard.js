import React from 'react'
import "./Commucard.scss"

export default function Commucard(props) {
  return (
    <div className="commucard">
      <div className="main">
        <h3>{props.item.head}</h3>
        <div className="paragraph-container">
          <p>{props.item.para}</p>
        </div>
        <div className="next">
          <p>{props.item.footer}</p>
        </div>
      </div>
    </div>
  )
}
