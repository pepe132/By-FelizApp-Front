import Layout, { Content } from 'antd/lib/layout/layout'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { autoLogin } from '../../actions/auth'
import { DiseñosCajas } from '../../components/categorias/DiseñosCajas'
import { DiseñosMdf } from '../../components/categorias/DiseñosMdf'
import { DiseñosVinilo } from '../../components/categorias/DiseñosVinilo'
import { ProductoMdfScreen } from '../../components/productos/ProductoMdfScreen'
import { TiendaScreen } from '../../components/publico/TiendaScreen'
import { Footer } from '../../components/ui/Footer'
import { Header } from '../../components/ui/Header'
import { LoadingScreen } from '../../components/ui/LoadingScreen'
import { PrivateRoute } from './PrivateRoute'
import { SemiPrivateRouter } from './SemiPrivateRouter'

export const UsuariosRouter = () => {
    const dispatch=useDispatch()

    const {id, checking} = useSelector(state => state.auth);

    useEffect(() => {
     dispatch(autoLogin())
    }, [dispatch])

    if (checking){
        return(
            <LoadingScreen/>
        )
        
    }
    
  return (
      <>
        <div className="header">
            <Header />
        </div>  
        <Layout>
            <Content>
                <Routes>
                <Route 
                    path="/usuario"
                    component={SemiPrivateRouter}
                    isAuthenticated={!!id}
                />
                    <Route index path='/home' element={<TiendaScreen/>}/>
                    <Route path='/categorias/disenos-mdf' element={<DiseñosMdf/>} />
                    <Route path='/categorias/disenos-vinilo' element={<DiseñosVinilo/>} />
                    <Route path='/categorias/disenos-cajas' element={<DiseñosCajas/>} />
                    <Route path='/productos-mdf/:id' element={<ProductoMdfScreen/>} />

                    
                    <Route path='*' element={<Navigate to={'/home'}/>} />

                </Routes>
            </Content>
        </Layout>
        <Footer/>
    </>
  )
}
