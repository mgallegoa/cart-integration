import { ADD_PRODUCT_TO_CART_ACTION } from "../../constants/actionTypes"

export const addProductToCart = (USItemId: string, quantity: number) => {
    return {
        type: ADD_PRODUCT_TO_CART_ACTION,
        USItemId: USItemId,
        quantity: quantity,
    }
}