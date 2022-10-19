import React from 'react'
import { Navigate, Route, Router, Routes } from 'react-router'
import { DiseñosCajas } from '../../components/categorias/DiseñosCajas'
import { DiseñosMdf } from '../../components/categorias/DiseñosMdf'
import { DiseñosVinilo } from '../../components/categorias/DiseñosVinilo'
import { TiendaScreen } from '../../components/publico/TiendaScreen'

export const SemipublicRouter = () => {
  return (
        <Routes>

            <Route  path='/' element={<TiendaScreen/>}/>
            <Route path='/auth/categorias/disenos-mdf' element={<DiseñosMdf/>} />
            <Route path='/auth/categorias/disenos-vinilo' element={<DiseñosVinilo/>} />
            <Route path='/auth/categorias/disenos-cajas' element={<DiseñosCajas/>} />
            <Route path='*' element={<Navigate to={'/'}/>} />

        </Routes>

  )
}
