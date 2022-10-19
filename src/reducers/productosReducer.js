import { types } from "../types/types";

const initialState={
    productosMDF:{},
    productosVinil:{},
    productosCajas:{},
    productoCaja:{}
}


export const productosReducer = (state=initialState,action) => {
    
    switch (action.type) {
        case types.productosMDFLoaded:
            return{
                ...state,
                productosMDF:{...action.payload}
            }

        case types.productosVinilLoaded:
            return{
                ...state,
                productosVinil:{...action.payload}
            }
        case types.productosCajasLoaded:
            return{
                ...state,
                productosCajas:{...action.payload}
            }
        case types.productoCaja:{
            return{
                ...state,
                productoCaja:{...action.payload}

            }
        }

        

        
        
        default:
            return state;
    }
}
