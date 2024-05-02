import React from 'react'
import "./FloorExplorer.css"

const FloorExplorer = () => {
  return (
    <section className="explorer">
      <div className=" ">
        <div className="row my-2 ">

          <div className="col-lg-11 col-md-12">
            <div className="row">
              <h2 className="text-white py-3 my-2 text-center fw-semibold respHeading1">
                How to choose my perfect floor?
              </h2>
              <div className="col-lg-4 col-md-4 col-sm-4">
                <img className="samaro-ply" src="/assets/images/home/floor-explorer/2.png" alt="" />
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 ">
                <img className="samaro-tab" src="/assets/images/home/floor-explorer/1.png" alt="" />
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 ">
                <div className="content text-center">
                  <h3 className="respHeading2"><span>FLOOR</span>EXPLORER</h3>
                  <p className=" respCption my-3">
                    Choosing a floor is a big life decision. So we're here to
                    help! FloorExplorer guides you to the perfect floor for your
                    home.
                  </p>
                  <a href="#" className="button py-0 px-3 mb-4 respCption">START THE FLOOREXPLORER</a>
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