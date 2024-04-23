import React from 'react'
import "@/components/Home/Social/Social.css";
const Inspiration = () => {
  return (
    <>
      <section className="social">
        <div className="">
          <div className="row justify-content-center mt-5">
            <div className="col-lg-10">
              <h1 className=' gallerytext'><span className='fw-medium'>INSPIRATIONAL</span> GALLERY</h1>

              <div className="social-grid">
                <div className="image">
                  <img src="/assets/images/home/social/1.png" alt="" />
                </div>
                <div className="image">
                  <img src="/assets/images/home/social/1.png" alt="" />
                </div>
                <div className="image">
                  <img src="/assets/images/home/social/1.png" alt="" />
                </div>

                <div className="image col-span-2">
                  <img src="/assets/images/home/social/1.png" alt="" />
                </div>

                <div className="image">
                  <img src="/assets/images/home/social/1.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Inspiration