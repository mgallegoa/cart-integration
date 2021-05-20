import React, { Fragment, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Link from '@material-ui/core/Link'
import { Avatar, Badge, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { RootStateOrAny, useSelector } from 'react-redux';
import { addToCartIntegration } from '../../services/HTTPServices';
import { getStringForIdsQuantity } from '../../utils/appUtils';
import CartIntegration from '../Integrations/CartIntegration';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

const NavBar = () => {
    const classes = useStyles();
    const cart = useSelector((state: RootStateOrAny) => state.Cart);
    const [open, setOpen] = useState(false);
    const [openIntegrationNewWindow, setOpenIntegrationNewWindow] = useState(false);
    const [integrationResponse, setIntegrationResponse] = useState("");
    const [userFeedbackMsg, setUserFeedbackMsg] = useState("");
    const handleClose = () => {
      setOpen(false);
    };

    const handleGoToSite = async () => {
      try{
        const idsQuantity = getStringForIdsQuantity(cart);
        if (!idsQuantity || idsQuantity.length ===0) {
          setUserFeedbackMsg(`Please add the products to the cart.`);
          setOpen(true);
          return;
        }
        const response = await addToCartIntegration(idsQuantity);
        setIntegrationResponse(response.data);
        setOpenIntegrationNewWindow(true);
      }catch(error) {
        setUserFeedbackMsg(`Error: saving the product to cart service. Cause by ${error}`);
        setOpen(true);
      }
    }

    return (
        <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Manuel Grocery Integration App
          </Typography>

          <Link
            component="button"
            color="inherit"
            onClick={() => handleGoToSite()}
          >
            Go to Walmart site
          </Link>
          <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={cart.length} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          <Link href="https://mgallegoa.github.io/" color="inherit" target="_blank" rel="noopener">
              <Avatar alt="Manuel Arias" src="https://www.gravatar.com/avatar/dd43ba3e67fd9efdb57c9b60b16c4306.jpg?s=450" />
            </Link>
        </Toolbar>
      </AppBar>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Integration Service"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {userFeedbackMsg}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>Ok</Button>
        </DialogActions>
      </Dialog>
      {openIntegrationNewWindow ? 
        <CartIntegration drawData={integrationResponse} /> : 
        <Fragment></Fragment>
      }
    </div>
    );
}

export default NavBar;