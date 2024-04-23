import React from 'react'
import Image from 'next/image';
import Link from 'next/link'
const DownloadBroch = () => {
  return (
    <>
      <section className='downbroch_Sec common_sec'>
        <div className='container'>
          <div className='sec_heading_Left my-2 my-md-4'>
            <h1 className='section_heading'>Download <strong>Brochure</strong></h1>
          </div>
          <div className='row'>
            <div className='col-md col-sm-6 p-2'>
              <div className='brochure_imgdiv'>
                <Link href=''>
                  <Image
                    src='/assets/images/brochure/samaro_spc_flooring_lookbook_front-1.png'
                    alt='brochure'
                    width={100}
                    height={100}
                    layout='responsive'
                    objectFit='cover'
                  />
                  </Link>
              </div>
            </div>
            <div className='col-md col-sm-6 p-2'>
              <div className='brochure_imgdiv'>
                 <Link href=''>
                  <Image
                    src='/assets/images/brochure/samaro_spc_flooring_lookbook_front-1.png'
                    alt='brochure'
                    width={100}
                    height={100}
                    layout='responsive'
                    objectFit='cover'
                  />
                  </Link>
              </div>
            </div>
            <div className='col-md col-sm-6 p-2'>
              <div className='brochure_imgdiv'>
                 <Link href=''>
                  <Image
                    src='/assets/images/brochure/samaro_spc_flooring_lookbook_front-1.png'
                    alt='brochure'
                    width={100}
                    height={100}
                    layout='responsive'
                    objectFit='cover'
                  />
                  </Link>
              </div>
            </div>
            <div className='col-md col-sm-6 p-2'>
              <div className='brochure_imgdiv'>
                 <Link href=''>
                  <Image
                    src='/assets/images/brochure/samaro_spc_flooring_lookbook_front-1.png'
                    alt='brochure'
                    width={100}
                    height={100}
                    layout='responsive'
                    objectFit='cover'
                  />
                  </Link>
              </div>
            </div>
            <div className='col-md col-sm-6 p-2'>
              <div className='brochure_imgdiv'>
                 <Link href=''>
                  <Image
                    src='/assets/images/brochure/samaro_spc_flooring_lookbook_front-1.png'
                    alt='brochure'
                    width={100}
                    height={100}
                    layout='responsive'
                    objectFit='cover'
                  />
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default DownloadBroch