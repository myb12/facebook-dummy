import React from 'react';
import './MainSection.css';
import StorySection from '../StorySection/StorySection';
import WhatsOnYourMind from '../WhatsOnYourMind/WhatsOnYourMind';
import RoomSlider from '../RoomSlider/RoomSlider';
import Posts from '../Posts/Posts';

const MainSection = () => {
    return (
        <div className="container-fluid">
            <div className="row" style={{ marginTop: 82 }}>
                <div className="col-lg-3">

                </div>
                <div className="col-lg-6 px-0 px-lg-5">
                    <StorySection />
                    <WhatsOnYourMind />
                    <RoomSlider />
                    <Posts />
                </div>
                <div className="col-lg-3">

                </div>
            </div>
        </div>
    );
};

export default MainSection;