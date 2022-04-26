import { types } from "../types/types";

const initialState={
    productosMDF:{},
    productosVinil:{}
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
        
        default:
            return state;
    }
}
