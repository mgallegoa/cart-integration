import ProductModel from "./ProductModel"
export interface ActionType {
    type: string,
    productName: string,
    products?: ProductModel[]
}