import { types } from "../types/types";


const initialState={
    activeButton:null
}


export const usuariosReducer = (state=initialState,action) => {
    
    switch (action.type) {
        case types.eventSetActive:
            return{
                ...state,
                activeButton:true
            }
    
        default:
            return state;
    }
}
