import React from 'react'

import PropTypes from 'prop-types';
import { Route,Navigate } from 'react-router-dom';

export const PublicRoute=({
    isAuthenticated,
    element:Element,
    ...rest
})=>{

    return(
        <Route {...rest}
            element={(props)=>(
                (isAuthenticated)
                ? (<Navigate to={"/usuario"}/>)
                : (<Element {...props}/>)
            )}
        />
    )
}

PublicRoute.propTypes={
    isAuthenticated:PropTypes.bool.isRequired,
    component:PropTypes.func.isRequired
}