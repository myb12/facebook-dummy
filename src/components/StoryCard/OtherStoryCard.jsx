import React from 'react';
import './StoryCard.css';

const OtherStoryCard = () => {
    return (
        <div className="other-story-card">
            <div className="other-story-image-wrapper">
                <img className='other-story-image' src="https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/295638821_3153936761528034_5063808983099931468_n.jpg?stp=dst-jpg_p118x118&_nc_cat=101&ccb=1-7&_nc_sid=365331&_nc_eui2=AeG4JNlLAWjtXY5vPJsKnCHjocBVmo9ypDmhwFWaj3KkOeC6iUBaDVLjUch_UKB5tch0Ke9-HAWaKPj3cb2eQHpX&_nc_ohc=yvaUG_y90kEAX_T_aSm&_nc_ht=scontent.fdac138-1.fna&oh=00_AT8kI8gJN5QHdEYdO1sbCqjhTJYM_rO-GQBK_pN0BHHlmw&oe=62E1A3F5" alt="" />

                <div className="story-profile-circle">
                    <img src="https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-1/287968970_3124030694518641_8706416458929153947_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=110&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeFCZYyK1C8xQjNLj47bFoR_wFy9yxFpwI_AXL3LEWnAjyV02mbpqDXrWWrAuPCEl95Jg4QwzHO4o7uyFLxOhqEy&_nc_ohc=YTEz_Ys6fB8AX9ZSZTp&_nc_ht=scontent.fdac138-1.fna&oh=00_AT8pVYDWvDidPWkqsIQFfeb4swaujiJGTsHfJIx18VTICg&oe=62E252EF" alt="" />
                </div>

                <div className="other-story-card-footer">
                    <span>Sajal Mozumder</span>
                </div>
            </div>
        </div>
    );
};

export default OtherStoryCard;