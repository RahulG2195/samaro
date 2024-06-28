import React from 'react'
import Image from 'next/image';
import '@/components/FindYourMatch/findmatch.css';
import Link from 'next/link';
const StepOutput = ({ selections }) => {

  const dummyFloors = [
    {
      id: 1,
      name: 'Budget Friendly Laminate',
      type: 'Laminate',
      place: ['Bedroom', 'Living room'],
      colors: ['red', 'blue'],
      features: ['Budget', 'Scratch & Stain resistant'],
      image: '/assets/images/floor1.png'
    },
    {
      id: 2,
      name: 'Supreme Scratch Resistant SPC',
      type: 'SPC',
      place: ['Living room', 'Kitchen'],
      colors: ['green', 'yellow'],
      features: ['Supreme', 'Renovation friendly'],
      image: '/assets/images/floor2.png'
    },
    {
      id: 3,
      name: 'Soft & Silent LVT',
      type: 'LVT',
      place: ['Bedroom', 'Home Office'],
      colors: ['blue', 'purple'],
      features: ['Soft', 'Authentic Texture'],
      image: '/assets/images/floor3.png'
    },
    {
      id: 4,
      name: 'Renovation Friendly Laminate',
      type: 'Laminate',
      place: ['Kitchen', 'Dining room'],
      colors: ['red', 'green'],
      features: ['Renovation', 'Budget'],
      image: '/assets/images/floor4.png'
    },
  ];
  // Function to filter floors based on selections
  const filterFloors = (selections) => {
    let filteredFloors = dummyFloors;

    // Filter by place
    if (selections.stepOne.length > 0) {
      filteredFloors = filteredFloors.filter(floor => {
        return selections.stepOne.some(place => floor.place.includes(place));
      });
    }

    // Filter by type
    if (selections.stepTwo) {
      filteredFloors = filteredFloors.filter(floor => floor.type === selections.stepTwo);
    }

    // Filter by color
    if (selections.stepThree) {
      filteredFloors = filteredFloors.filter(floor => floor.colors.includes(selections.stepThree));
    }


    return filteredFloors;
  };

  const filteredFloors = filterFloors(selections);

  const handleDiscoverAllFloors = () => {
    console.log('Navigate to product detail page');
  };

  const selectedFloor = filteredFloors[0];


  return (
    <> 
      <section className='stepoutput_section my-md-5 my-3'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-7 order-md-0 order-1'>
              <div className='output-title'>
                <h3>Your ideal solution</h3>
              </div>
              <div className='prod_name_and_desc'>
                <h6>Laminate flooring</h6>
                <p>Great looks at a great price: that’s what laminate has to offer. Enjoy an exceptionally natural-looking floor and give your room the warmth and look of real wood at a budget-friendly price.</p>
              </div>
              <div className='prod_pointer py-2'>
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
                <Link href={'./productdetail'}><button className='btn step_button discoverBtn py-1 px-4'> Discover all our floors</button></Link>
              </div>
            </div>
            <div className='col-md-5 order-md-1 order-0'>
              <div className='outputImg'>
                <Image src="/assets/images/Step/stepoutput.png" height={100} width={100} layout='responsive' objectFit='contain' alt='output img' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default StepOutput 