import React from 'react'
import logo from '../assets/images/logo.png'
const Mynav = () => {
    return (
        <div className='bg-image min-110'>
            <div className='container py-10'>
                <div className='d-flex justify-content-between pb-50'>
                    <img src={logo} alt="logo" />
                    <div className="d-flex align-items-center">
                        <label for="menubar" class="z-index">
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                        <input type="checkbox" id="menubar" hidden />
                        <ul className="d-flex align-items-center gap-46  mobile-view pt-26 pl-0">
                            <li><a href="" className=" nav-font">Home</a></li>
                            <li><a href="" className=" nav-font">Modules</a></li>
                            <li><a href="" className=" nav-font">Pricing</a></li>
                            <li><a href="" className=" nav-font">Features</a></li>
                            <li><a href="" className=" nav-font">Contact Us</a></li>
                        </ul>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M8.70898 16.4198C10.484 16.4194 12.2078 15.8252 13.606 14.7318L18.002 19.1278L19.416 17.7138L15.02 13.3178C16.114 11.9195 16.7086 10.1952 16.709 8.4198C16.709 4.0088 13.12 0.4198 8.70898 0.4198C4.29798 0.4198 0.708984 4.0088 0.708984 8.4198C0.708984 12.8308 4.29798 16.4198 8.70898 16.4198ZM8.70898 2.4198C12.018 2.4198 14.709 5.1108 14.709 8.4198C14.709 11.7288 12.018 14.4198 8.70898 14.4198C5.39998 14.4198 2.70898 11.7288 2.70898 8.4198C2.70898 5.1108 5.39998 2.4198 8.70898 2.4198Z"
                                fill="black" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="d-flex justify-content-center  position-relative z-1">
                    <p class="head text-align-center pt-129 mw-776 pt-50 mx-auto mb-20 fs-lg-62 fs-40">Maitre D – Store Management for Barbers</p>
                </div>
                <div className="d-flex justify-content-center  pt-50 pb-50">
                    <button className="submit-btn">Submit</button>
                </div>
            </div>
        </div>

    )
}

export default Mynav
