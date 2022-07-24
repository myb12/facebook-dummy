import React from 'react';
import './RoomSlider.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdVideoCall } from 'react-icons/md';

const RoomSlider = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 7,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 7,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='mt-4 px-0 px-lg-5'>
            <div className='room-slider'>
                <Slider {...settings}>
                    <div>
                        <div className="create-room">
                            <svg stroke="currentColor" fill="url(#grad1)" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" style={{ stopColor: '#763ee6', stopOpacity: 1 }} />
                                        <stop offset="100%" style={{ stopColor: '#db1a8b', stopOpacity: 1 }} />
                                    </linearGradient>
                                </defs>
                                <path fill="none" d="M0 0h24v24H0V0z"></path>
                                <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z"></path>
                            </svg>
                            <span>Create room</span>
                        </div>
                    </div>
                    <div></div>

                    {
                        [...new Array(15)].map((el, i) => <div key={i} className="slider-item ">
                            <img className="user-icon" src="https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-1/262295709_5351580041524973_229989686152442541_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=103&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeGz5ABa-fKIuG-FuzCLvnMc5yX41LpJrjDnJfjUukmuMI4enOsSteOYtpbbRnCwFld_07k0fKCrUyAqcRKKDI5k&_nc_ohc=nOKUEXRfAZMAX8aidrf&_nc_ht=scontent.fdac138-1.fna&oh=00_AT-U0HuesRJbJ8QrdMKH79knBg5sLCW9xE14wQRzIC74ZQ&oe=62E2E091" alt="" />
                        </div>)
                    }


                </Slider>
            </div>
        </div>
    );
};

export default RoomSlider;