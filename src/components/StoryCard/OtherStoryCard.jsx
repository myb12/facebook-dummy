import React from 'react';
import './StoryCard.css';

const OtherStoryCard = ({ story }) => {
   
    return (
        <div className="other-story-card">
            <div className="other-story-image-wrapper">
                <img className='other-story-image' src={story?.image} alt="" />

                <div className="story-profile-circle">
                    <img src={story?.profilePicture} alt="" />
                </div>

                <div className="other-story-card-footer">
                    <span>{story?.name}</span>
                </div>
            </div>
        </div>
    );
};

export default OtherStoryCard;