import { animate, motion, useMotionValue, useMotionValueEvent, useScroll } from "framer-motion"
import { designImage } from "../../assets"
import Button from "../button/Button"
import NavBar from "./NavBar"
import NavBarMobile from "./NavBarMobile"
import { useState } from "react"
import Toggle from "../Toggle"

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [openToggle, setOpenToggle] = useState(false)

    const { scrollY } = useScroll()
    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 0);
    })

    const handleToggle = () => {
        setOpenToggle(prev => !prev)
    }

    const variantHeader = {
        initial: { y: 0 },
        animate: { y: 6 }
    }

    return (
        <>
            <motion.header
                className={`fixed top-0 left-0 right-0 flex justify-between items-center z-50 px-5 py-2 ${isScrolled ? 'pb-4 shadow-md shadow-slate-300' : ''} transition-all backdrop-blur-xl `}
            >
                <a href="/">
                    <motion.img
                        className={`h-[4rem] lg:hidden`}
                        src={designImage.azure}
                        alt=""
                        variants={variantHeader}
                        initial={isScrolled ? 'initial' : 'animate'}
                        animate={isScrolled ? 'animate' : 'initial'}
                    />
                    <motion.img
                        className={`h-[4rem] hidden lg:flex`}
                        src={designImage.azureLogo}
                        alt=""
                        variants={variantHeader}
                        initial={isScrolled ? 'initial' : 'animate'}
                        animate={isScrolled ? 'animate' : 'initial'}
                    />
                </a>
                <NavBar variant={variantHeader} isScrolled={isScrolled} />
                <NavBarMobile openToggle={openToggle} variant={variantHeader} isScrolled={isScrolled} />
                <Toggle openToggle={openToggle} handleToggle={handleToggle} />
                <motion.div
                    className="hidden md:flex gap-6"
                    variants={variantHeader}
                    initial={isScrolled ? 'initial' : 'animate'}
                    animate={isScrolled ? 'animate' : 'initial'}
                >
                    <Button color={true}>Sign in</Button>
                    <Button>Sign up</Button>
                </motion.div>
            </motion.header>
        </>
    )
}

export default Header