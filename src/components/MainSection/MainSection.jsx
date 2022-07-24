import React from 'react';
import MyStoryCard from '../StoryCard/MyStoryCard';
import OtherStoryCard from '../StoryCard/OtherStoryCard';
import './MainSection.css';

const MainSection = () => {
    return (
        <div className="container-fluid">
            <div className="row mt-4">
                <div className="col-md-3">

                </div>
                <div className="col-md-6">
                    <div className="story-wrapper">
                        <div className="">
                            <MyStoryCard />
                        </div>
                        <div className="">
                            <OtherStoryCard />
                        </div>
                        <div className="">
                            <OtherStoryCard />
                        </div>
                        <div className="">
                            <OtherStoryCard />
                        </div>
                        <div className="">
                            <OtherStoryCard />
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