import { motion } from 'framer-motion'
import React from 'react'

const NavBar = ({ isScrolled }) => {
  const variantHeader = {
    initial: { y: 0, },
    animate: { y: 10 }
  }

  return (
    <>
      <motion.nav
        className='hidden md:flex self-center'
        variants={variantHeader}
        initial={isScrolled ? 'initial' : 'animate'}
        animate={isScrolled ? 'animate' : 'initial'}
      >
        <ul className='flex w-[100%] gap-20 justify-between'>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='text-lg font-medium'><a href='#'>Home</a></motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='text-lg font-medium'><a href='#rentCar'>Rent Car</a></motion.li>
        </ul>
      </motion.nav>
    </>
  )
}

export default NavBar