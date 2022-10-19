import React from 'react';
import {
    Routes,
    Route,
    BrowserRouter as Router,
    Navigate
    
  } from "react-router-dom";

import { Politicas } from '../components/publico/politicas/Politicas';
import { UsuariosRouter } from './usuarios/UsuariosRouter';
export const AppRouter = () => {
    return (
        <>
        <Router>

            <Routes>

                <Route path='/politicas' element={<Politicas/>}/>
                <Route path='/*' element={<UsuariosRouter/>}/>
                <Route path='*'  element={<Navigate to={'/'}/>} />

            </Routes>

            </Router>

        </>
       
        
        
    )
}
