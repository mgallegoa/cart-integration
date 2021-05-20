import { ADD_PRODUCT_TO_CART_ACTION } from "../../constants/actionTypes";
import { ActionCartType } from "../../models/ActionCartTypeModel";
import CartModel from "../../models/CartModel";

const cartReducer = (state = new Array(), action: ActionCartType) => {
    switch (action.type) {
        case ADD_PRODUCT_TO_CART_ACTION:
            let cartIndex: number = state.findIndex(cart => cart.USItemId === action.USItemId);
            let newCartState: Array<CartModel>;
            if (cartIndex > -1) {
                newCartState = [
                    ...state.slice(0, cartIndex),
                    {
                        ...state[cartIndex],
                        quantity: action.quantity
                    },
                    ...state.slice(cartIndex + 1)
                ]
            } else {
                let newProductInCart = {USItemId: action.USItemId, quantity: action.quantity}
                newCartState = [...state, newProductInCart]
            }
            return newCartState;
        default:
            return state;
    }
}

export default cartReducer;