import './footer.css'

import logo from '../../assets/FD Logos/FD Logo JPG.jpg'
import { BsTwitter, BsInstagram, BsFacebook, BsLinkedin } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import { useState } from 'react'

const Footer = () => {

    const { contentArray } = useSelector((state) => state.content)
    const [data, setData] = useState([])
    console.log(contentArray);

    const dataHandler = (id) => {
        const data = contentArray.filter((item, index) => {
            if (index === id) {
                return item
            }
        })
        setData(data)
        return
    }

    console.log(data);
    return (
        <>
            <div className="row footer text-center text-lg-start mt-5">
                <div className="col-lg-4 mt-5">
                    <h2>Have any questions?</h2>
                    <button>Contact Support</button>
                </div>
                <div className="col-lg-4 d-flex justify-content-center mt-5 mt-lg-0">
                    <div>
                        <h5>PRODUCTS</h5>
                        <ul className='p-0  m-0'>
                            <li onClick={() => { dataHandler(0) }}>Farmer Profiling</li>
                            <li onClick={() => { dataHandler(1) }}>E-Learning</li>
                            <li onClick={() => { dataHandler(2) }}>Hardware Store</li>
                            <li onClick={() => { dataHandler(3) }}>Logistics</li>
                        </ul>
                    </div>

                </div>
                <div className="col-lg-4 d-flex justify-content-center mt-5 mt-lg-0">
                    <div>
                        <h5>Who We Are</h5>
                        <ul className='p-0 m-0'>
                            <li> <a href='#hero-section'> Home </a> </li>
                            <li> <a href='#our-products'> Our Products </a> </li>
                            <li> <a href='#about-us'> About Us </a> </li>
                            <li> <a href='#contact-us'> Contact Us </a> </li>
                        </ul>
                    </div>

                </div>
            </div>
            <div className="row footer-end d-flex align-items-center justify-content-lg-between" style={{ marginTop: '4rem' }}>
                <div className="col-lg-3 text-center text-lg-start">
                    <img src={logo} alt="img" />
                </div>
                <div className="col-lg-4 ">
                    <ul className='d-flex mt-lg-3 justify-content-center justify-content-lg-start gap-4'>
                        <li>Pricing </li>
                        <li>Store </li>
                        <li>Legal </li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="col-lg-4 ps-4 mb-3 mb-lg-0 text-center text-lg-end ps-lg-0">
                    <i><BsFacebook /></i>
                    <i><BsLinkedin /></i>
                    <i><BsInstagram /></i>
                    <i><BsTwitter /></i>
                </div>

            </div>
        </>
    )
}

export default Footer
