import React, { useEffect, useState } from 'react';
import '../../Screens/Home/Home.css';
// COMPONENTS
import PreLoader from '../../Components/PreLoader/PreLoader.jsx';
import Home2 from './Home2.jsx';

const Home = () => {
    // ENTRY ANIMATION
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowContent(true);
        }, 3300);
        return () => clearTimeout(timer);
    }, []);
    
    console.log(window.devicePixelRatio);
    
    return (
        <>
        {/* <PreLoader /> */}
            {
            showContent ? (
                <div id="ain">
                    <Home2/>
                </div>
            ) : (
                <PreLoader />
            )}
        </>
    );
};

export default Home;
