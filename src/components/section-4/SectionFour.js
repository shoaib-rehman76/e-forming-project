
import './section4.css'
import img from '../../assets/hero-section/3.jpg'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'

const SectionFour = () => {
    const { ref, inView } = useInView()
    const animation = useAnimation()
    const animation1 = useAnimation()

    useEffect(() => {
        if (inView) {
            animation.start({
                opacity: 1,
                y: 0,
                x: 0,
                transition: { duration: .6, delay: .3 }
            })
        }
        if (!inView) {
            animation.start({
                opacity: 0,
                y: -100,
                x: 0,
            })
        }
        if (inView) {
            animation1.start({
                opacity: 1,
                y: 0,
                x: 0,
                transition: { duration: .6, delay: .3 }
            })
        }
        if (!inView) {
            animation1.start({
                opacity: 0,
                y: -100,
                x: -50,
            })
        }
    }, [inView])

    return (
        <div className='row section-4' style={{ marginTop: '13rem' }}>
            <div className="col-lg-6">
                <motion.div
                    className="section-text"
                    animate={animation1}
                    ref={ref}
                >
                    <h3>E-Learning</h3>
                    <p className='paragraph'>We provide learners with knowledge & skills they need to successfully operate a small farm.The program includes videos, quizzes, & interactive case studies, all of which are design to help you learn everything from the beginning to end.</p>
                </motion.div>
            </div>
            <motion.div
                className="col-lg-6"
                animate={animation}
                ref={ref}
            >
                <img src={img} alt="img" />
            </motion.div>
        </div>
    )
}

export default SectionFour
