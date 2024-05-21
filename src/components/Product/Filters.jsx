
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
        if (hide === 'd-md-none') {
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
            <div className='Filter-title'>
                <p className="fw-bold samFloor m-0">SAMARO FLOORS</p>
                <p className='m-0 p-0 small fw-semibold text-navy'>Home -&gt; Products</p>
                <span className="small shownCount text-navy">11 of 79 floors shown</span>
            </div>
            <Collapse in={isOpen || isMediumOrLarger}>
                <div className=" py-4 FilterToggle ">
                    <div className='px-1 pb-4  '>
                        <div className={` border-bottom border-danger py-2 chk`}>
                            <p className='pb-2 darkBlue m-0'>Choose Your <strong className='fw-medium'>product</strong></p>
                            <div className={`${hide} chk`}>
                                <label className='darkBlue'><input className='mx-1 form-check-input' type="checkbox" />SPC</label>
                            </div>
                            <div className={`${hide}`}>
                                <label className='darkBlue'><input className='mx-1 form-check-input' type="checkbox" />LVT</label>
                            </div>
                        </div>
                        <div className={` border-bottom border-danger py-2 chk`}>
                            <p className='pb-2 darkBlue m-0'>Choose Your <strong className='fw-medium'>Catlogue</strong></p>
                            <div className={`${hide} chk`}>
                                <label className='darkBlue'><input className='mx-1 form-check-input' type="checkbox" />All</label>
                            </div>
                            <div className={`${hide}`}>
                                <label className='darkBlue'><input className='mx-1 form-check-input' type="checkbox" />Sicilian</label>
                            </div>
                            <div className={`${hide}`}>
                                <label className='darkBlue'><input className='mx-1 form-check-input' type="checkbox" />Tuscany</label>
                            </div>
                            <div className={`${hide}`}>
                                <label className='darkBlue'><input className='mx-1 form-check-input' type="checkbox" />LVT 1</label>
                            </div>
                            <div className={`${hide}`}>
                                <label className='darkBlue'><input className='mx-1 form-check-input' type="checkbox" />LVT 2</label>
                            </div>
                            <div className={`${hide}`}>
                                <label className='darkBlue'><input className='mx-1 form-check-input' type="checkbox" />Others</label>
                            </div>
                        </div>

                        <div className='border-bottom border-danger py-2'>
                            <p className='pb-2 darkBlue m-0'>Choose Your <strong className='fw-medium'>Types</strong></p>
                            <div>
                                <label className='darkBlue'><input className='mx-1 form-check-input' type="checkbox" />Wood</label>
                            </div>
                            <div>
                                <label className='darkBlue'><input className='mx-1 form-check-input' type="checkbox" />Stone</label>
                            </div>
                            <div>
                                <label className='darkBlue'><input className='mx-1 form-check-input' type="checkbox" />Marble</label>
                            </div>
                        </div>
                        <div className='border-bottom border-danger py-2'> <p className='pb-2 darkBlue'>Choose Your <strong className='fw-medium'>color</strong></p>
                            <div>
                                <label className='darkBlue'><input className='mx-1  form-check-input' type="checkbox" />Black</label>
                            </div>
                            <div>
                                <label className='darkBlue'><input className='mx-1 form-check-input' type="checkbox" />Beige</label>
                            </div>
                            <div>
                                <label className='darkBlue'><input className='mx-1 form-check-input' type="checkbox" />Blue</label>
                            </div>
                            <div>
                                <label className='darkBlue'><input className='mx-1 form-check-input' type="checkbox" />Dark brown</label>
                            </div>
                            <div>
                                <label className='darkBlue'><input className='mx-1 form-check-input' type="checkbox" />Dark grey</label>
                            </div>
                            <div>
                                <label className='darkBlue'><input className='mx-1 form-check-input' type="checkbox" />Green</label>
                            </div>
                            <div>
                                <label className='darkBlue'><input className='mx-1 form-check-input' type="checkbox" />Light grey</label>
                            </div>
                            <div>
                                <label className='darkBlue'><input className='mx-1 form-check-input' type="checkbox" />Natural</label>
                            </div>

                            <div >
                                <label className='darkBlue'><input className='mx-1 form-check-input' type="checkbox" />Pink</label>
                            </div>
                        </div>
                        <div className='border-bottom border-danger py-2'>
                            <p className='pb-2 darkBlue m-0'>Choose Your <strong className='fw-medium'>place</strong></p>
                            <div>
                                <label className='darkBlue'><input className='mx-1 form-check-input' type="checkbox" />Bathroom</label>
                            </div>
                            <div>
                                <label className='darkBlue'><input className='mx-1 form-check-input' type="checkbox" />Bedroom</label>
                            </div>
                            <div>
                                <label className='darkBlue'><input className='mx-1 form-check-input' type="checkbox" />Children's room</label>
                            </div>
                            <div>
                                <label className='darkBlue'><input className='mx-1 form-check-input' type="checkbox" />Dining room</label>
                            </div>
                            <div>
                                <label className='darkBlue'><input className='mx-1 form-check-input' type="checkbox" />Hallway</label>
                            </div>
                            <div>
                                <label className='darkBlue'><input className='mx-1 form-check-input' type="checkbox" />Kitchen</label>
                            </div>
                            <div>
                                <label className='darkBlue'><input className='mx-1 form-check-input' type="checkbox" />Living room</label>
                            </div>
                            <div>
                                <label className='darkBlue'><input className='mx-1 form-check-input' type="checkbox" />Office</label>
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
                        </div>

                    </div>

                </div>
            </Collapse>

        </>

    )
}

export default Filters
