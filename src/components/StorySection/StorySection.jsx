import React, { useEffect, useState } from 'react';
import MyStoryCard from '../StoryCard/MyStoryCard';
import OtherStoryCard from '../StoryCard/OtherStoryCard';
import { BsArrowRightShort } from 'react-icons/bs';
import './StorySection.css';
import useMediaQuery from 'beautiful-react-hooks/useMediaQuery';

const StorySection = () => {
    const [length, setLength] = useState(4);
    const isMobile = useMediaQuery('(max-width: 480px)');

    useEffect(() => {
        if (isMobile) {
            setLength(2);
        } else {
            setLength(4);
        }
        console.log(length)
    }, [isMobile])

    return (
        <div className="story-wrapper">
            <div className="">
                <MyStoryCard />
            </div>

            {
                [...new Array(length)].map((el, i) => <div key={i} className="">
                    <OtherStoryCard />
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