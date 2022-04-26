import { message } from 'antd';
import { fetchConToken, fetchSinToken } from '../helpers/fetch';
import { types } from "../types/types";

export const productosMDFLoading = () => {
    return async(dispatch) => {
        const resp = await fetchSinToken('productos/todos-mdf');
        const body = await resp.json();
        console.log(body);

        const success = () => {
            message.info("Productos de MFD cargados");
        }

        const error = () => {
            message.error(body.msg);
        }

        if(resp.ok === true){
            success();
            dispatch(productosMDFLoaded(body))
        }else{
            error();
        }
            
    }
}

const productosMDFLoaded = ( productosMDF ) => ({
    type: types.productosMDFLoaded,
    payload: productosMDF
})

export const productosVinilLoading = () => {
    return async(dispatch) => {
        const resp = await fetchSinToken('productos/todos-vinil');
        const body = await resp.json();
        console.log(body);

        const success = () => {
            message.info("Productos de vinil cargados");
        }

        const error = () => {
            message.error(body.msg);
        }

        if(resp.ok === true){
            success();
            dispatch(productosVinilLoaded(body))
        }else{
            error();
        }
            
    }
}

const productosVinilLoaded = ( productosVinil ) => ({
    type: types.productosVinilLoaded,
    payload: productosVinil
})