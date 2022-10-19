import React from 'react'

import PropTypes from 'prop-types';
import { Route,Navigate } from 'react-router-dom';

export const PrivateRoute=({
    isAuthenticated,
    element:Element,
    ...rest
})=>{
    localStorage.setItem('lastPath',rest.location.pathname)

    return(
        <Route {...rest}
            element={(props)=>(
                (isAuthenticated)
                    ? (<Element {...props}/>)
                    : (<Navigate to={"/auth"}/>)
            )}
        />
    )
}

PrivateRoute.propTypes={
    isAuthenticated:PropTypes.bool.isRequired,
    component:PropTypes.func.isRequired
}