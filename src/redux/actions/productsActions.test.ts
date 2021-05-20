import { SAVE_PRODUCTS_ACTION } from "../../constants/actionTypes";
import { saveProductsByName } from "./productsActions";


describe("Tests for the Products actions.", () => {

    const saveProductAction = {
        type: SAVE_PRODUCTS_ACTION,
        productName: "Eggs",
        products: []
    }

    test('should return the save product action.', () => {
        //given
        //then
        const returnedAction = saveProductsByName("Eggs", []);
        //expect
        expect(returnedAction).toEqual(saveProductAction);
        expect(returnedAction.productName).not.toEqual("Butter");
    });
    

});