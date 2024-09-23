import React, { useState } from 'react'
import { iconImage } from '../../assets'
import Button from '../button/Button'
import { Carousel } from "flowbite-react";
import { AnimatePresence, motion } from 'framer-motion';
import './carCard.css'
import CarSlider from '../Slider/CarSlider';

const CarCard = ({ title, image, seat, person, door, gas, speed, engine }) => {
    const [open, setOpen] = useState(false)

    const [, ...sliderImage] = image

    const overlayAnimation = {
        hidden: {
            scale: 0,
            opacity: 0,
            transition: {
                when: 'beforeChildren'
            }
        },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                when: 'beforeChildren'
            }
        }
    }

    const closeOverlay = () => {
        setOpen(false)
    }

    return (
        <>
            <motion.div
                className=' border rounded-lg p-5 mx-auto flex flex-col gap-8 car-card cursor-pointer'
                initial={{ background: 'linear-gradient(177deg, rgba(160,218,246,1) 0%, rgba(255,255,255,1) 0%)' }}
                whileHover={{ background: 'linear-gradient(177deg, rgba(160,218,246,1) 0%, rgba(255,255,255,1) 67%)' }}
                onClick={() => setOpen(true)}
            >
                <img src={image[0]} alt="" />
                <h1 className='text-xl font-medium border-b-2 pb-1'>{title}</h1>
                <div className='grid grid-cols-3 gap-3'>
                    <div className='flex items-center gap-1'>
                        <img className='w-3 color-1' src={iconImage.seat} alt="" />
                        <span className='text-sm font-light'>{seat} seat</span>
                    </div>
                    <div className='flex items-center gap-1'>
                        <img className='w-3 color-1' src={iconImage.engine} alt="" />
                        <span className='text-sm font-light'>{engine}</span>
                    </div>
                    <div className='flex items-center gap-1'>
                        <img className='w-3 color-1' src={iconImage.gas} alt="" />
                        <span className='text-sm font-light'>"{gas}"</span>
                    </div>
                    <div className='flex items-center gap-1'>
                        <img className='w-3 color-1' src={iconImage.person} alt="" />
                        <span className='text-sm font-light'>{person} person</span>
                    </div>
                    <div className='flex items-center gap-1'>
                        <img className='w-3 color-1' src={iconImage.door} alt="" />
                        <span className='text-sm font-light'>{door} door</span>
                    </div>
                    <div className='flex items-center gap-1'>
                        <img className='w-3 color-1' src={iconImage.speed} alt="" />
                        <span className='text-sm font-light'>{speed} Km</span>
                    </div>
                </div>
                <div className='flex flex-row justify-around' >
                    <span className='text-2xl font-semibold'>120$ <span className=' text-slate-300'>/ DAY</span></span>
                    <Button>
                        Rent Car</Button>
                </div>
            </motion.div>
            <CarSlider
                open={open}
                overlayAnimation={overlayAnimation}
                sliderImage={sliderImage}
                setOpen={closeOverlay}
            />
        </>
    )
}

export default CarCard