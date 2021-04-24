import React from 'react';
import { Redirect } from 'react-router-dom';


/*
    PrivateRouter accepts Components which are to be only conditionaly rendered

    Component : Component to display
    Display : (bool) To display the component or to redirect
    FallbackLink : If display is false redirect to this link
    ComponentProps : Additional props to pass to the component
*/
const PrivateRoute = ({Component, Display, FallbackLink="/signin", ...ComponentProps})=>{

    if(!Display){
        return (<Redirect to={FallbackLink} />)
    }

    return(
        <Component {...ComponentProps} />
    )
}

export default PrivateRoute;