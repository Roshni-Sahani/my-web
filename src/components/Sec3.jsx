import React from 'react'
import laptop from '../assets/images/laptop.png'

const Sec3 = () => {
    return (
        <div>
            <section className='bg-white py-100'>
                <div className="container">
                    <div className='d-flex justify-content-center align-items-center flex-column'>
                        <p className='txt-gradient modules-txt line2'>Modules</p>
                        <h2 className='black-txt'>Why Choose <span className='txt-gradient black-txt'>Maître D?</span> </h2>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-12 d-flex justify-content-center flex-column align-items-center">
                            <img src={laptop} alt="laptop" className='w-100' />
                        </div>
                        <div className="col-lg-6 col-12 d-flex justify-content-center flex-column">
                            <p className='your-txt text-center text-lg-start pt-10'>Manage Your <span className='txt-gradient your-txt'>Customer Queues</span> </p>
                            <p className='long-txt op-7 mw-484 mb-20 text-center text-lg-start mx-auto'>The Maitre D queue management system is designed to allow your customers to sign up for walk-in appointments and select the services they want ahead of time. The queue will provide them with estimated wait times, costs and will allow them to even select their preferred stylist.</p>
                            <p className='long-txt op-7 mw-484 text-center text-lg-start mx-auto'>As the queue gets bigger or smaller, its easy to monitor your operations and understand when wait periods are getting too long to service your customer base and to better resource your stores during busy periods. Beat the frustration of your customers ahead of time and help manage how they wait for your services</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Sec3

