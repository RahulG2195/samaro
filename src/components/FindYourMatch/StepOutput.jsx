import React from 'react'

const StepOutput = () => {
  return (
    <>
      <section className='stepoutput_section'>
        <div className='container'>
          <div className='row'>
              <div className='col-md-6'>
                  <div className='output-title'>
                    <h3>Your ideal solution</h3>
                  </div>
                  <div className='prod_name_and_desc'>
                      <h6>Laminate flooring</h6>
                      <p>Great looks at a great price: that’s what laminate has to offer. Enjoy an exceptionally natural-looking floor and give your room the warmth and look of real wood at a budget-friendly price.</p>
                  </div>
                  <div className='prod_pointer'>
                    <ul>
                      <li><i className="fa-solid fa-check"></i> Budget Friendly</li>
                      <li><i className="fa-solid fa-check"></i> Scratch & Stain resistant</li>
                      <li><i className="fa-solid fa-check"></i> Exceptional level of realism</li>
                    </ul>
                  </div>
                  <div className='prod_count'>
                    <h5>See your 1 ideal floors</h5>
                    <h5>Out of 256 flooring solutions, we've selected 1 floors that suit your project.</h5>
                  </div>
                  <div className='step_next_button'>
                  <button className='btn step_button'> Discover all our floors</button>
                </div>
              </div>
              <div className='col-md-6'></div>
          </div>
        </div>
      </section>
    </>
  )
}

export default StepOutput