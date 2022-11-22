import React from 'react'
import './badge.css'

import logo from '../../assets/FD Logos/FD_White.svg'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'

const Badge = () => {
    const { isShow } = useSelector((state) => state.badge)
    return (
        <>
            {
                !isShow &&
                <motion.div
                    className='badge d-flex justify-content-between align-items-center'
                // initial={{ opacity: 0, scale: .7 }}
                // animate={{ opacity: 1, scale: 1 }}
                // transition={{ duration: .3, }}
                >
                    <img src={logo} alt="" />
                    <div className="text text-start">
                        <h6 className='p-0 m-0'>Acorns</h6>
                        <small className='p-0 m-0'>Over 11 million sign ups</small>
                    </div>
                    <button>Get start</button>
                </motion.div>
            }
        </>
    )
}

export default Badge
