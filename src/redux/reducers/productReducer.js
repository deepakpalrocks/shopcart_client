import * as actionType from "../constants/productConstants"

export const getProductsReducer=(state={products:[]},action)=>{
    switch(action.type){
        case actionType.Get_PRODUCT_SUCCESS:
            return {products:action.payload};
        case actionType.Get_PRODUCT_FAIL:
            return {error:action.payload};
        default:
            return state;
    }
}