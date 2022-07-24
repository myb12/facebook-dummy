import React from 'react';
import './MainSection.css';
import StorySection from '../StorySection/StorySection';
import WhatsOnYourMind from '../WhatsOnYourMind/WhatsOnYourMind';

const MainSection = () => {
    return (
        <div className="container-fluid">
            <div className="row mt-4 ">
                <div className="col-md-3">

                </div>
                <div className="col-md-6">
                    <StorySection />
                    <WhatsOnYourMind />

                </div>
                <div className="col-md-3">

                </div>
            </div>
        </div>
    );
};

export default MainSection;