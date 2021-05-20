import {combineReducers} from "redux"
import Products from "./products"
import Cart from "./cart"

const allReducer = combineReducers({
    Products,
    Cart
});

export default allReducer;