import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from '../components/Home';
import Cart from '../components/Cart';
import Product from '../components/Product';
import Order from '../components/Order';

const Routes = () => {
    return(
    <Switch>
        <Route path="/" render={() => <Home />} />
        <Route path="/cart" render={() => <Cart />} />
        <Route path="/product" render={() => <Product />} />
        <Route path="/order" render={() => <Order />} />
    </Switch>
    )
}

export default Routes;