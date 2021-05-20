import { SAVE_PRODUCTS_ACTION } from "../../constants/actionTypes"
import {ActionType} from "../../models/ActionTypeModel"
import productsReducer from "./products"
import ProductModel from "../../models/ProductModel"

describe('Test the reducer for products', () => {
    const productMock: ProductModel = {
      USItemId: "172844767",
      offerId: "B5F11C1D43E341A39D4AD36DAFE80526",
      sku: "3100149894",
      basic: {
        salesUnit: "Each",
        name: "Great Value Large White Eggs, 18 Count",
        image: {
          thumbnail: "https://i5.walmartimages.com/asr/df2ea507-1953-4cb9-97b6-a1bc10f3dd19_1.bc951a020f826ffe87cf466c3fc1c130.jpeg?odnHeight=150&odnWidth=150&odnBg=ffffff"
        },
        weightIncrement: 1,
        averageWeight: null,
        maxAllowed: 12,
        productUrl: "/ip/Great-Value-Large-White-Eggs-18-Count/172844767",
        isSnapEligible: true,
        type: "REGULAR"
      },
      detailed: {
        rating: 4.3,
        reviewsCount: 164
      },
      store: {
        isOutOfStock: false,
        price: {
          list: 2.04,
          previousPrice: 0,
          priceUnitOfMeasure: "each",
          salesUnitOfMeasure: "each",
          salesQuantity: 18,
          displayCondition: null,
          displayPrice: 2.04,
          displayUnitPrice: "(11.3 ¢/ea)",
          isClearance: false,
          isRollback: false,
          unit: 0.113
        }
      }
    }

test('should return the right state for save new product list', () => {
    const productsMockList: ProductModel[] = [productMock];
    
    const actionSaveNewProductsList: ActionType = {
        type: SAVE_PRODUCTS_ACTION,
        productName: "Eggs",
        products: productsMockList,
    }

    const stateProducts = productsReducer([], actionSaveNewProductsList);

    expect(stateProducts[0].name).toBe(actionSaveNewProductsList.productName);
    expect(stateProducts[0].productList).toBe(actionSaveNewProductsList.products);
})  
})
