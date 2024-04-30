import React from 'react'

const StepThree = () => {
  const stepThree = [
    {
      key: 1,
      'name': 'Authentic wood',
      'image': '1.png',
      'id': 'Authentic',
    },
    {
      key: 2,
      'name': 'Soft & silent',
      'image': '2.png',
      'id': 'Soft',
    },
    {
      key: 3,
      'name': 'Supreme scratch resistance',
      'image': '3.png',
      'id': 'Supreme',
    },
    {
      key: 4,
      'name': 'Renovation friendly',
      'image': '4.png',
      'id': 'Renovation',
    },
    {
      key: 5,
      'name': 'Budget friendly',
      'image': '5.png',
      'id': 'Budget',
    },
  ]
  return (
    <>
      <div className='col-md-9 mx-auto'>
        <div className='match_heading text-center'>
          <h1>Most importantly, I want my floor to be…</h1>
          <p>Select the one feature that matters most to you.</p>
        </div>
        <div className='row'>
          {
            stepThree.map(data => (
              <div className='col-lg col-md-3 col-sm-2 col-6 mx-auto'>
                <div className='steps1-main text-center'>
                  <div className='inner_step1 text-center'>
                    <label htmlFor={data.id} className='stepslabel'>
                    <div className='steps1_img'>
                      <img src={`assets/images/Step/StepTwo/${data.image}`} className='img-fluid' alt='img1' />
                    </div>
                    <div className='steps1_name d-flex justify-content-between pt-md-2 px-2'>
                      <p><strong>{data.name}</strong></p>
                      <input type='checkbox' name='floortype' className='form-check-input' id={data.id}/>
                    </div>
                    </label>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default StepThree