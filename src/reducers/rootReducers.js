import { combineReducers } from "redux";
import { usuariosReducer } from "./usuariosReducer";
import { authReducer } from './authReducer';
import { productosReducer } from "./productosReducer";


export const rootReducer=combineReducers({
    auth:authReducer,
    usuarios:usuariosReducer,
    productos:productosReducer
   
})