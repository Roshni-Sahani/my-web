import React from 'react'
import footerlogo from '../assets/images/footer-logo.png'
import ellipse1 from '../assets/images/ellipse1.png'
import ellipse2 from '../assets/images/ellipse2.png'
import ellipse3 from '../assets/images/ellipse3.png'
import ellipse4 from '../assets/images/ellipse4.png'
import ellipse5 from '../assets/images/ellipse4.png'

const Footer = () => {
  return (
    <div>
      <div className='footer-bg pos-relative overflow-hidden'>
        <div className='container pt-53 text-center'>
          <div className='pt-53'>
            <img src={footerlogo} alt="footerlogo" />
            <p className='footer-txt'>Proudly Australian developed software. Focused on increasing efficiency and growing business within the beauty industry.</p>
            <div className='d-flex pt-24 gap-50 max-w-375 text-center mx-auto'>
              <p className='footer-txt1'>Navigation</p>
              <p className='footer-txt1'>Company</p>
              <p className='footer-txt1'>Contact</p>
            </div>
          </div>

        </div>
        <p className='last-txt  pt-60 pb-10 op-7 footer-line text-center'>Copyright 2020 All rights reserved, Greenfox Development Pty LtdÂ©</p>
        <img src={ellipse1} alt="footerellipse1" className='footerellipse1' />
              <img src={ellipse2} alt="ellipse1" className='f2' />
              <img src={ellipse3} alt="f2" className='f3' />
              <img src={ellipse4} alt="f2" className='f5' />
              <img src={ellipse5} alt="f2" className='f4' />

      </div>
    </div>
  )
}

export default Footer
