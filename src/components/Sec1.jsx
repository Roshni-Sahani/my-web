import React from 'react'
import men1 from '../assets/images/men1.png'
const Sec1 = () => {
  return (
    <div>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-6 d-flex justify-content-center col-12'>
            <img src={men1} alt="men1"  className='w-100'/>
          </div>
          <div className='col-lg-6 col-12 pt-129 d-flex justify-content-center flex-column'>
            <div className='d-flex align-items-center gap-15 center justify-content-center'>
              <p className='about-txt txt-gradient mb-0 '>About Us</p>
              <svg width="44" height="1" viewBox="0 0 44 1" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <line y1="0.5" x2="44" y2="0.5" stroke="black" />
                <line y1="0.sfrserw35" x2="44" y2="0.5" stroke="url(#paint0_linear_19268_1799)" />
                <defs>
                  <linearGradient id="paint0_linear_1926138u89823
                                    8_1799" x1="6.67021" y1="1" x2="7.99292" y2="7.77879"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FD9B2B" offset="0" />
                    <stop offset="1" stop-color="#F14F09" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h2 className='sub-heading text-center mx-auto text-lg-start mb-20'>What is <span class='txt-gradient'> Maître D?</span></h2>
            <p className='big-txt mw-456 op-7 text-center mx-auto mb-20 text-lg-start mx-lg-0'>Maître D is a full service solution, designed specifically for
              salons and
              barbershops. Our approach is modular, which
              means you only pay for the functionality that you need. Each module is completely integrated
              into the solution, so your
              entire business always remains syncronized. Maître D allows you to see everything within
              your
              business, from one
              location.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sec1

