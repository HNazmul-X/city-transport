import React from "react";
import "./DestinationResult.css";
import peopleIcon from "../../images/people-fill.svg"

const DestinationResult = () => {
    return (
        <div>
            <div className="datails-box">
                <p>Mirpur </p>
                <p>Dhanmondi</p>
                <p>12/3/21 &rarr; 16/3/21</p>
            </div>

            <div className="ticket-card">
                <h3>
                    <img src="https://urben-rider-assingment.web.app/static/media/Frame.2d6146f5.png" alt="" className="ticket-card-image" />
                    <span>CAR</span>
                    <img src={peopleIcon} alt="" className="people-icon" />
                    <span>5</span>
                    <span className="price">$67</span>
                </h3>
            </div>
        </div>
    );
};

export default DestinationResult;
