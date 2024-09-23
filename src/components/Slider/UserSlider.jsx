import React from 'react'
import Slider from 'react-slick'
import { userList } from '../car-card/userData';
import UserCard from '../car-card/UserCard';

const UserSlider = () => {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    dots: true,
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    cssEase: "linear",
                    pauseOnHover: true
                }
            },
            {
                breakpoint: 700,
                settings: {
                    dots: true,
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    cssEase: "linear",
                    pauseOnHover: true
                }
            },
        ]
    };

    return (
        <Slider {...settings} className='p-'>
            {userList.map((value, index) => (
                <UserCard key={index} name={value.name} photo={value.photo} title={value.title} text={value.text} />
            ))}
        </Slider>
    )
}

export default UserSlider