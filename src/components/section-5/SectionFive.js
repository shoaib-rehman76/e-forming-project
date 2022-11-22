import { Fragment, useEffect } from 'react'
import './sectionfive.css'

import { motion, useAnimation } from 'framer-motion'
import img from '../../assets/section-5/Middleman1.png'

import { useInView } from 'react-intersection-observer'

const SectionFive = () => {
    const { ref, inView } = useInView()
    const animation = useAnimation()
    const animation1 = useAnimation()

    useEffect(() => {
        if (inView) {
            animation.start({
                opacity: 1,
                transition: { duration: .5, delay: .5 }
            })
        }
        if (!inView) {
            animation.start({
                opacity: 0,
            })
        }
        if (inView) {
            animation1.start({
                opacity: 1,
                transition: { duration: .5, delay: .5 }
            })
        }
        if (!inView) {
            animation1.start({
                opacity: 0,
            })
        }
    }, [inView])
    return (
        <Fragment>
            <div className="row section-5" style={{ marginTop: '13rem' }}>
                <div className="col-lg-8 mx-auto  text-center">
                    <h1>Give your money the chance to work as hard as you do</h1>
                </div>
            </div>
            <div ref={ref} className="row section-5" style={{ marginTop: '3rem' }}>
                <div className="col-lg-6 text-center text-lg-start">
                    <motion.img
                        src={img} alt="img"
                        animate={animation}
                    />
                </div>
                <motion.div animate={animation1} className="col-lg-6 d-flex justify-content-center flex-column ">
                    <h2 className='text-lg-start'>Middleman Removal</h2>
                    <p className='paragraph'>Middleman will be completly removed by using our app.
                        Farmers will register on our system and upload their products with detailed description
                        they can also get market rate updates and directly sell their products getting paid via app i.e.
                        online transacion.</p>
                </motion.div>
            </div>
        </Fragment>


    )
}

export default SectionFive
