import React from "react";
import "./TransportCard.css";

const TransportCard = ({transport}) => {
    const { name, image } = transport
    return (
        <>
            <div className="ts-card"> {/* ts === transport */}
            
            <div className="ts-card-img">
                <img src={image} alt=""/>
            </div>
            <div className="ts-card-desc">
                <h3>{name}</h3>
            </div>
            
            </div>
        </>
    );
};

export default TransportCard;
