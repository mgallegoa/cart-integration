import CartModel from "../models/CartModel"
import {getStringForIdsQuantity} from "./appUtils"

describe('Test the app utilities methods.', () => {

    test('should return the right string from the array', () => {
        const cart: Array<CartModel> = [
                {USItemId:"123",quantity:2},
                {USItemId:"456",quantity:1},
                {USItemId:"789",quantity:5},
                {USItemId:"012",quantity:0},
        ]
        const idsQuantity = getStringForIdsQuantity(cart);
        expect(idsQuantity).toBe("123_2,456_1,789_5,012_0");
    })
    
    
})
