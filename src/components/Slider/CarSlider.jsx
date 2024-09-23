import { Carousel } from "flowbite-react";
import { AnimatePresence, motion } from 'framer-motion';

const CarSlider = ({ open, overlayAnimation, sliderImage, setOpen }) => {

    return (
        <AnimatePresence>
            {open ?
                <motion.div
                    className='fixed right-0 left-0 top-0 bottom-0 flex items-center overlay-container'
                    onClick={() => setOpen(false)}
                    variants={overlayAnimation}
                    initial='hidden'
                    animate='visible'
                    exit='hidden'
                >
                    <motion.div
                        variants={overlayAnimation}
                        className=' w-[90%] lg:w-[60%] aspect-video h-min mx-auto caroussel-container'
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Carousel>
                            {sliderImage.map((value, index) => (
                                <img className='aspect-video' src={value} key={index}></img>
                            ))}
                        </Carousel>
                    </motion.div>
                </motion.div> : ''
            }
        </AnimatePresence>
    )
}

export default CarSlider