import React from 'react'
import "./FloorExplorer.css"

const FloorExplorer = () => {
  return (
    <section className="explorer">
      <div className="">
        <div className="row my-2 ">

          <div className="col-lg-11 col-md-12 ">
            <div className="row">
              <h2 className="text-white py-3 my-2 text-center fw-normal respHeading1">
                How to choose my <strong className='fw-semibold'>perfect floor</strong>?
              </h2>
              <div className="col-lg-4 col-md-4 col-sm-4">
                <img className="samaro-ply" src="/assets/images/home/floor-explorer/2.png" alt="" />
              </div>
              <div className='floorExplrTxtinMbl'> <h3 className="respHeading2"><span>FLOOR</span>EXPLORER</h3></div>
              <div className="col-lg-4 col-md-4 col-sm-4 ">
                <img className="samaro-tab" src="/assets/images/home/floor-explorer/1.png" alt="" />
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 ">
                <div className="content pb-5">
                  <h3 className="respHeading2 floorExplrDeskText"><span>FLOOR</span>EXPLORER</h3>
                  <p className=" respCption my-3">
                  Let our Floor Explorer be your compass to the perfect floor. We're here to guide your big decision with expertise and care!
                  </p>
                  <a href="#" className=" button d-inline-block mt-3 px-3 py-1 respCption">START THE FLOOREXPLORER</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FloorExplorer