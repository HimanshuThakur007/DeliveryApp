// import React from 'react';
// import { Redirect, Route, Switch } from 'react-router-dom';
// import Home from './Home';
// import SubProductPage from '../SubProductPage';
// import ProductDetail from '../ProductDetail';
// import AddToCart from '../AddToCart';
// import PlaceOrder from '../Place_Order/PlaceOrder'
// import PaymentPage from '../Place_Order/PaymentPage'


// const ItemsRoute = ({match}) => {
//   return (
//     <Switch>
//      <Redirect exact from={`${match.url}/`} to={`${match.url}/home`} />
//      <Route path={`${match.url}/home`} component={Home} />
//      <Route path={`${match.url}/subproducts`} component={SubProductPage} />
//      <Route path={`${match.url}/productDetail`} component={ProductDetail} />
//      <Route path={`${match.url}/addtocart`} component={AddToCart} />
//      <Route path={`${match.url}/placeorder`} component={PlaceOrder} />
//      <Route path={`${match.url}/Payment`} component={PaymentPage} />
//    </Switch>
//   ) 
// }

// export default ItemsRoute;