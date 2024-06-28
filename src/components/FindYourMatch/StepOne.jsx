import React from 'react';

const StepOne = ({ selections, setSelections }) => {
  const stepone = [
    {
      key: 1,
      name: 'Bathroom',
      image: '1.png',
      id: 'Bathroom',
    },
    {
      key: 2,
      name: 'Home Office',
      image: '2.png',
      id: 'Home Office',
    },
    {
      key: 3,
      name: 'Bedroom',
      image: '3.png',
      id: 'Bedroom',
    },
    {
      key: 4,
      name: 'Kitchen',
      image: '4.png',
      id: 'Kitchen',
    },
    {
      key: 5,
      name: 'Dining room',
      image: '5.png',
      id: 'Dining room',
    },
    {
      key: 6,
      name: 'Living room',
      image: '6.png',
      id: 'Living room',
    },
    {
      key: 7,
      name: 'Entrance hall',
      image: '7.png',
      id: 'Entrance hall',
    },
    {
      key: 8,
      name: 'Nursery',
      image: '8.png',
      id: 'Nursery',
    },
  ];

  const handleChange = (e) => {
    const { id, checked } = e.target;
    setSelections((prev) => ({
      ...prev,
      stepOne: checked
        ? [...prev.stepOne, id]
        : prev.stepOne.filter((item) => item !== id),
    }));
  };

  return (
    <>
      <div className='col-md-9 mx-auto'>
        <div className='match_heading text-center'>
          <h1>I need a floor for my…</h1>
          <p>Select one or more rooms below.</p>
        </div>
        <div className='row'>
          {stepone.map((data) => (
            <div className='col-md-3 col-6 col-xs-12 my-md-3' key={data.key}>
              <div className='steps1-main text-center'>
                <div className='inner_step1 text-center'>
                  <label htmlFor={data.id} className='stepslabel'>
                    <div className='steps1_img'>
                      <img
                        src={`assets/images/Step/StepTwo/${data.image}`}
                        className='img-fluid'
                        alt='img1'
                      />
                    </div>
                    <div className='steps1_name d-flex justify-content-between pt-md-2 px-2'>
                      <p>
                        <strong>{data.name}</strong>
                      </p>
                      <input
                        type='checkbox'
                        name='floortype'
                        className='form-check-input'
                        id={data.id}
                        checked={selections.stepOne.includes(data.id)}
                        onChange={handleChange}
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

export default StepOne;
