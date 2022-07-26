import React from 'react';
import PostCard from '../PostCard/PostCard';
import UseData from '../../hooks/UseData';

const Posts = () => {
    const [data] = UseData();
    console.log('posts', data)
    return (
        <div className='mt-4 px-0 px-lg-5'>
            {
                data?.posts?.map((el, i) => <PostCard key={i} post={el} user={data?.user} />)
            }
        </div>
    );
};

export default Posts;