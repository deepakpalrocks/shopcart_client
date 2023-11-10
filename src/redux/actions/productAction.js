import axios from "axios";
import * as actionType from '../constants/productConstants'

const url='http://localhost:8000';
//...dispatch act as middleware predoduct reducer
export const  getProducts=()=>async(dispatch)=>{
    try{
       let {data}= await axios.get(`${url}/products`);
       dispatch({type:actionType.Get_PRODUCT_SUCCESS , payload:data});

    }catch(error){
        // console.log(`Error while getting products`,error.message);
        dispatch({type:actionType.Get_PRODUCT_FAIL,payload:error.message});
    }
}