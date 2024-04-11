import React from 'react'
import "./FloorExplorer.css"

const FloorExplorer = () => {
  return (
    <section className="explorer">
      <div className="container">
        <h2 className="text-white pt-5 text-center">
          How to choose my perfect floor?
        </h2>
        <div className="row">
          <div className="col-lg-11 col-md-12">
            <div className="row">
              <div className="col-lg-4">
                <img className="samaro-ply" src="/assets/images/home/floor-explorer/2.png" alt="" />
              </div>
              <div className="col-lg-4">
                <img className="samaro-tab" src="/assets/images/home/floor-explorer/1.png" alt="" />
              </div>
              <div className="col-lg-4">
                <div className="content">
                  <h3 className="heading"><span>FLOOR</span>EXPLORER</h3>
                  <p className="mt-4">
                    Choosing a floor is a big life decision. So we’re here to
                    help! FloorExplorer guides you to the perfect floor for your
                    home.
                  </p>
                  <a href="#" className="button mt-3">START THE FLOOREXPLORER</a>
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