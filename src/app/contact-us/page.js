import SubBanner from '../../Components/SubBanner/SubBanner';
import '../contact.css';

export default function page() {
    return (
        <>
        <SubBanner/>
        <section className="getintouch">
            <div className="container">
                <div className="section_heaing mx-auto text-center">
                    <h1>Get In Touch With Us</h1>
                </div>
            </div>
            <div className="head_office"> 
                <div className="container">
                    <div className="inner-head-office">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="office_heading">
                                    <h3 className="text-Capitalize"> Head office</h3>
                                    <address>loremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem</address>
                                </div>
                            </div>
                            <div className="col-md-4"></div>
                            <div className="col-md-4"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}
