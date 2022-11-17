import React from "react";
import { Link } from "react-router-dom";
import {getAuth, signOut} from "firebase/auth";

function Header({setUserInformation, setIsLoggedIn}) {
    function logout() {
        const auth = getAuth();
        signOut(auth)
            .then(() => {
                setUserInformation({});
                setIsLoggedIn(false);
            })
            .catch((error) => {
                console.warn(error);
            })
    }


    return (
        <nav>
            <Link to="/">
                <p>Home</p>
            </Link>
            <Link to="/login">
                <p>Log in</p>
            </Link>
            <Link to="/create">
                <p>Create User</p>
            </Link>
        </nav>
    )
}

export default Header;