import React from 'react';
import './StoryCard.css';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import UseData from '../../hooks/UseData';

const MyStoryCard = () => {
    const [user, data] = UseData();

    return (
        <div className='mystory-card'>
            <div className="my-story-image-wrapper">
                <img className='my-story-image' src={user?.profile_picture} alt="" />
            </div>

            <div className="story-card-footer">
                <span>Create Story</span>

                <div className="plus-icon-wrapper">
                    <BsFillPlusCircleFill />
                </div>
            </div>
        </div>
    );
};

export default MyStoryCard;