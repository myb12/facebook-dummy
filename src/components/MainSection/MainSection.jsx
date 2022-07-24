import React from 'react';
import MyStoryCard from '../StoryCard/MyStoryCard';
import './MainSection.css';

const MainSection = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3">

                </div>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-3">
                            <MyStoryCard />
                        </div>
                    </div>
                </div>
                <div className="col-md-3">

                </div>
            </div>
        </div>
    );
};

export default MainSection;