import React from 'react'
import contact from '../assets/images/contact.png'

const Sec5 = () => {
    return (
        <div>
            <div className="container">
                <div className="row items-center justify-center">
                    <div className="col-lg-6 col-12">
                        <div className='d-flex align-items-center gap-15 pt-50'>
                            <p className='contact-txt txt-gradient'>Contact US</p>
                            <a href="#" className='d-flex align-items-center'><svg width="44" height="1" viewBox="0 0 44 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line y1="0.5" x2="44" y2="0.5" stroke="black" />
                                <line y1="0.5" x2="44" y2="0.5" stroke="url(#paint0_linear_19268_2038)" />
                                <defs>
                                    <linearGradient id="paint0_linear_19268_2038" x1="6.67021" y1="1" x2="7.99292" y2="7.77879" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FD9B2B" />
                                        <stop offset="1" stop-color="#F14F09" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            </a>
                        </div>
                        <p className='get-txt pb-60 pt-10'>Get in touch!</p>
                        <div className='d-flex items-center gap-30 mb-30'>
                            <input type="text" placeholder='Full Name' className='border-outline-none pb-15 full-name
                            ' />
                            <input type="text" placeholder='Email address' className='border-outline-none pb-15 ff-work' />
                        </div>
                        <input className='w-100 border-outline-none pb-15 mb-30 full-name' type="text" placeholder='Company Name ' />
                        {/* <textarea className='w-100 border-outl ine-none pb-15 ff-work' name="id" placeholder="Message"></textarea> */}
                        <textarea name="" id="" cols="30" rows="10" placeholder="Message" className='full-name border-outline-none resize-none'></textarea>
                        <div className='pt-60'><button className='primary-btn text-white fs-md ff-work text-semibold bg-orange-gradient'>Submit</button></div>
                    </div>
                    <div className="col-lg-6 col-12 d-flex justify-content-center">
                        <img className='w-100' src={contact} alt="img" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sec5
