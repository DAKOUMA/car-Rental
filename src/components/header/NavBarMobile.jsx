import React from 'react'
import Button from '../button/Button'
import { AnimatePresence, motion } from 'framer-motion'

const NavBarMobile = ({ variant, isScrolled, openToggle }) => {
  const containerVariants = {
    initial: {
      opacity: 0,
      scale: 0
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.2
      }
    }
  }
  return (
    <>
      <AnimatePresence>
        {
          openToggle ?
            <motion.nav
              className={`md:hidden absolute right-5 bottom-[-250%] w-[30%] sm:w-[20%] navMobile`}

            >
              <motion.ul
                className='flex flex-col w-[100%]  justify-between items-center gap-4 py-3'
                variants={containerVariants}
                initial='initial'
                animate='animate'
                exit='initial'
              >
                <motion.li variants={containerVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='text-lg font-medium bg-color-1 border p-1 rounded-lg w-full'><a className='block text-center' href='#'>Home</a></motion.li>
                <motion.li variants={containerVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='text-lg font-medium bg-color-1 border p-1 rounded-lg w-full'><a className='block text-center' href='#rentCar'>Rent Car</a></motion.li>
                <motion.li variants={containerVariants} ><Button color={true}>Sign in</Button></motion.li>
                <motion.li variants={containerVariants} ><Button>Sign up</Button></motion.li>
              </motion.ul>
            </motion.nav>
            : ''
        }
      </AnimatePresence>
    </>
  )
}

export default NavBarMobile