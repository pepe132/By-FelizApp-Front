import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import { UsuarioScreen } from '../../components/usuarios/UsuarioScreen'

export const SemiPrivateRouter = () => {
  return (
    <div>

            <Routes>

                <Route  path='/usuario/perfil' element={<UsuarioScreen/>}/>
                
                <Route path='*' element={<Navigate to={'/home'}/>} />

            </Routes>

    </div>
  )
}
