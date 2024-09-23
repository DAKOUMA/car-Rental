import { text } from "framer-motion/client";
import { iconImage } from "../../assets";

const chooseList = [
    {
        title: 'Best Price',
        icon: iconImage.speed,
        text: "You won't find prices as competitive as ours anywhere else. All types of vehicles corresponding to all types of portfolio.",
        variants: {
            hidden: { x: -100, opacity: 0 },
            visible: { x: 0, opacity: 1 }
        }
    },
    {
        title: '24/7 support',
        icon: iconImage.phone,
        text: "A telephone number will be given to you, so you can contact us at any time. We offer our customers 24/7 support.",
        variants: {
            hidden: { x: 100, opacity: 0 },
            visible: { x: 0, opacity: 1 }
        }
    },
    {
        title: 'Protection',
        icon: iconImage.shield,
        text: "Insurance, vehicle documents, all in accordance with the rules. Enjoy your stay without worrying about anything.",
        variants: {
            hidden: { x: -100, opacity: 0 },
            visible: { x: 0, opacity: 1 }
        }
    },
    {
        title: 'Free cancelation',
        icon: iconImage.cancel,
        text: "No penalty will be imposed on you, provided that the cancellation is made 24 hours before the start of your rental.",
        variants: {
            hidden: { x: 100, opacity: 0 },
            visible: { x: 0, opacity: 1 }
        }
    },
]

export { chooseList }