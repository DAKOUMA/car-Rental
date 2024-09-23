import { animate, AnimatePresence, motion } from 'framer-motion'
import React from 'react'

const Toggle = ({ openToggle, handleToggle }) => {
    const variantsToggle = {
        initial: { rotateZ: 0, x: 0, y: 0 },
        animateUp: { rotateZ: -45, y: 10 },
        animateDown: { rotateZ: 45, y: 23 },
        animateCenter: { x: '100vh' }
    }
    return (
        <svg
            className='md:hidden'
            onClick={() => handleToggle()}
            width="4rem"
            height="4rem"
            viewBox="0 0 150 100"
            version="1.1"
            id="svg1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <defs id="defs1" />
            <g id="layer1">
                <motion.path
                    variants={variantsToggle}
                    initial={openToggle ? 'initial' : 'animateUp'}
                    animate={openToggle ? 'animateUp' : 'initial'}
                    id="rect1"
                    style={{
                        opacity: 1,
                        fill: '#3fb6f0',
                        strokeWidth: 17.3627,
                        strokeLinecap: 'square',
                        strokeMiterlimit: 4.9,
                        originX: 1,
                        originY: 0
                    }}
                    d="M 30.821168,16.538469 H 119.17883 c 3.70414,0 6.68617,2.982032 6.68617,6.68617 0,3.704138 -2.98203,6.68617 -6.68617,6.68617 H 30.821168 c -3.704138,0 -6.68617,-2.982032 -6.68617,-6.68617 0,-3.704138 2.982032,-6.68617 6.68617,-6.68617 z"
                />
                <motion.path
                    variants={variantsToggle}
                    initial={openToggle ? 'initial' : 'animateCenter'}
                    animate={openToggle ? 'animateCenter' : 'initial'}
                    id="rect2"
                    style={{
                        opacity: 1,
                        fill: '#3fb6f0',
                        strokeWidth: 17.3627,
                        strokeLinecap: 'square',
                        strokeMiterlimit: 4.9,
                    }}
                    d="M 30.821168,43.203533 H 119.17883 c 3.70414,0 6.68617,2.982032 6.68617,6.68617 0,3.704138 -2.98203,6.686169 -6.68617,6.686169 H 30.821168 c -3.704138,0 -6.68617,-2.982031 -6.68617,-6.686169 0,-3.704138 2.982032,-6.68617 6.68617,-6.68617 z"
                />
                <motion.path
                    variants={variantsToggle}
                    initial={openToggle ? 'initial' : 'animateDown'}
                    animate={openToggle ? 'animateDown' : 'initial'}
                    id="rect3"
                    style={{
                        opacity: 1,
                        fill: '#3fb6f0',
                        strokeWidth: 17.3627,
                        strokeLinecap: 'square',
                        strokeMiterlimit: 4.9,
                        originX: 1,
                        originY: 1
                    }}
                    d="M 30.821168,69.868599 H 119.17883 c 3.70414,0 6.68617,2.982032 6.68617,6.68617 0,3.704138 -2.98203,6.686169 -6.68617,6.686169 H 30.821168 c -3.704138,0 -6.68617,-2.982031 -6.68617,-6.686169 0,-3.704138 2.982032,-6.68617 6.68617,-6.68617 z"
                />
            </g>
        </svg>
    )
}

export default Toggle