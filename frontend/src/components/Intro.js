import React from 'react'
import pic from '../images/pic.png'

function Intro() {
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="wrapper-face col-lg-6 col-md-6">
          <img className="img-face rounded-circle" src={pic} alt="face" width="304" height="236"/>
        </div>
        <div className="wrapper-intro col-lg-6 col-md-6">
          <div className="card-body">
            <h5 className="card-title">Hi, I am Hamidreza</h5>
            <p className="card-text">
             Junior Full Stack Developer 
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Intro
