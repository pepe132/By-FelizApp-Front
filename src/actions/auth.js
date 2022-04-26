import { message } from 'antd';
import { fetchConToken, fetchSinToken } from '../helpers/fetch';
import { types } from "../types/types";

export const startLogin = ({correo, password}, closeDrawer) => {
    return async(dispatch) => {
        const resp = await fetchSinToken('auth/login', {correo, password}, 'POST');
        const body = await resp.json();
        console.log(body);

        const success = () => {
            message.info("Bienvenido");
            closeDrawer();
        }

        const error = () => {
            message.error(body.msg);
        }

        if(resp.ok === true){
            localStorage.setItem('token', body.token );
            localStorage.setItem('token-init-date', new Date().getTime());
            
            dispatch(login({
                id: body.usuario._id,
                email: body.usuario.email,
                nombre: body.usuario.nombre,
            }))

            success();
        }else{
            error();
        }
            
    }
}

const login = ( user ) => ({
    type: types.authLogin,
    payload: user
})


export const autoLogin = () => {
    return async(dispatch) => {
        const resp = await fetchConToken('auth/renew');
        const body = await resp.json();
        console.log(body);

        if(resp.ok === true){

            localStorage.setItem('token', body.token );
            localStorage.setItem('token-init-date', new Date().getTime());

            dispatch(login({
                id: body.usuario._id,
                correo: body.usuario.correo,
                nombre: body.usuario.nombre,
                
            }))
        }else{
            dispatch(checkingFinish());
        }
    }
}

const checkingFinish = () => ({
    type: types.authCheckingFinish
})


export const startLogout = () => {
    return( dispatch ) => {
        localStorage.clear();
        dispatch(logout());
    }
}

const logout = () => ({
    type: types.authLogout
})

export const startSignup = ({nombre,correo,password},rol, closeDrawer) => {
    return async(dispatch) => {
        const resp = await fetchSinToken('usuarios/registro', {nombre, correo,password,rol}, 'POST');
        const body = await resp.json();

        const datos = {
            correo: correo,
            password: password
        };

        const success = () => {
            message.success("Usuario Registrado con éxito");
            dispatch(startLogin(datos, closeDrawer));
        }

        const error = () => {
            message.error(body.msg);
        }

        if(resp.ok === true){
            success();
        }else{
            error();
        }

    }
}


export const startLoginGoogle = (id_token, closeDrawer) => {
    return async(dispatch) => {
        const resp = await fetchSinToken('auth/google', {id_token}, 'POST');
        const body = await resp.json();
        console.log(body);

        const success = () => {
            message.info("Bienvenido");
            closeDrawer();
        }

        const error = () => {
            message.error(body.msg);
        }

        if(resp.ok === true){
            localStorage.setItem('correo',body.usuario.correo)
            
            dispatch(login({
                id: body.usuario._id,
                email: body.usuario.correo,
                nombre: body.usuario.nombre,
            }))

            success();
        }else{
            error();
        }


            
    }
}



