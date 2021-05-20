import { ADD_PRODUCT_TO_CART_ACTION } from "../../constants/actionTypes";
import { addProductToCart } from "./cartAction";

describe("Tests for the Cart actions.", () => {

    const addProductAction = {
        type: ADD_PRODUCT_TO_CART_ACTION,
        USItemId: "123",
        quantity: 2
    }

    test('should return the save product action.', () => {
        //given
        //then
        const returnedAction = addProductToCart("123", 2);
        //expect
        expect(returnedAction).toEqual(addProductAction);
        expect(returnedAction.USItemId).not.toEqual("321");
    });
    

});