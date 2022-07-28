import React, { useEffect } from 'react';
import FloatingButton from '../../components/FloatingButton/FloatingButton';
import Header from '../../components/Header/Header';
import MainSection from '../../components/MainSection/MainSection';

const Home = () => {
    
    return (
        <div className='position-relative'>
            <Header />
            <MainSection />
            <FloatingButton />
        </div>
    );
};

export default Home;