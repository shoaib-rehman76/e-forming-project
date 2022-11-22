import { useEffect, useState } from 'react'
import './animate.css'

import { useSelector, useDispatch } from 'react-redux'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import { animateSectionHandler } from '../../redux/animateSectionReducer'

import img from '../../assets/animate-section/Farming Drive Mockups/Order Successful.png'
import bg from '../../assets/animate-section/Farming Drive Mockups/bg.png'
import blue from '../../assets/animate-section/Assests PNGs/Blue.png'
import black from '../../assets/animate-section/Assests PNGs/Black.png'
import green from '../../assets/animate-section/Assests PNGs/Green.png'
import darkGreen from '../../assets/animate-section/Assests PNGs/Dark Green.png'
import hardware from '../../assets/animate-section/Assests PNGs/Minimal White.png'
import gray from '../../assets/animate-section/Assests PNGs/Gray.png'

import farmer from '../../assets/animate-section/Ellipse PNGs/Farmers Profile.png'
import elearning from '../../assets/animate-section/Ellipse PNGs/E-Learning.png'
import hardwarestore from '../../assets/animate-section/Ellipse PNGs/Hardware Stores.png'
import logistics from '../../assets/animate-section/Ellipse PNGs/Logistics.png'

import learningprofile from '../../assets/animate-section/4 Mockups/E-Learning.png'
import farmerProfile from '../../assets/animate-section/4 Mockups/Farmers Profile.png'
import hardwareProfile from '../../assets/animate-section/4 Mockups/Hardware.png'
import logisticProfile from '../../assets/animate-section/4 Mockups/Logistics.png'
import { getContentArrayHandler } from '../../redux/getContentArray'


