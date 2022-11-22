import './section3.css'
import img from '../../assets/hero-section/4.jpg'

import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'

const SectionThree = () => {
    const { ref, inView } = useInView()
    const animation = useAnimation()
    const animation1 = useAnimation()

    useEffect(() => {

        if (inView) {
            animation.start({
                opacity: 1,
                y: 0,
                transition: { duration: .3 }
            })
        }
        if (!inView) {
            animation.start({
                opacity: 0,
                y: -50,
            })
        }

        if (inView) {
            animation1.start({
                opacity: 1,
                y: 0,
                transition: { duration: .3 }
            })
        }
        if (!inView) {
            animation1.start({
                opacity: 0,
                y: 50,
            })
        }
    }, [inView])
    return (
        <div ref={ref} className='row section-3' style={{ marginTop: '13rem' }}>
            <motion.div
                animate={animation}

                className="col-lg-6"
            >
                <img src={img} alt="img" />
            </motion.div>
            <div className="col-lg-6">
                <motion.div
                    className="section-text ms-lg-5 mt-5"
                    animate={animation1}
                // ref={ref}
                >
                    <h3>Driver</h3>
                    <p className='paragraph'> We will reach out drivers owning transportation and get them registered with us, Farmers or Local User will be enable to hire them any time and get their services.It will benefit the Drivers as well as the Local User and Farmers. </p>
                </motion.div>
            </div>
        </div>
    )
}

export default SectionThree
