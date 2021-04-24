import React from "react";

function Home({signOut}){
 
    return(
        <>
        <h1>Home</h1>
        <a href="/signin" onClick={signOut}>Log Out</a>
        </>
    )
}

export default Home;