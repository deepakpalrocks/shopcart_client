import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {getProductsReducer} from './reducers/productReducer';

const reducer=combineReducers({
    getProducts:getProductsReducer    
    // here getProducts is the state in store which store data of product reducer
})

const middleware=[thunk];

const store=createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;