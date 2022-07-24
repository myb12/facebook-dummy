import React from 'react';
import PostCard from '../PostCard/PostCard';

const Posts = () => {
    return (
        <div className='mt-4 px-0 px-lg-5'>
            {
                [...new Array(3)].map((el, i) => <PostCard key={i} />)
            }
        </div>
    );
};

export default Posts;