import React from 'react'
import { designImage, iconImage } from '../../assets'

const Footer = () => {

    return (
        <footer className='bg-color-1 mt-32 flex flex-col gap-10 items-center text-center justify-around p-10 text-white lg:flex-row lg:items-start lg:text-left'>
            <div>
                <img className='w-[20rem]' src={designImage.azureLogoWhite} alt="" />
                <p></p>
            </div>
            <div>
                <h1 className='text-lg font-normal underline-offset-4 underline mb-3 '>Page</h1>
                <ul className='lg:flex lg:flex-col lg:gap-2'>
                    <li><a href="#">Home</a></li>
                    <li><a href="">Rent Car</a></li>
                </ul>
            </div>
            <div>
                <h1 className='text-lg font-normal underline-offset-4 underline mb-3 '>Adress</h1>
                <p>Cite Procoops plle 31/22 Bazary-kely, Toamasina 501, Madagascar</p>
            </div>
            <div >
                <h1 className='text-lg font-normal underline-offset-4 underline mb-3 '>Contact</h1>
                <ul className='lg:flex lg:flex-col lg:gap-2'>
                    <li>
                        <a className='flex gap-3 items-center' href="">
                            <img className='w-6' src={iconImage.phoneWhite} alt="" />
                            <span>+261 32 42 672 35</span>
                        </a>
                    </li>
                    <li>
                        <a className='flex gap-3 items-center' href="https://www.linkedin.com/in/anselme-ramerison-066999186/">
                            <img className='w-6' src={iconImage.linkedin} alt="" />
                            <span>Ramerison Anselme</span>
                        </a>
                    </li>
                    <li>
                        <a className='flex gap-3 items-center' href="mailto:ramerison.anselme@gmail.com">
                            <img className='w-6' src={iconImage.email} alt="" />
                            <span>ramerison.anselme@gmail.com</span>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer