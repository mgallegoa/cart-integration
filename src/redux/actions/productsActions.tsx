import { SAVE_PRODUCTS_ACTION } from "../../constants/actionTypes"
import ProductModel from "../../models/ProductModel"

export const saveProductsByName = (productName: string, products: ProductModel[]) => {
    return {
        type: SAVE_PRODUCTS_ACTION,
        productName: productName,
        products: products
    }
}