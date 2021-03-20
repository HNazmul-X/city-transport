import React, { useEffect, useState } from "react";
import "./destinatio.css";
import mapPlaceHolder from "../../images/Map.png";
import { useParams } from "react-router";
import { TransportData } from "../TransportCard/TransportData";
import DestinationResult from "../DestinationResult/DestinationResult";


const Destination = () => {
    const { transportId } = useParams();
    const [isResultShow , setIsResultShow] = useState(false)
    const [selectedTransport, setSelectedTransport] = useState({
        name: "",
        id: "",
        image: "",
        pickFrom: "",
        pickTo: "",
        departingDate: "",
        returningDate:""
    });

    useEffect(()=>{
        const currentTransport = TransportData.find(transport => transport.id === transportId)

        setSelectedTransport({ ...selectedTransport, ...currentTransport });
    })
    
    
    const handleFeildChange = (e) => {
        const newData = {...selectedTransport}
        newData[e.target.name] = e.target.value
        setSelectedTransport(newData)
    }
    console.log(selectedTransport)

    

    return (
        <>
            <div id="destination-page">
                <div className="container">
                    <div className="row">
                        <form onSubmit={null} className="col-md-4">
                            {!isResultShow ? (
                                <>
                                    {" "}
                                    <div className="input-feilds">
                                        <div className="destination-form">
                                            <label htmlFor="pick-from">Pick From</label>
                                            <input onClick={handleFeildChange} name="pickFrom" type="text" className="form-control mb-3" id="pick-from" />

                                            <label htmlFor="pick-to">Pick to</label>
                                            <input onClick={handleFeildChange} name="pickTo" type="text" className="form-control mb-3" id="pick-to" />

                                            <label htmlFor="pick-to">Departing Date</label>
                                            <input onClick={handleFeildChange} name="departingDate" type="date" className="form-control mb-3" id="pick-to" />

                                            <label htmlFor="pick-to">Returning Date</label>
                                            <input onClick={handleFeildChange} name="returningDate" type="date" className="form-control mb-3" id="pick-to" />

                                            <button type="submit" className="btn">
                                                Search
                                            </button>
                                            <button>{transportId}</button>
                                        </div>
                                    </div>{" "}
                                </>
                            ) : (
                                <DestinationResult />
                            )}
                        </form>

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
                </div>
            </div>
        </>
    );
};

export default Destination;
