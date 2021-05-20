import { ADD_PRODUCT_TO_CART_ACTION } from "../../constants/actionTypes";
import { ActionCartType } from "../../models/ActionCartTypeModel";
import cartReducer from "./cart";

describe('Test the reducer for the cart', () => {


    test('Should return the right initial state for the cart list', () => {
        //given
        const actionCart: ActionCartType = {
            type: ADD_PRODUCT_TO_CART_ACTION,
            USItemId: "123",
            quantity: 3,
        }
        //then
        const stateOfCart = cartReducer([], actionCart);
        //expect
        expect(stateOfCart[0].USItemId).toBe(actionCart.USItemId);
        expect(stateOfCart[0].quantity).toBe(actionCart.quantity);
    });
});