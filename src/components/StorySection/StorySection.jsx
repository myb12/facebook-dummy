import React from 'react';
import MyStoryCard from '../StoryCard/MyStoryCard';
import OtherStoryCard from '../StoryCard/OtherStoryCard';
import { BsArrowRightShort } from 'react-icons/bs';
import './StorySection.css';

const StorySection = () => {
    return (
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

            <div className="see-more-story" >
                <BsArrowRightShort />
                <div className="position-relative">
                    <div className="tooltip-text">
                        <span>See all stories</span>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default StorySection;