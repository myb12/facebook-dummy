import React, { useEffect } from 'react';
import FloatingButton from '../../components/FloatingButton/FloatingButton';
import Header from '../../components/Header/Header';
import MainSection from '../../components/MainSection/MainSection';

const Home = () => {
    // const getData = () => {
    //     fetch('data/post.json')
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    // };

    // useEffect(() => {
    //     getData();
    // }, []);
    return (
        <div className='position-relative'>
            <Header />
            <MainSection />
            <FloatingButton />
        </div>
    );
};

export default Home;