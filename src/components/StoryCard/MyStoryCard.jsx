import React from 'react';
import './StoryCard.css';
import { BsFillPlusCircleFill } from 'react-icons/bs';

const MyStoryCard = () => {
    return (
        <div className='mystory-card'>
            <div className="my-story-image-wrapper">
                <img className='my-story-image' src="https://scontent.fdac1-1.fna.fbcdn.net/v/t39.30808-1/262295709_5351580041524973_229989686152442541_n.jpg?stp=dst-jpg_p160x160&_nc_cat=103&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeGz5ABa-fKIuG-FuzCLvnMc5yX41LpJrjDnJfjUukmuMI4enOsSteOYtpbbRnCwFld_07k0fKCrUyAqcRKKDI5k&_nc_ohc=nOKUEXRfAZMAX8B8A7a&_nc_ht=scontent.fdac1-1.fna&oh=00_AT9TGOtxuzhXHWNnIqkSbvzifETa4vSAY0KXD6mgf7G4Mg&oe=62E2E091" alt="" />
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