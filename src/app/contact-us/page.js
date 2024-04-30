// import SubBanner from '../../Components/SubBanner/SubBanner';
import SubBanner from '@/components/Contactbanner/Banner';
import '../contact.css';
import SpcForm from '@/components/SpcProducts/SpcForm';
import Link from 'next/link';
import Career from '@/components/Career/Career';
import Social from '@/components/Home/Social/Social';
import ContactMap from '@/components/ContactMap/ContactMap';
import Image from 'next/image';

export default function page() {
    return (
        <>
            <SubBanner></SubBanner>
            <section className="getintouch pb-5">
                <div className="container">
                    <div className="section_heaing mx-auto text-center ">
                        <h1><u className='border-3 border-bottom border-danger'>Contact</u> Us</h1>
                    </div>
                </div>
                <div className="container ">
                    <div className=" row justify-content-evenly align-items-center">
                        <div className=" col-md-3">

                            <Image
                                src="/assets/images/career/Image 357.png"
                                alt="Description of the image"
                                width={100}
                                height={100}
                                layout="responsive"
                                objectFit="cover"
                                priority={true}
                                loading="eager"
                            />


                        </div>
                        <div className='col-md-7'>
                            <SpcForm
                                hideguide={'hideguide'}
                                contactformcol={'contactform-col'}
                            ></SpcForm>
                        </div>
                    </div>
                    <div className='my-5'>
                        <ContactMap></ContactMap>
                    </div>

                    <Career></Career>
                    <Social></Social>
                </div>
            </section>

        </>
    );
}
