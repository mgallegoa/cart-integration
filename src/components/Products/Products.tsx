import { LinearProgress, Typography } from '@material-ui/core';
import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { saveProductsByName } from '../../redux/actions/productsActions';
import { getAllProducts } from '../../services/HTTPServices';
import ListProducts from './ListProducts';


const Products = () => {
    let productsNameList: string[] = ["Butter", "Eggs", "Eggs Noodles", "Chicken", "Chili Pepper"];
    if (process.env.NODE_ENV === 'development') {
        productsNameList = ["Butter", "Eggs"];
    }
    const [appIsLoading, setAppIsLoading] = useState(true);
    const [appLoadingErrorMsg, setAppLoadingErrorMsg] = useState("");
    const dispatch = useDispatch();
    
    const getProducts = async () => {
        try {
            const allProducts = await getAllProducts(productsNameList);
            for (let i = 0; i < productsNameList.length; i++) {
                dispatch(saveProductsByName(productsNameList[i], allProducts[i].data.products));
            }            
            setAppIsLoading(false);
            setAppLoadingErrorMsg("");
        } catch (error){
            setAppLoadingErrorMsg(`Error fetching the data of the products, cause by: ${error}`);
            setAppIsLoading(false);
        }
    }

    useEffect(() => {
        getProducts();
    }, []);
    
    if (appIsLoading) return <LinearProgress />;
    
    if (appLoadingErrorMsg) return <Typography variant="h5" >Something went wrong {appLoadingErrorMsg === "" ? "": `cause by ${appLoadingErrorMsg}`}</Typography>;

    return (
        <Fragment>
            {productsNameList.map((productName: string) => 
                <ListProducts productName = {productName} key={productName}/>
            )}
        </Fragment>
    )
}

export default Products;
