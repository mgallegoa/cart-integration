import { Container, CssBaseline } from '@material-ui/core';
import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import NavBar from './components/Navbar/NavBar';
import Products from './components/Products/Products';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
    root: {
      padding: "15px 0px 0px 0px",
    }
  })
)

function App() {
  const classes = useStyles();
  return (
    <Fragment>
      <BrowserRouter>
          <NavBar/>
          <CssBaseline />
          <Container maxWidth="md" className={classes.root}>
            <Switch>
              <Route exact path={["/", "/products"]} component={Products} />
            </Switch>
          </Container>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
