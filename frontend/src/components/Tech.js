import React from 'react'
import html5 from '../images/html5.svg'
import javascript from '../images/javascript.svg'
import nodejs from '../images/nodejs.svg'
import mongo from '../images/mongo.svg'
import redux from '../images/redux.svg'
import react from '../images/react.svg'

function Tech() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-3 col-md-3 col-lg-3 d-flex justify-content-center align-items-center">
          <h1 className="">TECH SKILLS</h1>
        </div>
        <div className="col-12 col-sm-9 col-md-9 col-lg-9">
          <div className="row">
            <div className="col-md-4 col-sm-6 col-12 mt-2">
              <div className="card h-100">
                <img className="card-img-top" src={mongo} alt="mongo-img" />
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-12 mt-2">
              <div className="card h-100">
                <img className="card-img-top" src={react} alt="react-img" />
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-12 mt-2">
              <div className="card h-100">
                <img className="card-img-top" src={redux} alt="redux-img" />
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-12 mt-2">
              <div className="card h-100">
                <img className="card-img-top" src={nodejs} alt="nodejs-img" />
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-12 mt-2">
              <div className="card h-100">
                <img className="card-img-top" src={html5} alt="html-img" />
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-12 mt-2">
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src={javascript}
                  alt="javascript-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Tech
