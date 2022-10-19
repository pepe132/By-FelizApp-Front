import { message } from 'antd';
import Swal from 'sweetalert2';
import { fetchConToken, fetchSinToken } from '../helpers/fetch';
import { types } from "../types/types";

export const startLogin = ({correo, password}, closeDrawer) => {
    return async(dispatch) => {
        const resp = await fetchSinToken('auth/login', {correo, password}, 'POST');
        const body = await resp.json();

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
                rol:body.usuario.rol,
                google:body.usuario.google
                
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


export const startLoginGoogle = (id_token, closeDrawer) => {
    return async(dispatch) => {
        const resp = await fetchSinToken('auth/google', {id_token}, 'POST');
        const body = await resp.json();

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
                correo: body.usuario.correo,
                nombre: body.usuario.nombre,
                rol:body.usuario.rol,
                google:body.usuario.google
            }))

            success();
        }else{
            error();
        }


            
    }
}

export const autoLogin = () => {
    return async(dispatch) => {
        const resp = await fetchConToken('auth/renew');
        const body = await resp.json();

        if(resp.ok === true){

            localStorage.setItem('token', body.token );
            localStorage.setItem('token-init-date', new Date().getTime());

            dispatch(login({
                id: body._id,
                correo: body.correo,
                nombre: body.nombre,
                rol:body.rol,
                google:body.google
                
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

export const olvidarContraseña = ({correo}) => {
    return async() => {
        const resp = await fetchSinToken('auth/forgot-password', {correo}, 'POST');


        if(resp.ok === true){

            Swal.fire({
                showConfirmButton:true,
                icon:'success',
                text:'Revise su email, se le ha enviado un enlace para crear una nueva contraseña'
            })
        }else{
            Swal.fire({
                showConfirmButton:true,
                icon:'error',
                text:'Ha habido un error al intentar enviar los datos, comprueba el correo electronico o intenta mas tarde'
            })
        }

    }
}

export const establecerContraseña = ({password},id,tokenresetpassword) => {
    return async() => {
        const resp = await fetchSinToken(`auth/resetPassword/${id}/${tokenresetpassword}`, {password}, 'POST');
        

        
        if(resp.ok === true){

            Swal.fire({
                showConfirmButton:true,
                icon:'success',
                text:'Su contraseña ha sido actualizada'
            })
        }else{
            Swal.fire({
                showConfirmButton:true,
                icon:'error',
                text:'Ha habido un error al intentar enviar los datos, intenta mas tarde'
            })
        }


    }
}



