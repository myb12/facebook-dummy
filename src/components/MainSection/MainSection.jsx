import React from 'react';
import './MainSection.css';
import StorySection from '../StorySection/StorySection';
import WhatsOnYourMind from '../WhatsOnYourMind/WhatsOnYourMind';
import RoomSlider from '../RoomSlider/RoomSlider';

const MainSection = () => {
    return (
        <div className="container-fluid">
            <div className="row mt-4 ">
                <div className="col-lg-3">

                </div>
                <div className="col-lg-6">
                    <StorySection />
                    <WhatsOnYourMind />
                    <RoomSlider />
                </div>
                <div className="col-lg-3">

                </div>
            </div>
        </div>
    );
};

export default MainSection;