import React from "react";

function LoginForm(){
    return (
    <form className="FormElement">
        <label for="userName">Username</label>
        <input type="text" name="userName"/>
        <label for="userPassword">Password</label>
        <input type="text" name="userPassword"/>
        <button type="submit">Submit</button>
    </form>
    );
}

export default LoginForm;