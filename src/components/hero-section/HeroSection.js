import { Fragment } from 'react'
import './hero.css'

import { motion } from 'framer-motion'

const HeroSection = () => {
    return (
        <Fragment>
            <div id='hero-section' className="container-fluid hero-section">
                <div className="row ">
                    <div className="col-lg-6 mx-auto">
                        <div className="hero-text">
                            <h1 className='text-center text-capitalize'>digitizing farming value chain</h1>
                            <p>A digital platform for farmers and agricultural businesses to sell and buy agricultural commodities
                                directly without the need for middleman to maximize productivity & profitability.</p>
                            <div className="buttons">
                                <motion.button
                                    initial={{ scale: 1, y: 0 }}
                                    whileHover={{
                                        y: -2,
                                    }}
                                >Download IOS</motion.button>
                                <motion.button
                                    initial={{ scale: 1, y: 0 }}
                                    whileHover={{
                                        y: -2,
                                    }}
                                >Download Andriod</motion.button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default HeroSection
