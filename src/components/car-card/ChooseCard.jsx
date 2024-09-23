import { motion } from 'framer-motion'
import React from 'react'

const chooseCard = ({ icon, text, title, variant }) => {
  let variants = variant

  return (
    <>
      <motion.div
        className='flex flex-row gap-10 items-start border-b border-t px-4 py-10 w-[80%] mx-auto'
        variants={variants}
        initial={variants.hidden}
        whileInView={variants.visible}
        transition={{ duration: 2, type: 'spring', stiffness: 30, delay: 0.4, mass: 2 }}
      >
        <img className=' w-10 bg-color-1 rounded-lg p-1' src={icon} alt="" />
        <div>
          <h1 className='text-xl font-semibold'>{title}</h1>
          <p>{text}</p>
        </div>
      </motion.div>
    </>
  )
}

export default chooseCard