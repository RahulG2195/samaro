
import { Button, Collapse } from 'react-bootstrap';
import './Filters.css'
import { useEffect, useState } from 'react';

const Filters = ({ hide, inSPC }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [isMediumOrLarger, setIsMediumOrLarger] = useState(false);

    // Function to toggle the Collapse state
    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    // Check screen size on component mount
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMediumOrLarger(window.innerWidth >= 769);
        };

        checkScreenSize();

        window.addEventListener('resize', checkScreenSize);

        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);

    // Effect to update isOpen state when hide prop changes
    useEffect(() => {
        if (hide === 'd-md-non') {
            setIsOpen(false);
        }
    }, [hide]);
    return (
        <>
            <div className={` ${inSPC} hamburger-menu d-md-non d-block`}>
                <Button variant="" onClick={toggleCollapse}>
                    <img src="/assets/images/products/Component 55 – 2.svg" alt="err" />
                </Button>
            </div>

            <Collapse in={isOpen || isMediumOrLarger}>
                <div className=" py-4 FilterToggle ">
                    <div className='px-1 py-4  '>
                        <div className={` border-bottom border-danger py-2 chk`}>
                            <p className='pb-2 darkBlue'>Choose Your <strong className='fw-medium'>product</strong></p>
                            <div className={`${hide} chk`}>
                                <input className='mx-1 form-check-input' type="checkbox" /><label className='darkBlue'>SPC</label>
                            </div>
                            <div className={`${hide}`}>
                                <input className='mx-1 form-check-input' type="checkbox" /><label className='darkBlue'>LVT</label>
                            </div>
                        </div>

                        {/* <div className='border-bottom border-danger py-2'>
                            <p className='pb-2 darkBlue'>Choose Your <strong className='fw-medium'>Types</strong></p>
                            <div>
                                <input className='mx-1 form-check-input' type="checkbox" /><label className='darkBlue'>Wood</label>
                            </div>
                            <div>
                                <input className='mx-1 form-check-input' type="checkbox" /><label className='darkBlue'>Stone</label>
                            </div>
                            <div>
                                <input className='mx-1 form-check-input' type="checkbox" /><label className='darkBlue'>Marble</label>
                            </div>
                        </div>
                        <div className='border-bottom border-danger py-2'> <p className='pb-2 darkBlue'>Choose Your <strong className='fw-medium'>color</strong></p>
                            <div>
                                <input className='mx-1  form-check-input' type="checkbox" /><label className='darkBlue' >Black</label>
                            </div>
                            <div>
                                <input className='mx-1 form-check-input' type="checkbox" /><label className='darkBlue' >Beige</label>
                            </div>
                            <div>
                                <input className='mx-1 form-check-input' type="checkbox" /><label className='darkBlue' >Blue</label>
                            </div>
                            <div>
                                <input className='mx-1 form-check-input' type="checkbox" /><label className='darkBlue'>Dark brown</label>
                            </div>
                            <div>
                                <input className='mx-1 form-check-input' type="checkbox" /><label className='darkBlue' >Dark grey</label>
                            </div>
                            <div>
                                <input className='mx-1 form-check-input' type="checkbox" /><label className='darkBlue'>Green</label>
                            </div>
                            <div>
                                <input className='mx-1 form-check-input' type="checkbox" /><label className='darkBlue'>Light grey</label>
                            </div>
                            <div>
                                <input className='mx-1 form-check-input' type="checkbox" /><label className='darkBlue'>Natural</label>
                            </div>

                            <div >
                                <input className='mx-1 form-check-input' type="checkbox" /><label className='darkBlue'>Pink</label>
                            </div>
                        </div>
                        <div className='border-bottom border-danger py-2'>
                            <p className='pb-2 darkBlue'>Choose Your <strong className='fw-medium'>place</strong></p>
                            <div>
                                <input className='mx-1 form-check-input' type="checkbox" /><label className='darkBlue'>Bathroom</label>
                            </div>
                            <div>
                                <input className='mx-1 form-check-input' type="checkbox" /><label className='darkBlue'>Bedroom</label>
                            </div>
                            <div>
                                <input className='mx-1 form-check-input' type="checkbox" /><label className='darkBlue'>Children's room</label>
                            </div>
                            <div>
                                <input className='mx-1 form-check-input' type="checkbox" /><label className='darkBlue'>Dining room</label>
                            </div>
                            <div>
                                <input className='mx-1 form-check-input' type="checkbox" /><label className='darkBlue'>Hallway</label>
                            </div>
                            <div>
                                <input className='mx-1 form-check-input' type="checkbox" /><label className='darkBlue'>Kitchen</label>
                            </div>
                            <div>
                                <input className='mx-1 form-check-input' type="checkbox" /><label className='darkBlue'>Living room</label>
                            </div>
                            <div>
                                <input className='mx-1 form-check-input' type="checkbox" /><label className='darkBlue'>Office</label>
                            </div>
                        </div>
                        <div className=' border-bottom border-danger'>
                            <label className="form-label darkBlue">Choose Your <strong className='fw-medium'>Thickness</strong></label>
                            <input type="range" className="form-range custom-range-input d-block p-0" min="0" max="5" id="customRange2" />

                            <div className='d-flex justify-content-between'>
                                <p className='small darkBlue'>1.5 mm</p>
                                <p className='small darkBlue'>8 mm</p>
                            </div>
                        </div>
                        <div className=' border-bottom border-danger'>
                            <label className="form-label darkBlue">Choose Your <strong className='fw-medium'>Wear Layer</strong></label>
                            <input type="range" className="form-range custom-range-input d-block p-0" min="0" max="5" id="customRange2" />

                            <div className='d-flex justify-content-between'>
                                <p className='small darkBlue '>0.1 mm</p>
                                <p className='small darkBlue'>0.7 mm</p>
                            </div>
                        </div> */}

                    </div>

                </div>
            </Collapse>

        </>

    )
}

export default Filters
