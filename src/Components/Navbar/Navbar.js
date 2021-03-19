import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { UserContext } from '../../App';
import { signOut } from '../Login/loginManager';
import "./Navbar.css"

const Navbar = () => {

    const [loggedInUser , setLoggedInUser] = useContext(UserContext)
    const handleSignOut = () => {
        signOut().then(res=> setLoggedInUser(res))
    }


    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand" href="#">
                        City Transport
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="ms-auto navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/destination">
                                    Destination
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#">
                                    Blog
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#">
                                    Contact
                                </Link>
                            </li>
                            {loggedInUser.isLogined && (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" href="#">
                                            {loggedInUser.displayName}
                                        </Link>
                                    </li>{" "}
                                </>
                            )}
                            <li className="nav-item">{loggedInUser.isLogined ? <button onClick={handleSignOut} className="nav-link active">Log out</button> : <Link className="nav-link active" to="/login">Login</Link>}</li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
