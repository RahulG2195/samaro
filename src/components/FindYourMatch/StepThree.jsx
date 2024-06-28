import React from 'react';

const StepThree = ({ selections, setSelections }) => {
  const ColourArr = [
    {
      key: 1,
      clrCode: 'red',
      image: 'Mask Group 286.png',
      id: 'Color1',
    },
    {
      key: 2,
      clrCode: 'red',
      image: 'Mask Group 287.png',
      id: 'Color2',
    },
    {
      key: 3,
      clrCode: 'red',
      image: 'Mask Group 288.png',
      id: 'Color3',
    },
    {
      key: 4,
      clrCode: 'red',
      image: 'Mask Group 289.png',
      id: 'Color4',
    },
    {
      key: 5,
      clrCode: 'red',
      image: 'Mask Group 290.png',
      id: 'Color5',
    },
    {
      key: 6,
      clrCode: 'red',
      image: 'Mask Group 291.png',
      id: 'Color6',
    },
    {
      key: 7,
      clrCode: 'red',
      image: 'Mask Group 292.png',
      id: 'Color7',
    },
    {
      key: 8,
      clrCode: 'red',
      image: 'Mask Group 293.png',
      id: 'Color8',
    },
    {
      key: 9,
      clrCode: 'red',
      image: 'Mask Group 294.png',
      id: 'Color9',
    },
    {
      key: 10,
      clrCode: 'red',
      image: 'Mask Group 294.png',
      id: 'Color10',
    },
    {
      key: 11,
      clrCode: 'red',
      image: 'Mask Group 295.png',
      id: 'Color11',
    },
    {
      key: 12,
      clrCode: 'red',
      image: 'Mask Group 296.png',
      id: 'Color12',
    },
    {
      key: 13,
      clrCode: 'red',
      image: 'Mask Group 297.png',
      id: 'Color13',
    },
    {
      key: 14,
      clrCode: 'red',
      image: 'Mask Group 298.png',
      id: 'Color14',
    },
    {
      key: 15,
      clrCode: 'red',
      image: 'Mask Group 299.png',
      id: 'Color15',
    },
  ];

  const handleChange = (e) => {
    setSelections((prev) => ({
      ...prev,
      stepThree: e.target.id,
    }));
  };

  return (
    <>
      <div className='col-md-9 mx-auto'>
        <div className='match_heading text-center'>
          <h1>I'd like my floor to look like…</h1>
          <p className='py-2'>Select one or more rooms below.</p>
        </div>
        <div className='row'>
          {ColourArr.map((data) => (
            <div className='col-md-2 col-4 col-xs-6 my-md-3 my-2' key={data.key}>
              <div className='steps1-main text-center'>
                <div className='inner_step1 text-center'>
                  <label htmlFor={data.id} className='stepslabel'>
                    <div className='steps1_img'>
                      <input
                        type='radio'
                        name='floortype'
                        className='form-check-input clrStepRadioBtn'
                        id={data.id}
                        checked={selections.stepThree === data.id}
                        onChange={handleChange}
                      />
                      <img
                        src={`assets/images/Step/StepThree/${data.image}`}
                        className='img-fluid clrImg'
                        alt={`Step ${data.name}`}
                        data-id={data.id}
                      />
                    </div>
                  </label>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default StepThree;
