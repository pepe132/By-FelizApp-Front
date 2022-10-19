import { message } from 'antd';
import { fetchConToken, fetchSinToken } from '../helpers/fetch';
import { types } from "../types/types";

export const productosMDFLoading = (num_pag,setMdfInfo) => {
    return async(dispatch) => {

        try {
            const resp = await fetchSinToken(`productos/todos-MDF?limite=8&pagina=${num_pag}`);
            const body = await resp.json();
            
            dispatch(productosMDFLoaded(body))

            setMdfInfo({
                ok:body.ok,
                total:body.total
            })

        } catch (error) {
            console.log(error);
            
        }
      
    }
}

const productosMDFLoaded = ( productosMDF ) => ({
    type: types.productosMDFLoaded,
    payload: productosMDF
})

export const crearMdf = ({nombre,precio,categoria,descripcion,medidas,adicional},currentPage) => {
    return async(dispatch) => {
        const resp = await fetchConToken('productos/nuevo-producto',{nombre,precio,categoria,descripcion,medidas,adicional},'POST');
        const body = await resp.json();


        const success = () => {
            message.info("Producto creado ");
        }

        const error = () => {
            message.error(body.msg);
        }

        if(resp.ok === true){
            success();
            dispatch(productosMDFLoading(currentPage))
        }else{
            error();
        }
            
    }
}

export const editarMdf = (idmdf,{nombre,precio,categoria,descripcion,medidas,adicional},currentPage) => {
    return async(dispatch) => {
        const resp = await fetchConToken(`productos/actualizar-producto/${idmdf}`,{nombre,precio,categoria,descripcion,medidas,adicional},'PUT');
        const body = await resp.json();
      

        const success = () => {
            message.info("Producto editado ");
        }

        const error = () => {
            message.error(body.msg);
        }

        if(resp.ok === true){
            success();
            dispatch(productosMDFLoading(currentPage))
        }else{
            error();
        }
            
    }
}

export const eliminarMdf = (_id,pagina_actual) => {
    return async(dispatch) => {
        const resp = await fetchConToken(`productos/eliminar-producto/${_id}`,{},'DELETE');
        const body = await resp.json();
        

        const success = () => {
            message.info("Producto Eliminado ");
        }

        const error = () => {
            message.error(body.msg);
        }

        if(resp.ok === true){
            success();
            dispatch(productosMDFLoading(pagina_actual))
        }else{
            error();
        }
            
    }
}
const baseUrl = process.env.REACT_APP_API_URL;
export const editarPortada = (_id, archivo) => {
    return async(dispatch) => {
        
            const url = `${baseUrl}/archivos/actualizar/productos/${_id}`;
               const token = localStorage.getItem('token') || '';
       
               const formdata = new FormData();
               formdata.append('archivo', archivo);   
       
               try{
                   const resp = await fetch(url, {
                       method: 'PUT',
                       headers: {
                           'x-token': token
                       },
                       body: formdata,
                       redirect: 'follow'
                   })
       
                   if(resp.ok === true){
                       dispatch(productoPorId(_id));
                   }
               }
               catch{
                   message.error('error');
               }
    }
}

//---------------------------------ACCIONES DE CAJAS PERSONALIZADAS-----------------------------------------

export const productosCajasLoading = (num_pag,setCajasInfo) => {
    return async(dispatch) => {

        try {
            const resp = await fetchSinToken(`productos/todos-cajas?limite=8&pagina=${num_pag}`);
            const body = await resp.json();
            
            dispatch(productosCajas(body))

            setCajasInfo({
                ok:body.ok,
                total:body.total
            })
            
        } catch (error) {
            console.log(error);
            
        }
       
    }
}


const productosCajas = ( productosCajas ) => ({
    type: types.productosCajasLoaded,
    payload: productosCajas
})

export const productoPorId = (id,setProductoStatus) => {
    return async(dispatch) => {

        try {
            const resp = await fetchSinToken(`productos/${id}`);
            const body = await resp.json();
            
            dispatch(productoCajas(body)) 
            
            setProductoStatus({
                ok:body.ok
            })
            
        } catch (error) {
            console.log(error);
            
        }

                 
    }
}


const productoCajas = ( productoCajas ) => ({
    type: types.productoCaja,
    payload: productoCajas
})



export const crearCajas = ({nombre,precio,categoria,descripcion,medidas,adicional},currentPage) => {
    return async(dispatch) => {
        const resp = await fetchConToken('productos/nuevo-producto',{nombre,precio,categoria,descripcion,medidas,adicional},'POST');
        const body = await resp.json();

        const success = () => {
            message.info("Producto creado ");
        }

        const error = () => {
            message.error(body.msg);
        }

        if(resp.ok === true){
            success();
            dispatch(productosCajasLoading(currentPage))
        }else{
            error();
        }
            
    }
}

export const editarCaja = (idcaja,{nombre,precio,categoria,descripcion,medidas,adicional},currentPage) => {
    return async(dispatch) => {
        const resp = await fetchConToken(`productos/actualizar-producto/${idcaja}`,{nombre,precio,categoria,descripcion,medidas,adicional},'PUT');
        const body = await resp.json();

        const success = () => {
            message.info("Producto editado ");
        }

        const error = () => {
            message.error(body.msg);
        }

        if(resp.ok === true){
            success();
            dispatch(productosCajasLoading(currentPage))
        }else{
            error();
        }
            
    }
}

