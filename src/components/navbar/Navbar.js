import { Fragment } from 'react'
import './navbar.css'
import { motion } from 'framer-motion'

import logo from '../../assets/FD Logos/FD Logo PNG.png'
import { FiMenu } from 'react-icons/fi'
import { Link, useLocation } from 'react-router-dom'


const Navbar = () => {

    const location = useLocation()

    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid px-lg-5">
                    <img src={logo} alt='logo' className="navbar-brand" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i><FiMenu /></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to='/' className="nav-link" aria-current="page">Home</Link>
                            </li>
                            {location.pathname === '/'
                                ? <>
                                    <li className="nav-item">
                                        <a href='#our-products' className="nav-link" aria-current="page">Our Products</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" aria-current="page" href="#about-us">About Us</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" aria-current="page" href="#contact-us">Contact Us</a>
                                    </li>
                                </> : ''

                            }

                            <li className="nav-item">
                                <Link to='/privacy' className="nav-link" >Privacy</Link>
                            </li>
                        </ul>
                        <form className="d-flex btns">
                            {/* <span>Log in</span> */}
                            <motion.button
                                className="btn btn-outline-success"
                                type="submit"

                                initial={{ scale: 1, y: 0 }}
                                whileHover={{
                                    y: -2,
                                }}
                            >
                                Get started</motion.button>
                        </form>
                    </div>
                </div>
            </nav>
        </Fragment >
    )
}

export default Navbar
