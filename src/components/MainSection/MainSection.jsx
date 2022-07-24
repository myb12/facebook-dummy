import React from 'react';
import './MainSection.css';
import StorySection from '../StorySection/StorySection';

const MainSection = () => {
    return (
        <div className="container-fluid">
            <div className="row mt-4 ">
                <div className="col-md-3">

                </div>
                <div className="col-md-6">
                    <StorySection />
                </div>
                <div className="col-md-3">

                </div>
            </div>
        </div>
    );
};

export default MainSection;