export const crearReviews = ({comment,rating},id) => {
    return async(dispatch) => {
        const resp = await fetchConToken(`productos/nueva_valoracion/${id}`,{comment,rating},'POST');
        const body = await resp.json();

        const success = () => {
            message.info("Producto creado ");
        }

        const error = () => {
            message.error(body.msg);
        }

        if(resp.ok === true){
            success();
            dispatch(productoPorId(id))
        }else{
            error();
        }
            
    }
}

export const eliminarCajas = (_id,pagina_actual) => {
    return async(dispatch) => {
        const resp = await fetchConToken(`productos/eliminar-producto/${_id}`,{},'DELETE');
        const body = await resp.json();

        const success = () => {
            message.info("Producto Eliminado ");
        }

        const error = () => {
            message.error(body.msg);
        }

        if(resp.ok === true){
            success();
            dispatch(productosCajasLoading(pagina_actual))
        }else{
            error();
        }
            
    }
}

//busquedas

export const busquedaCargada = (num_pag, termino, setCursosInfo,setVariable) => {
    return async() => {

        try {

            const resp = await fetchSinToken(`buscar/search/${termino}?limite=8&pagina=${num_pag}`);
            const body = await resp.json();

            setVariable(true)

            setCursosInfo({
                status: body.ok,
                results: body.results,
                total: body.total
            });
            
        } catch (error) {

            console.log(error);
            
        }
    }
}

//----------------------------------------------------------------------------------------------------------------//

//----------------------------------------------------ACCIONES DE PRODUCTOS VINIL----------------------------------------//

export const productosVinilLoading = (num_pag,setVinilInfo) => {
    return async(dispatch) => {

        try {
            const resp = await fetchSinToken(`productos/todos-vinil?limite=8&pagina=${num_pag}`);
            const body = await resp.json();
    
            dispatch(productosVinilLoaded(body))
    
            setVinilInfo({
                ok:body.ok,
                total:body.total
            })
            
        } catch (error) {
            console.log(error);
            
        }
            
    }
}

const productosVinilLoaded = ( productosVinil ) => ({
    type: types.productosVinilLoaded,
    payload: productosVinil
})

export const crearVinil = ({nombre,precio,categoria,descripcion,medidas,adicional},currentPage) => {
    return async(dispatch) => {
        const resp = await fetchConToken('productos/nuevo-producto',{nombre,precio,categoria,descripcion,medidas,adicional},'POST');
        const body = await resp.json();

        const success = () => {
            message.info("Producto creado ");
        }

        const error = () => {
            message.error(body.msg);
        }

        if(resp.ok === true){
            success();
            dispatch(productosVinilLoading(currentPage))
        }else{
            error();
        }
            
    }
}

export const editarVinil = (idvinil,{nombre,precio,categoria,descripcion,medidas,adicional},currentPage) => {
    return async(dispatch) => {
        const resp = await fetchConToken(`productos/actualizar-producto/${idvinil}`,{nombre,precio,categoria,descripcion,medidas,adicional},'PUT');
        const body = await resp.json();

        const success = () => {
            message.info("Producto editado ");
        }

        const error = () => {
            message.error(body.msg);
        }

        if(resp.ok === true){
            success();
            dispatch(productosVinilLoading(currentPage))
        }else{
            error();
        }
            
    }
}

export const eliminarVinil = (_id,pagina_actual) => {
    return async(dispatch) => {
        const resp = await fetchConToken(`productos/eliminar-producto/${_id}`,{},'DELETE');
        const body = await resp.json();

        const success = () => {
            message.info("Producto Eliminado ");
        }

        const error = () => {
            message.error(body.msg);
        }

        if(resp.ok === true){
            success();
            dispatch(productosVinilLoading(pagina_actual))
        }else{
            error();
        }
            
    }
}


/**------------------------------------------------------------------------------------------------- */

export const subirFotos = (_id,archivo,alt) => {
    return async(dispatch) => {
        
            const url = `${baseUrl}/archivos/subir-imagenes/${_id}`;
               const token = localStorage.getItem('token') || '';
       
               const formdata = new FormData();
               formdata.append('archivo', archivo);  
               formdata.append('alt',alt) 
       
               try{
                   const resp = await fetch(url, {
                       method: 'POST',
                       headers: {
                           'x-token': token
                       },
                       body: formdata,
                       redirect: 'follow'
                   })
       
                   if(resp.ok === true){
                       dispatch(productoPorId(_id));
                   }
               }
               catch{
                   message.error('error');
               }
    }
}

export const editarDescFoto = (idfoto,idproducto,{alt}) => {
    return async(dispatch) => {
        const resp = await fetchConToken(`archivos/editar-imagenes/${idproducto}/${idfoto}`,{alt},'PUT');
        const body = await resp.json();

        const success = () => {
            message.info("Producto editado ");
        }

        const error = () => {
            message.error(body.msg);
        }

        if(resp.ok === true){
            success();
            dispatch(productoPorId(idproducto))
        }else{
            error();
        }
            
    }
}


