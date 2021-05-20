import React, { Fragment, useState } from 'react'
import { RootStateOrAny, useSelector, useDispatch } from 'react-redux';
import IntegrationProductModel from '../../models/IntegrationProductModel';
import ProductModel from '../../models/ProductModel';

import {addProductToCart} from "../../redux/actions/cartAction"
import { Theme, createStyles, makeStyles, withStyles } from '@material-ui/core/styles';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { LinearProgress, TextField, Tooltip, Typography } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        title: {
            fontSize: 20,
            color: theme.palette.primary.light,
        },
        titleBar: {
            background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 100%, rgba(0,0,0,0.3) 100%, rgba(0,0,0,0) 100%)',
        },
}),
);


const HtmlTooltip = withStyles((theme: Theme) => ({
    tooltip: {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.primary.main,
        maxWidth: 220,
        fontSize: theme.typography.pxToRem(15),
        border: '1px solid #dadde9',
    },
}))(Tooltip);


interface Props {
    USItemId: string,
    product?: ProductModel
}

const ListProduct = (props: Props) => {
    let {USItemId, product} = props;
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [userFeedbackMsg, setUserFeedbackMsg] = React.useState("");
    const [productQuantity, setProductQuantity] = useState(0)
    const dispatch = useDispatch();
    const products = useSelector((state: RootStateOrAny) => state.Products);
    if (!product && products && products.length > 0) {
        product = products
            .find((p: IntegrationProductModel) => p.productList.find((dt:ProductModel) => dt.USItemId === USItemId));
    }

    const handleAddProduct = async () => {
        if (product && product.USItemId) {
            await dispatch(addProductToCart(product.USItemId, productQuantity));
            setUserFeedbackMsg('Product added !');
        } else {
            setUserFeedbackMsg('Error: Product id not fount');
        }
        handleUserFeedback();
    }
    const handleUserFeedback = () => {
        setOpen(true);
    };
    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    if (!product) return <LinearProgress />;
    return (
        <Fragment>
            <GridListTile>
                <HtmlTooltip title={
                    <React.Fragment>
                        <Typography color="inherit">Product Details</Typography>
                        <b>{product.basic.name}</b>
                    </React.Fragment>
                } placement="top-end">        
                    <img src={product.basic.image.thumbnail} alt={product.USItemId} />
                </HtmlTooltip>
                <GridListTileBar
                    title={
                        <Tooltip title="Quantity liked" placement="bottom">
                            <TextField id="idQuantityProduct" type="number" variant="outlined" label="Quantity" size="small" InputProps={{ inputProps: { min: 0, max: 99 } }}
                            value={productQuantity}
                            onChange={(e) => setProductQuantity(parseInt(e.target.value))}
                            />
                        </Tooltip>
                    }
                    classes={{
                        root: classes.titleBar,
                        title: classes.title,
                    }}
                    actionIcon={
                        <IconButton aria-label={`cart ${product.basic.name}`}>
                            <Tooltip title="Add to cart" placement="bottom">
                                <AddShoppingCartIcon className={classes.title} onClick={() => handleAddProduct()}/>
                            </Tooltip>
                        </IconButton>
                    }
                />
                </GridListTile>
                <Snackbar anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                open={open} autoHideDuration={2000} onClose={handleClose} message={userFeedbackMsg} action={
                <React.Fragment>
                    <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                        <CloseIcon fontSize="small" />
                    </IconButton>
          </React.Fragment>
        }
      />
        </Fragment>
    )
}

export default ListProduct;
