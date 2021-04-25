import React from 'react';
import { useHistory } from 'react-router-dom';
import Auth from "../Auth";

/*
    PrivateRouter accepts Components which are to be only conditionaly rendered based on token verification from server

    Component : Component to display
    
    display : the hook state that determines if the component is to be dispplayed 
    [After it is updated in this function, old values do not contribute ]

    updateDisplay : the valid hook updator for display
    
    fallbackLink : If display is false redirect to this link
    
    componentProps : Additional props to pass to the component
*/
const PrivateRoute = ({Component, display, updateDisplay,  fallbackLink="/signin", ...componentProps})=>{


    const history = useHistory();
    const token = localStorage.getItem("token");
    
    // If no token exists goto fallback
    if(!token) history.push(fallbackLink)

    // Validate the token.
    Auth.getDatawithToken(token, updateDisplay);

    // if token was valid, it had updated the display hook (via dataUpdator). If not then fallback
    if(!display) history.push(fallbackLink)
    //the original component [Also drilling down the app.js states for future use]
    return(
        <Component {...componentProps} signed={display} updateSigned={updateDisplay} />
    )
}

export default PrivateRoute;