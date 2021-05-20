interface BasicModel  {
    salesUnit: string,
    name: string,
    image: { thumbnail: string},
    weightIncrement: number,
    averageWeight: string | null,
    maxAllowed: number,
    productUrl: string,
    isSnapEligible: boolean,
    type: string,
}
interface DetailedModel {
    rating: number,
    reviewsCount: number
}
interface PriceModel {
    list: number,
    previousPrice: number,
    priceUnitOfMeasure: string,
    salesUnitOfMeasure: string,
    salesQuantity: number,
    displayCondition: string | null,
    displayPrice: number,
    displayUnitPrice: string,
    isClearance: boolean,
    isRollback: boolean,
    unit: number
}
interface StoreModel {
    isOutOfStock: boolean,
    price: PriceModel
}

export default interface ProductModel {
    USItemId: string,
    offerId: string,
    sku: string,
    basic: BasicModel,
    detailed: DetailedModel,
    store: StoreModel,
}