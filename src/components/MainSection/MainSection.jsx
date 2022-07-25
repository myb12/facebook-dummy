import React from 'react';
import './MainSection.css';
import StorySection from '../StorySection/StorySection';
import WhatsOnYourMind from '../WhatsOnYourMind/WhatsOnYourMind';
import RoomSlider from '../RoomSlider/RoomSlider';
import Posts from '../Posts/Posts';
import MainSectionLeft from '../MainSectionLeft/MainSectionLeft';

const MainSection = () => {
    return (
        <div className="container-fluid">
            <div className="row" style={{ marginTop: 82 }}>
                <div className="col-lg-3 px-0 d-none d-lg-block">
                    <MainSectionLeft />
                </div>
                <div className="col-lg-6 px-2 px-lg-0 px-lg-5 main-section">
                    <div className="">
                        <StorySection />
                        <WhatsOnYourMind />
                        <RoomSlider />
                        <Posts />
                    </div>
                </div>
                <div className="col-lg-3">

                </div>
            </div>
        </div>
    );
};

export default MainSection;