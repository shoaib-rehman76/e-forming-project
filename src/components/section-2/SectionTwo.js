import './section2.css'
import img from '../../assets/hero-section/2.jpg'
import { motion, useAnimation } from 'framer-motion'

import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

const SectionTwo = () => {

    const { ref, inView } = useInView()
    const animation = useAnimation()
    const animation1 = useAnimation()

    useEffect(() => {
        if (inView) {
            animation.start({
                opacity: 1,
                x: 0,
                transition: { duration: .3, delay: .3 }
            })
        }
        if (!inView) {
            animation.start({
                opacity: 0,
                x: -10,
            })
        }

        if (inView) {
            animation1.start({
                opacity: 1,
                x: 0,
                transition: { duration: .3, delay: .3 }
            })
        }
        if (!inView) {
            animation1.start({
                opacity: 0,
                x: 0,
            })
        }
    }, [inView])


    return (
        <>
            <div className="row header-top">
                <div className="col-lg-10 mx-auto">
                    <h1>About Us</h1>
                    {/* <p className='paragraph'>It is a digital approach to provide farmers with direct access to markets without involvement of Middlemen, providing advance agricultural practices, direct contact with Agri-Experts,
                        agricultural Hardware Stores, and Logistic module for product delivering service.</p> */}
                </div>
            </div>
            <div ref={ref} className='row section-2 ' >
                <div className="col-lg-6">
                    <motion.div
                        className="section-text mt-5"
                        animate={animation}
                    >
                        <h3>Farmers Profiling</h3>
                        <p className='paragraph'>
                            Are you interested more about farming?Maybe you're curious about the challenges & reward of this career? Well,
                            our Farming Drive App is perfect for you! We are creating
                            profiles for farmers all across the country,
                            and we would love to have your help.</p>
                    </motion.div>
                </div>
                <motion.div
                    className="col-lg-6"
                    animate={animation1}
                >
                    <img src={img} alt="img" />
                </motion.div>
            </div>
        </>

    )
}

export default SectionTwo
