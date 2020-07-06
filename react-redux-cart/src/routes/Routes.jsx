import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from '../components/Home';
import Cart from '../components/Cart';
import Product from '../components/Product';
import Order from '../components/Order';

const Routes = () => {
    return(
    <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/cart" render={() => <Cart />} />
        <Route exact path="/product" render={() => <Product />} />
        <Route exact path="/order" render={() => <Order />} />
    </Switch>
    )
}

export default Routes;