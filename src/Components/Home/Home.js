import React from 'react';
import TransportCard from '../TransportCard/TransportCard';
import { TransportData } from '../TransportCard/TransportData';
import "./Home.css"
const Home = () => {
    return (
        <div id="home-page">
            <div className="container">
                <div className="row ts-container">{ 
                TransportData.map(transport => (
                    <div className="col-md-6 mb-5 col-lg-3">
                        <TransportCard transport={transport} />
                    </div>
                ))
                
                }</div>
            </div>
        </div>
    );
};

export default Home;