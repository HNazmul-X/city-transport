import React from "react";
import { useHistory } from "react-router";
import "./TransportCard.css";

const TransportCard = ({transport}) => {
    const { name, image, id } = transport
    const history = useHistory()
    return (
        <>
            <div onClick={()=> history.push(`/destination/${id}`)} className="ts-card"> {/* ts === transport */}
            
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
