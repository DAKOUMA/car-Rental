import { motion } from 'framer-motion'
import React from 'react'

const UserCard = ({ name, photo, title, text }) => {

    return (
        <motion.div
            className='p-6 border rounded-lg bg-slate-50 mt-6 mb-14 mx-8 shadow-xl'
            whileHover={{ scale: 1.1, background: '#FFFFFF', zIndex: 20 }}
        >
            <img src={photo} className='w-20 rounded-full border' alt="" />
            <h1 className='text-2xl mt-4'>{name}</h1>
            <h2 className='text-gray-600 mb-4 font-medium'>{title}</h2>
            <p className='text-gray-600'>{text}</p>
        </motion.div>
    )
}

export default UserCard