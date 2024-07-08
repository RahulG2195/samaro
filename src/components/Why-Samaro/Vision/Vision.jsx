import React, { useEffect, useState } from 'react';
import "./Vision.css";
import axios from 'axios';

const Vision = () => {
    const [visionData, setVisionData] = useState({
        title: '',
        logo: '',
        subpoints: []
    });

    const [missionData, setMissionData] = useState({
        title: '',
        logo: '',
        subpoints: []
    });

    useEffect(() => {
        const fetchVisionData = async () => {
            try {
                const response = await axios.get('/api/admin/vision');
                const { subpoints, ...rest } = response.data;
                setVisionData({
                    ...rest,
                    subpoints: subpoints.split(',').map(subpoint => subpoint.trim())
                });
            } catch (error) {
                console.error('Error fetching Vision data:', error);
            }
        };

        const fetchMissionData = async () => {
            try {
                const response = await axios.get('/api/admin/mission');
                const { subpoints, ...rest } = response.data;
                setMissionData({
                    ...rest,
                    subpoints: subpoints.split(',').map(subpoint => subpoint.trim())
                });
            } catch (error) {
                console.error('Error fetching Mission data:', error);
            }
        };

        fetchVisionData();
        fetchMissionData();
    }, []);
    return (
        <>
            {/* <div className='vision-mission-cont'> */}
            <section className='vision mt-5 mx-5 position-relative '>
                <img src="/assets/images/why-samaro/Group 28873.svg" alt="" className='position-relative image1' />
                <div className=' position-absolute vissionmissionCont'>
                    <div className="row g-2 align-items-center position-relative ps-5 ms-5  vissionsectionResp">
                        <div className="col-lg-12">
                            <div className="vision-text position-relative row align-items-center justify-content-evenly">
                                <div className="col-lg-2 col-md-2 col-2">
                                    <div className="vision-image p-4">
                                        <img src="/assets/images/why-samaro/vision-mission/vision.png" alt="" />
                                    </div>
                                </div>
                                <div className='col-md-10 col-lg-9'>
                                    <div className='d-flex align-items-center gap-4'>
                                        <h2 className='text-darkred visionH2 p-0'>{visionData.title}</h2>
                                        <div className="w-25 d-none mobilevissionimg p-3">
                                            <img src="/assets/images/why-samaro/vision-mission/vision.png" alt="" className='w-75' />
                                        </div>
                                    </div>
                                    {/* <ul className='m-0'>
                                        <li className='p-0 m-1 text-navy fw-normal'>Revolutionizing the flooring industry with innovation and sustainability.</li>
                                        <li className='p-0 m-1 text-navy fw-normal'>Offering high-quality Stone Polymer Composite (SPC) and Luxury Vinyl Tile (LVT) flooring solutions.</li>
                                        <li className='p-0 m-1 text-navy fw-normal'>Inspiring and enhancing living spaces globally.</li>
                                        <li className='p-0 m-1 text-navy fw-normal'>Setting new standards in flooring excellence and building materials.</li>
                                        <li className='p-0 m-1 text-navy fw-normal'>Making a progressive impact on homes, office and commercial spaces worldwide.</li>
                                    </ul> */}
                                    <ul className='m-0'>
                                        {visionData.subpoints.map((item, index) => (
                                            <li key={index} className='p-0 m-1 text-navy fw-normal'>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* </section> */}


                    {/* <section className='mission'> */}

                    <div className="row g-2 align-items-center mt-2 missionCont">
                        <div className="col-lg-12 pt-xl-4">
                            <div className="mission-text row align-items-center justify-content-end missionSectionResp  py-4 mt-2">
                                <div className='col-md-10 col-lg-9 col-12'>
                                    <div className='d-flex align-items-center gap-4'>
                                        <h2 className='text-darkred missionH2'>{missionData.title}</h2>
                                        <div className="w-25 d-none mobilevissionimg p-3">
                                            <img src="/assets/images/why-samaro/vision-mission/mission.png" alt="" className='w-75' />
                                        </div>
                                    </div>
                                    {/* <ul className='p-0'>
                                        <li className='p-0 m-1 text-navy fw-normal'>Leading the flooring industry with continuous innovation, quality standards, and sustainability at Samaro Global Industries.</li>
                                        <li className='p-0 m-1 text-navy fw-normal'>Exceeding customer expectations through a diverse range of premium flooring products and unparalleled service and support.</li>
                                        <li className='p-0 m-1 text-navy fw-normal'>Utilizing expertise and state-of-the-art manufacturing to create beautiful, durable, and environment-friendly flooring solutions.</li>
                                        <li className='p-0 m-1 text-navy fw-normal'>Transforming spaces and enriching lives with our commitment to excellence.</li>
                                    </ul> */}
                                    <ul className='p-0'>
                                        {missionData.subpoints.map((item, index) => (
                                            <li key={index} className='p-0 m-1 text-navy fw-normal'>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="col-lg-2 col-md-2 col-2">
                                    <div className="mission-image p-4 me-2">
                                        <img src="/assets/images/why-samaro/vision-mission/mission.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* </div> */}
        </>
    )
}

export default Vision