import React from 'react'
import pic from '../images/pic.png'

function Intro() {
  return (
    <div id="intro-id">
      <div className="cont-intro row align-items-center justify-content-center">
        <div className="wrapper-intro col">
          <div className="d-flex justify-content-center col">
            <img src={pic} alt="face" className="rounded-circle" />
          </div>
        </div>
        <div className="col">
          <div className="d-flex justify-content-center col">
            <div className="intro-text">
              <h3>Hi, I am Hamidreza</h3>
              <p>Junior Full Stack Web Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Intro