const AnimateSection = () => {

    let [data, setData] = useState([])
    let [state, setState] = useState(false);
    const { ref, inView } = useInView()
    const animation = useAnimation()
    const dispatch = useDispatch()

    useEffect(() => {
        if (inView) {
            animation.start({
                opacity: 1,
                transition: { duration: 3 }
            })
        }
        if (!inView) {
            animation.start({
                opacity: 0,
            })
        }
    }, [inView])

    const contentArray = [
        {
            img: farmerProfile,
            header: `Farmer's Profiling`,
            heading: 'Take a first step for your better future',
            paragraph: `Are you interested more about farming? Maybe you're curious about the challenges & reward of this career? Well, our Farming Drive App is perfect for you! We are creating profiles for farmers all across the country, and we would love to have your help.`,
            color: 'black'
        },
        {
            img: learningprofile,
            header: 'E-learning',
            heading: `Oppertunity for farmer's to increase productivity`,
            paragraph: 'We provide learners with knowledge & skills they need to successfully operate a small farm.The program includes videos, quizzes, & interactive case studies, all of which are design to help you learn everything from the beginning to end.',
            color: 'black'
        },
        {
            img: hardwareProfile,
            header: 'Hardware store',
            heading: 'Access to get good quality farming tools',
            paragraph: 'Hardware stores catering to farmers offer a wide variety of products, including tractors, combines, harvesters, pumps, seeding machines, and more. Hardware stores need to register on our system with detailed product description. Farmers can buy or rent farming tools directly from the stores.',
            color: 'black'
        },
        {
            img: logisticProfile,
            header: 'Logistics',
            heading: 'Keep Track of your order',
            paragraph: 'Providing logistics enables one to keep track of the order. Not only to farmers need accurate information about their products but they also need to confident that the goods will arrive in good condition in time.',
            color: 'black'

        },
    ]

    useEffect(() => {
        dispatch(getContentArrayHandler(contentArray))
    }, [dispatch])


    const dataHandler = (id) => {
        setState(true)
        const data = contentArray.filter((item, index) => {
            if (index === id) {
                return item
            }
        })
        setData(data)
        console.log(data);
        return
    }

    return (
        <>
            <div ref={ref} id='our-products' className="container-fluid animate-section" style={{ marginTop: "7rem", position: 'relative' }}>
                <div className="row">
                    <div className="col-lg-7 mx-auto text-center">
                        <h1 style={{ fontSize: '3rem', fontWeight: '700' }}>Our Product</h1>
                    </div>
                </div>
                {inView &&
                    <>
                        <div className="container">
                            <motion.div
                                className="row animate-section-row-1"
                                initial={{
                                    opacity: 0,
                                    display: 'block'
                                }}
                                animate={{ opacity: [1, 0], transition: { duration: 3, } }}
                            >
                                <div
                                    className='col-lg-10 mx-auto'
                                >
                                    <div className="images text-center">
                                        <motion.img
                                            src={bg} className='bg-img' alt="bg-img"
                                            initial={{ opacity: 1, scale: 1 }}
                                            animate={{ opacity: 0, scale: 0 }}
                                            transition={{ duration: .8, delay: .2 }}
                                        />
                                        <motion.img
                                            src={img} className='mobile-img' alt="img"
                                            initial={{ opacity: 1, scale: 1 }}
                                            animate={{ opacity: 0, scale: 0 }}
                                            transition={{ duration: 1, delay: .2 }}
                                        />
                                        <motion.img
                                            src={blue} alt="blue" className='blue-img'
                                            initial={{ y: 0, opacity: 1 }}
                                            animate={{ y: -60, opacity: 0 }}
                                            transition={{ duration: .8, delay: .2 }}
                                        />
                                        <motion.img
                                            src={black} alt="black" className='black-img'
                                            initial={{ x: 0, opacity: 1 }}
                                            animate={{ x: -60, opacity: 0 }}
                                            transition={{ duration: .8, delay: .2 }}
                                        />
                                        <motion.img
                                            src={green} alt="green" className='green-img'
                                            initial={{ x: 0, opacity: 1 }}
                                            animate={{ x: -60, opacity: 0 }}
                                            transition={{ duration: .8, delay: .2 }}
                                        />
                                        <motion.img
                                            src={darkGreen} alt="dark-green" className='darkgreen-img'
                                            initial={{ x: 0, opacity: 1 }}
                                            animate={{ x: 60, opacity: 0 }}
                                            transition={{ duration: .8, delay: .2 }}
                                        />
                                        <motion.img
                                            src={hardware} alt="hardware" className='hardware-img'
                                            initial={{ x: 0, opacity: 1 }}
                                            animate={{ x: 60, opacity: 0 }}
                                            transition={{ duration: .8, delay: .2 }}
                                        />
                                        <motion.img
                                            src={gray} alt="gray" className='gray-img'
                                            initial={{ x: 0, opacity: 1 }}
                                            animate={{ x: 60, opacity: 0 }}
                                            transition={{ duration: .8, delay: .2 }}
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* ======== section-2 ============== */}
                        <motion.div

                            className='row px-4 animate-section-row-2'
                            style={{ marginTop: '5rem' }}
                            initial={{
                                opacity: 0,
                                scale: 0
                            }}
                            animate={{
                                opacity: [0, 1],
                                scale: 1,
                                transition: { duration: 2 }
                            }}
                        >

                            <div className="col-lg-6 d-flex gap-2">
                                <div className="btn-image d-flex flex-column align-items-center gap-3 mt-4">
                                    <motion.img
                                        src={farmer}
                                        alt="invest"
                                        initial={{ opacity: .5, scale: 1, x: -30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: .3, delay: 2 }}
                                        onClick={() => { dataHandler(0) }}
                                    />

                                    <motion.img
                                        src={elearning}
                                        alt="invest"
                                        initial={{ opacity: .5, scale: 1, x: -30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: .3, delay: 2.1 }}

                                        onClick={() => { dataHandler(1) }}

                                    />

                                    <motion.img
                                        src={hardwarestore}
                                        alt="invest"
                                        initial={{ opacity: .5, scale: 1, x: -30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: .3, delay: 2.2 }}

                                        onClick={() => { dataHandler(2) }}
                                    />
                                    <motion.img
                                        src={logistics}
                                        alt="invest"
                                        initial={{ opacity: .5, scale: 1, x: -30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: .3, delay: 2.3 }}

                                        onClick={() => { dataHandler(3) }}
                                    />
                                </div>
                                {state
                                    ? <>
                                        {
                                            data?.map((item) => (

                                                <div className="mobile-img text-center">
                                                    <img src={item?.img} alt="emobile" />
                                                </div>

                                            ))
                                        }
                                    </>
                                    :
                                    <div className="mobile-img text-center">
                                        <img src={farmerProfile} alt="emobile" />
                                    </div>
                                }

                            </div>

                            {state &&
                                <> {
                                    data.map((item, index) => (
                                        <div key={index} className="col-lg-6 my-auto">
                                            <div className="mobile-text d-flex flex-column justify-content-center ">
                                                <small>{item.header}</small>
                                                <h2 className='my-4'>{item.heading}</h2>
                                                <p>{item.paragraph}</p>
                                                <button className='mt-3'>Get Started</button>
                                            </div>
                                        </div>
                                    ))
                                }
                                </>
                            }

                            {!state && <div className="col-lg-6 my-auto">
                                <div className="mobile-text d-flex flex-column justify-content-center ">
                                    <small>Farmer's Profiling </small>
                                    <h2 className='my-4'>Take a first step for your better future</h2>
                                    <p>Are you interested more about farming? Maybe you're curious about the challenges & reward of this career? Well, our Farming Drive App is perfect for you! We are creating profiles for farmers all across the country, and we would love to have your help.
                                    </p>
                                    <button className='mt-3'>Get Started</button>
                                </div>
                            </div>}

                        </motion.div>
                    </>

                }
            </div>

        </>
    )
}

export default AnimateSection
