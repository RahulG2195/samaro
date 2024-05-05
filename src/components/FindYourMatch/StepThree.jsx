import React from 'react'

const StepThree = () => {

  const ColourArr = [
    {
      key: 1,
      'clrCode': 'red',
      'image': 'Mask Group 286.png',
    },
    {
      key: 2,
      'clrCode': 'red',
      'image': 'Mask Group 287.png',
    },
    {
      key: 3,
      'clrCode': 'red',
      'image': 'Mask Group 288.png',
    },
    {
      key: 4,
      'clrCode': 'red',
      'image': 'Mask Group 289.png',
    },
    {
      key: 5,
      'clrCode': 'red',
      'image': 'Mask Group 290.png',
    },
    {
      key: 6,
      'clrCode': 'red',
      'image': 'Mask Group 291.png',
    },
    {
      key: 7,
      'clrCode': 'red',
      'image': 'Mask Group 292.png',
    },
    {
      key: 8,
      'clrCode': 'red',
      'image': 'Mask Group 293.png',
    },
    {
      key: 9,
      'clrCode': 'red',
      'image': 'Mask Group 294.png',
    },
    {
      key: 10,
      'clrCode': 'red',
      'image': 'Mask Group 294.png',
    },
    {
      key: 11,
      'clrCode': 'red',
      'image': 'Mask Group 295.png',
    },
    {
      key: 12,
      'clrCode': 'red',
      'image': 'Mask Group 296.png',
    },
    {
      key: 13,
      'clrCode': 'red',
      'image': 'Mask Group 297.png',
    },
    {
      key: 14,
      'clrCode': 'red',
      'image': 'Mask Group 298.png',
    },
    {
      key: 15,
      'clrCode': 'red',
      'image': 'Mask Group 299.png',
    },
  ];
  return (
    <>
      <div className='col-md-9 mx-auto'>
        <div className='match_heading text-center'>
          <h1>I’d like my floor to look like…</h1>
          <p>Select one or more rooms below.</p>
        </div>
        <div className='row'>
          {
            ColourArr.map(data => (
              <div className='col-md-2 col-4 col-xs-6 my-md-3 my-2'>
                <div className='steps1-main text-center'>
                  <div className="inner_step1 text-center">
                    <label for={data.id} className="stepslabel">
                      <div className="steps1_img">
                      <input
                          type="radio"
                          name="floortype"
                          className="form-check-input clrStepRadioBtn"
                          id={data.id}
                        />
                        <img
                          src={`assets/images/Step/StepThree/${data.image}`}
                          className="img-fluid clrImg"
                          alt={`Step ${data.name}`}
                          data-id={data.id}
                        />
                        {/* <span className="check-icon">&#10004;</span>  */}
                        
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