import React, { useEffect, useState } from 'react';
import MyStoryCard from '../StoryCard/MyStoryCard';
import OtherStoryCard from '../StoryCard/OtherStoryCard';
import { BsArrowRightShort } from 'react-icons/bs';
import './StorySection.css';
import useMediaQuery from 'beautiful-react-hooks/useMediaQuery';
import { storyData } from '../../fakeData/fakeData';

const StorySection = () => {
    const [length, setLength] = useState(4);
    const isMobile = useMediaQuery('(max-width: 480px)');

    useEffect(() => {
        if (isMobile) {
            setLength(2);
        } else {
            setLength(4);
        }
    }, [isMobile])

    return (
        <div className="story-wrapper px-0 px-xl-5">
            <div className="">
                <MyStoryCard />
            </div>

            {
                storyData.slice(0, length).map((el, i) => <div key={i} >
                    <OtherStoryCard story={el} />
                </div>)
            }

            <div className="see-more-story d-none d-md-flex" >
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