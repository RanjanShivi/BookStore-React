import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "../pages/home/homepage";
import BookStoreMain from "../pages/main/mainpage";
import Wishlist from "../pages/wishlist/wishlist";
import Cart from '../pages/cart/cart';
import OrderSuccessfull from "../pages/ordersuccessfull/successfull";

function BookRouter() {
    return (
        <>
            <BrowserRouter >
                <Switch>
                    <Route exact path="/" component={BookStoreMain} />
                    <Route path="/Home" component={HomePage} />
                    <Route path="/Wishlist" component={Wishlist} />
                    <Route path="/Cart" component={Cart} />
                    <Route path="/OrderPlaced" component={OrderSuccessfull} />
                </Switch>
            </BrowserRouter>
        </>
    )
}
export default BookRouter;