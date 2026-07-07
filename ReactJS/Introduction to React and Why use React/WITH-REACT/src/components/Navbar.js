import React from 'react'

const navbar = ({logoText}) => {
  return (
    <div>
        <div className="logoText">{logoText}</div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
      </ul>
    </div>
  )
}

export default navbar
