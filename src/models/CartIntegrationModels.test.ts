import { ADD_PRODUCT_TO_CART_ACTION, SAVE_PRODUCTS_ACTION } from "../constants/actionTypes";
import {ActionType} from "./ActionTypeModel"
import {ActionCartType} from "./ActionCartTypeModel"
import ProductModel from "./ProductModel";
import CartModel from "./CartModel"
import IntegrationProductModel from "./IntegrationProductModel"


describe('Test the models for the app cart integration', () => {
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

    test('should ActionType with the right types', () => {
        //given
        const productActionMock: ActionType = {type:SAVE_PRODUCTS_ACTION,productName: "Chicken"};
        //then
        //expect
        expect(productActionMock.type).toBe(SAVE_PRODUCTS_ACTION);
        expect(productActionMock.productName).toBe("Chicken");
    });

    test('should ProductModel with the right types', () => {
        //given
        const productsMockList: ProductModel[] = [productMock];
        //then
        //expect
        expect(productsMockList[0].USItemId).toBe("172844767");
        expect(productsMockList[0].offerId).toBe("B5F11C1D43E341A39D4AD36DAFE80526");
        expect(productsMockList[0].sku).toBe("3100149894");
    });
    
    test('should ActionCartType with the right types', () => {
        //given
        const cartActionMock: ActionCartType = {type:ADD_PRODUCT_TO_CART_ACTION,USItemId:"123", quantity:3};
        //then
        //expect
        expect(cartActionMock.type).toBe(ADD_PRODUCT_TO_CART_ACTION);
        expect(cartActionMock.USItemId).toBe("123");
        expect(cartActionMock.quantity).toBe(3);
    });

    test('should CartModel with the right types', () => {
        //given
        const cartModelMock: CartModel = {USItemId:"123", quantity:3};
        //then
        //expect
        expect(cartModelMock.USItemId).toBe("123");
        expect(cartModelMock.quantity).toBe(3);
    });

    test('should IntegrationProductModel with the right types', () => {
        //given
        const productListMock: ProductModel[] = [];
        const integrationModelMock: IntegrationProductModel = {name:"Eggs", productList:productListMock};
        //then
        //expect
        expect(integrationModelMock.name).toBe("Eggs");
        expect(integrationModelMock.productList).toEqual([]);
    });
    
});
