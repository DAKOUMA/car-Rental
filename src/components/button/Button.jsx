import { motion } from "framer-motion"

const Button = ({ color, click, url, children, className }) => {

  return (
    <motion.button
      className={` border border-color-1  px-5 py-1 rounded-md ${color ? 'text-white bg-color-1 border-white' : 'text-color-1 bg-white border-color-1'} ${className}`}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3 }}
      whileTap={{ scale: 0.9 }}
      onClick={(e) => { e.stopPropagation(); click() }}
    >
      {children}
    </motion.button>
  )
}

export default Button