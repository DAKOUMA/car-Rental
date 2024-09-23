import React, { useRef, useState } from 'react'
import { designImage } from '../assets'
import Button from '../components/button/Button'
import DatepickerComponent from '../components/datePicker/DatepickerComponent'
import CarCard from '../components/car-card/CarCard'
import { carList } from '../components/car-card/carData'
import SvgBackground from '../components/svg/SvgBackground'
import { animate, motion } from 'framer-motion'
import { chooseList } from '../components/car-card/chooseData'
import ChooseCard from '../components/car-card/ChooseCard'
import { useNavigate } from 'react-router-dom'
import UserSlider from '../components/Slider/UserSlider'


const Home = () => {
    const availableCarRef = useRef(null)
    const [seeMore, setSeeMore] = useState(false)

    // hook for Datepicker
    const [date, setDate] = useState({
        startDate: null,
        endDate: null
    });

    // function to determine the number of car show
    const handleShowCar = () => {
        if (seeMore) {
            return carList
        } else {
            return [carList[0], carList[3], carList[2]]
        }
    }

    // function to scroll on top of carList
    const handleSeeMore = () => {
        setSeeMore(prev => !prev)
        availableCarRef.current.scrollIntoView({ behavior: 'smooth' });

    }

    let showCar = handleShowCar()


    let choose = chooseList

    // linearGradient style for achievement
    const textGradientStyle = {
        background: `linear-gradient(86deg, rgba(30,182,255,1) 0%, rgba(203,238,255,1) 50%)`,
        backgroundClip: 'text'
    }

    // rotate animation for gradient text of achievement
    const achievementsRotate = {
        initial: { rotateY: 0 },
        animate: {
            rotateY: 360,
            transition: { duration: 3, repeat: Infinity, repeatDelay: 0, ease: 'linear' }
        },
    }

    return (
        <>
            <main className='mx-auto'>
                <article className='relative flex items-center justify-between overflow-visible'>
                    <div className='md:w-1/2  flex flex-col gap-[2rem] px-8'>
                        <p className='text-5xl font-extrabold  '>Easy And Fast Way To <span className='text-color-1 font-bruno'>Rent</span> Your Car</p>
                        <p>We offer A Wide Range Of Rental Cars To Suit your Needs. Wheteher You're Planning A Weekend Getaway, A Business Trip</p>
                        <form className='flex flex-col justify-around items-center gap-2 xl:flex-row'>
                            Pick a date
                            <DatepickerComponent hookDate={[date, setDate]} />
                            <Button click={handleSeeMore} color={true}>Rent Car</Button>
                        </form>
                    </div>
                    <img className='w-1/2 absolute bottom-0 right-0 md:relative -z-10' src={designImage.carLanding} alt="" />
                </article>
                <div className=''>
                    <img src={designImage.carRunRight} alt="" className='absolute left-0 right-0 mx-auto -z-10' />
                </div>
                <article id='rentCar' ref={availableCarRef} className='mt-[9rem] lg:mt-[14rem] mx-auto xl:w-[80%]'>
                    <h1 className='text-4xl font-extrabold text-center mb-[3rem]'>Available Car</h1>
                    <div className='car-container grid md:grid-cols-2 xl:grid-cols-3 gap-10'>
                        {showCar.map((value, index) => (
                            <CarCard
                                key={index}
                                title={value.title}
                                image={value.image}
                                seat={value.seat}
                                person={value.person}
                                door={value.door}
                                gas={value.gas}
                                speed={value.speed}
                                engine={value.engine}
                            />
                        ))}
                    </div>
                </article>
                <div className='flex mt-10'>
                    <Button className={`mx-auto`} click={handleSeeMore} color={true}>
                        show {seeMore ? 'less' : 'more'}
                    </Button>
                </div>
                <article className='mt-[7rem] lg:mt-[7rem] mx-auto xl:w-[80%]'>
                    <h1 className='text-4xl font-extrabold text-center'>Why <span className='text-color-1 font-bruno'>Choose</span> Us ? </h1>
                    <p className='my-10 text-md text-center w-[70%] mx-auto'>Why choose us? A strategy based on the quality of our services, as well as the fulfillment of our customers' expectations, make us the ideal partner.</p>
                    <div className='why-choose-container grid gap-x-6 gap-y-10 md:grid-cols-2'>
                        {choose.map((value, index) => (
                            <ChooseCard index={index} icon={value.icon} title={value.title} text={value.text} variant={value.variants} />
                        ))}
                    </div>
                </article>
                <article className='mt-[7rem] lg:mt-[7rem] mx-auto xl:w-[80%]'>
                    <h1 className='text-4xl font-extrabold text-center'>Our <span className='text-color-1 font-bruno'>Achievement</span> </h1>
                    <p className='my-10 text-md text-center w-[70%] mx-auto'>Our achievements demonstrate our effort as a company and the strength of our collective work.</p>
                    <div className='flex justify-between text-center py-10 px-5 md:w-[80%] lg:w-[90%] md:px-20 lg:px-40 mx-auto border-t border-b '>
                        <div>
                            <motion.h2
                                className='text-4xl font-bold text-transparent'
                                style={textGradientStyle}
                                variants={achievementsRotate}
                                initial='initial'
                                animate='animate'
                            >400</motion.h2>
                            <span className=' font-normal'>Active Member</span>
                        </div>
                        <div>
                            <motion.h2
                                className='text-4xl font-bold text-transparent'
                                style={textGradientStyle}
                                variants={achievementsRotate}
                                initial='initial'
                                animate='animate'
                            >50</motion.h2>
                            <span className=' font-normal' >Car Modal</span>
                        </div>
                        <div>
                            <motion.h2
                                className='text-4xl font-bold text-transparent'
                                style={textGradientStyle}
                                variants={achievementsRotate}
                                initial='initial'
                                animate='animate'
                            >1000 +</motion.h2>
                            <span className=' font-normal'>Positive Rating</span>
                        </div>
                    </div>
                </article>
                <article className='mt-[7rem] lg:mt-[7rem] mx-auto xl:w-[80%]'>
                    <h1 className='text-4xl font-extrabold text-center lg:w-[50%] xl:w-[40%] mx-auto'>What Our <span className='text-color-1 font-bruno'>Customer</span> Have To Say ? </h1>
                    <p className='my-10 text-md text-center w-[70%] mx-auto'>Our achievements demonstrate our effort as a company and the strength of our collective work.</p>
                    <UserSlider />
                </article>
                <article className='relative mt-[7rem] lg:mt-[7rem] p-12  mx-auto xl:w-[70%] bg-color-1 rounded-xl'>
                    <div className='relative z-20'>
                        <h1 className='text-5xl text-white font-extrabold'>Ready To Get <span className='font-bruno text-black'>Started</span> ? </h1>
                        <p className='my-10 text-white font-medium text-xl'>Our achievements demonstrate our effort as a company and the strength of our collective work.</p>
                        <Button>
                            Contact Us
                        </Button>
                    </div>
                    <img className='absolute top-0 bottom-0 right-0 h-full z-10 hidden md:flex' src={designImage.carEnd} alt="" />
                </article>
            </main>
        </>
    )
}

export default Home