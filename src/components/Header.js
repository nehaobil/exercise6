import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <nav>
            <a href="/">
                <p>Home</p>
            </a>
            <a href="/login">
                <p>Log in</p>
            </a>
            <a href="/create">
                <p>Create User</p>
            </a>
        </nav>
    )
}

export default Header;