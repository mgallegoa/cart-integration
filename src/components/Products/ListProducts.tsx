import React, { Fragment } from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import IntegrationProductModel from '../../models/IntegrationProductModel';
import ProductModel from '../../models/ProductModel';
import { LinearProgress, Typography } from '@material-ui/core';
import { RootStateOrAny, useSelector } from 'react-redux';
import ListProduct from './ListProduct';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    title: {
        fontSize: 20,
        color: theme.palette.primary.light,
    },
    productTitle: {
        alignContent: "left",
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.background.default,
        padding: "5px 0px 5px 0px",
    },
}),
);

interface Props {
    productName: string
}
const ListProducts = (props: Props) => {
    const {productName} = props;
    const classes = useStyles();
    const products = useSelector((state: RootStateOrAny) => state.Products);
    let productList: ProductModel[] = [];
    if (products && products.length > 0) {
        productList = products.find((p: IntegrationProductModel) => p.name === productName).productList;
    }

    if (!productList) return <LinearProgress />;
    return (
        <Fragment>
        <Typography variant="h5" className={classes.productTitle}>{productName}</Typography>
        <div className={classes.root}>
            <GridList className={classes.gridList} cols={5.5}>
            {productList.map((product: ProductModel) => (
                <ListProduct USItemId={product.USItemId} product={product}  key={product.USItemId}/>
            ))}
            </GridList>
        </div>
    </Fragment>
    );
}


export default ListProducts;
