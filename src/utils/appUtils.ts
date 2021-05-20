import CartModel from "../models/CartModel";

export const getStringForIdsQuantity = (cart: Array<CartModel>) => {
    return (cart
            .map(product => `${product.USItemId}_${product.quantity}`)
            .join()
    )
}