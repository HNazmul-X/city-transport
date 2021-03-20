import React from "react";
import "./DestinationResult.css";
import peopleIcon from "../../images/people-fill.svg"

const DestinationResult = ({ fromData, selectedTransport }) => {
    const {name, image} = selectedTransport;
    const { pickFrom, pickTo, departingDate, returningDate } = fromData

    const prices = [20, 56, 93, 21, 32]
    return ( 
        <div>
            <div className="datails-box">
                <p>{pickFrom} </p>
                <p>{pickTo}</p>
                <p>{departingDate} &rarr; {returningDate}</p>
            </div>

            {prices.map(price=> {
                return(
                    <div className="ticket-card">
                    <h3>
                        <img src={image} alt="" className="ticket-card-image" />
                        <span>{name}</span>
                        <img src={peopleIcon} alt="" className="people-icon" />
                        <span>5</span>
                        <span className="price">${price}</span>
                    </h3>
                </div>
                )
            })}
        </div>
    );
};

export default DestinationResult;
