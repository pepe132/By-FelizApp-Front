import Layout, { Content } from 'antd/lib/layout/layout'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import { autoLogin } from '../../actions/auth'
import { ForgotPassword } from '../../components/auth/ForgotPassword'
import { NewPassword } from '../../components/auth/NewPassword'
import { DiseñosCajas } from '../../components/categorias/DiseñosCajas'
import { DiseñosMdf } from '../../components/categorias/DiseñosMdf'
import { DiseñosVinilo } from '../../components/categorias/DiseñosVinilo'
import { CategoriasScreen } from '../../components/productos/CategoriasScreen'
import { GaleriaProductos } from '../../components/productos/GaleriaProductos'
import { ProductoCajasScreen } from '../../components/productos/ProductoCajasScreen'
import { Politicas } from '../../components/publico/politicas/Politicas'
import { SearchScreen } from '../../components/publico/SearchScreen'
import { TiendaScreen } from '../../components/publico/TiendaScreen'
import { Footer } from '../../components/ui/Footer'
import { Header } from '../../components/ui/Header'
import { LoadingScreen } from '../../components/ui/LoadingScreen'
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
        <Layout>
        <Header />
       
            <Content>
                <Routes>
                <Route 
                    path="/usuario"
                    component={SemiPrivateRouter}
                    isAuthenticated={!!id}
                />
                    <Route index path='/' element={<TiendaScreen/>}/>
                    <Route path='/categorias/disenos-mdf' element={<DiseñosMdf/>} />
                    <Route path='/categorias/disenos-vinilo' element={<DiseñosVinilo/>} />
                    <Route path='/categorias/disenos-cajas' element={<DiseñosCajas/>} />
                    <Route path='/olvidar-contrasena' element={<ForgotPassword/>} />
                    <Route path='/resetPassword/:id/:tokenresetpassword' element={<NewPassword/>} />
                    <Route path='/producto/:id' element={<ProductoCajasScreen/>} />
                    <Route path='/politicas' element={<Politicas/>} />
                    <Route path='/producto/galeria/:id' element={<GaleriaProductos/>} />
                    <Route path='/search/:parametro' element={<SearchScreen/>} />
                    <Route path='/search/categoria/:categoria' element={<CategoriasScreen/>} />
                    
                    <Route path='*' element={<Navigate to={'/'}/>} />

                </Routes>
            </Content>
        </Layout>
        <Footer/>
    </>
  )
}
