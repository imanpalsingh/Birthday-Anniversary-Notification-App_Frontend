/*
        Just a mock implementation of the restricted component
*/  

import React from "react";
import Auth from "../../AuthService/Auth";

function Home(){
 

    return(
        <>
        <h1>Home</h1>
        <a href="/signin" onClick={Auth.signOut}>Log Out</a>
        </>
    )
}

export default Home;