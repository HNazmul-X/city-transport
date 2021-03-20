import React, { useEffect, useState } from "react";
import "./destinatio.css";
import mapPlaceHolder from "../../images/Map.png";
import { useParams } from "react-router";
import { TransportData } from "../TransportCard/TransportData";
import DestinationResult from "../DestinationResult/DestinationResult";


const Destination = () => {
    const { transportId } = useParams();
    const [isResultShow , setIsResultShow] = useState(false)
    const [selectedTransport, setSelectedTransport] = useState({});
    const [fromData, setFromData] = useState({})

    useEffect(()=>{
        const currentTransport = TransportData.find(transport => transport.id === transportId)
        setSelectedTransport(currentTransport);
    })
    
    
    const handleFeildChange = (e) => {
        const newData = {...fromData}
        console.log(e.target.name , e.target.value)
        newData[e.target.name] = e.target.value
        setFromData(newData)
    }
    console.log(selectedTransport)

    const controlFormSubmit = (e) => {
        e.preventDefault()
        setIsResultShow(true)
    }

    
    

    return (
        <>
            <div id="destination-page">
                <div className="container">
                    {transportId !== "no-selected" ? (
                        <>
                            <div className="row">
                                <div onSubmit={controlFormSubmit} className="col-md-4">
                                    {!isResultShow ? (
                                        <>
                                            {" "}
                                            <div className="input-feilds">
                                                <form onSubmit={controlFormSubmit} className="destination-form">
                                                    <label htmlFor="pick-from">Pick From</label>
                                                    <input onChange={handleFeildChange} name="pickFrom" type="text" className="form-control mb-3" id="pick-from" required />

                                                    <label htmlFor="pick-to">Pick to</label>
                                                    <input onChange={handleFeildChange} name="pickTo" type="text" className="form-control mb-3" id="pick-to" required />

                                                    <label htmlFor="pick-to">Departing Date</label>
                                                    <input onChange={handleFeildChange} name="departingDate" type="date" className="form-control mb-3" id="pick-to" required />

                                                    <label htmlFor="pick-to">Returning Date</label>
                                                    <input onChange={handleFeildChange} name="returningDate" type="date" className="form-control mb-3" id="pick-to" required />

                                                    <button type="submit" className="btn">
                                                        Search
                                                    </button>
                                                </form>
                                            </div>{" "}
                                        </>
                                    ) : (
                                        <>
                                            <DestinationResult fromData={fromData} selectedTransport={selectedTransport} />{" "}
                                           
                                        </>
                                    )}
                                </div>

                                <div className="col-md-8">
                                    <iframe
                                        title="google map"
                                        style={{ width: "100%", height: 500, border: "none" }}
                                        loading="lazy"
                                        allowfullscreen
                                        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDBJ01Cuhvsdf8L1Dst2nAgTNE8q-GJRyw
    &q=richi+high+school,habigonj,bangladesh"></iframe>
                                </div>
                            </div>
                        </>
                    ) : (
                        <h1>Please goto home page and select an</h1>
                    )}
                </div>
            </div>
        </>
    );
};

export default Destination;
