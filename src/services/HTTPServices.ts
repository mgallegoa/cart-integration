import axios from "axios"

export const getAllProducts = (productsNameList: string[]) => {
    //const serverAPI = productsNameList.map(pn => axios.get(`https://cors-anywhere.herokuapp.com/https://www.walmart.com/grocery/v4/api/products/search?storeId=3748&query=${pn}&count=60&page=1&offset=0`));

    let serverAPI;
    if (process.env.NODE_ENV === 'development') {
        serverAPI = productsNameList.map(pn => axios.get(`${process.env.REACT_APP_BASE_URL_PRODUCTS}/${pn}`));
    } else {
        serverAPI = productsNameList.map(pn => axios.get(`${process.env.REACT_APP_BASE_URL_PRODUCTS}/v4/api/products/search?storeId=3748&query=${pn}&count=60&page=1&offset=0`));
    }

    return axios.all(serverAPI)
            .then(
                axios.spread((...allProducts) => {
                    return allProducts;
                })
            )
}

export const addToCartIntegration = (idsQuantity: string) =>{
    return axios.get(
        `${process.env.REACT_APP_BASE_URL_ADD_TO_CART}/0/2?items=${idsQuantity}&veh=aff&sourceid=imp_Xk1U1eWRkxyJRw3wUx0Mo38zUkix7TWhry3qyg0&veh=aff&wmlspartner=imp_1789939&clickid=Xk1U1eWRkxyJRw3wUx0Mo38zUkix7TWhry3qyg0`
        );
}