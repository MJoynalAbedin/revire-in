import React from 'react';
import AboutRevire from './AboutRevire/AboutRevire.js';
import Header from './Header/Header.js';
import BoxOnAbout from './BoxOnAbout/BoxOnAbout.js'
import ImgTxt from './ImgTxt/ImgTxt.js';
import Graph from '../../images/graph.png';
import Profit from '../../images/project.png';
import Slider from './Slider/Slider.js';
import BigAnimation from './big-animation-part/BigAnimation.js';
import './Home.css';
import FourColumn from './FourColumn/FourColumn.js';
import AfterSlider from './AfterSlider/AfterSlider.js';
import Footer from './Footer/Footer.js';
import OnFooter from './OnFooter/OnFooter.js';

const Home = () => {
    return (
        <div className="">
            <div className="first-part">
                <Header />
                <AboutRevire />
            </div>
            <BoxOnAbout />
            <ImgTxt 
                imgLeft={Graph} 
                imgRight={Profit}
                headingRight="Revenue and price optimization" 
                headingLeft="Trade promotion optimization"
                paragraphLeft="Take the guesswork out of price and promotion management, and use advanced econometric 
                and machine learning models to improve both price optimization strategy and tactical pricing decisions." 
                paragraphRight="Adopt a scientific approach to trade promotion management to maximize profits, prevent losses,
                 improve inventory turnover, and optimize customer experience.
                 Improve performance and enhance your competitive edge using advanced data-driven models."
            />
            <ImgTxt 
                imgLeft={Graph} 
                imgRight={Profit}
                headingRight="Revenue and price optimization" 
                headingLeft="Trade promotion optimization"
                paragraphLeft="Take the guesswork out of price and promotion management, and use advanced econometric 
                and machine learning models to improve both price optimization strategy and tactical pricing decisions." 
                paragraphRight="Adopt a scientific approach to trade promotion management to maximize profits, prevent losses,
                 improve inventory turnover, and optimize customer experience.
                 Improve performance and enhance your competitive edge using advanced data-driven models."
            />
            <BigAnimation />
            <div className="color-part-two pb-5 pt-5">
                <Slider />
                <AfterSlider />
                <FourColumn />
            </div>
            <OnFooter />
            <Footer />
        </div>
    );
};

export default Home;