import React from 'react';

const StepFour = ({ selections, setSelections }) => {
  const stepFour = [
    {
      key: 1,
      name: 'Authentic',
      image: 'maskGroup1.png',
      id: 'authentic',
    },
    {
      key: 2,
      name: 'Sensational',
      image: 'maskGroup2.png',
      id: 'sensational',
    },
    {
      key: 3,
      name: 'Unbeatable',
      image: 'maskGroup3.png',
      id: 'unbeatable',
    },
    {
      key: 4,
      name: 'Sincere',
      image: 'maskGroup4.png',
      id: 'sincere',
    },
  ];

  const handleChange = (e) => {
    setSelections((prev) => ({
      ...prev,
      stepFour: e.target.id,
    }));
  };

  return (
    <>
      <div className='col-md-9 mx-auto'>
        <div className='match_heading text-center'>
          <h1>I prefer a floor that is…</h1>
          <p className='py-2'>Select one or more rooms below.</p>
        </div>
        <div className='row'>
          {stepFour.map((data) => (
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
                        checked={selections.stepFour === data.id}
                        onChange={handleChange}
                      />
                      <img
                        src={`assets/images/Step/StepFour/${data.image}`}
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

export default StepFour;
