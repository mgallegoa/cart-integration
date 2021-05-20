import {SAVE_PRODUCTS_ACTION} from '../../constants/actionTypes'
import {ActionType} from "../../models/ActionTypeModel"
import IntegrationProductModel from "../../models/IntegrationProductModel"

const productsReducer = (state = new Array(), action: ActionType ) => {
    switch (action.type) {
        case SAVE_PRODUCTS_ACTION:
            let productIndex: number = state.findIndex(product => product.name === action.productName);
            let newProductsState: Array<IntegrationProductModel>;
            if (productIndex > -1) {
                newProductsState = [
                    ...state.slice(0, productIndex),
                    {
                        ...state[productIndex],
                        productList: action.products
                    },
                    ...state.slice(productIndex + 1)
                ]
            } else {
                let newProduct = {name: action.productName, productList: action.products}
                newProductsState = [...state, newProduct]
            }
            return newProductsState;
        default:
            return state;
    }
}

export default productsReducer;