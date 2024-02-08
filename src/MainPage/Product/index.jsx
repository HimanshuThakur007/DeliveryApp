/* eslint-disable react/prop-types */
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
// import { Routes, Route} from 'react-router-dom';
import ProductList from './ProductList';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';
import ImportProduct from './ImportProduct';
import ProductDetails from './productDetails';


const ProductRoute = () => (
  <Routes>
    <Route path="productlist-product" element={<ProductList />} />
    <Route path="addproduct-product" element={<AddProduct />} />
    <Route path="editproduct-product" element={<EditProduct />} />
    <Route path="importproduct-product" element={<ImportProduct />} />
    <Route path="product-details" element={<ProductDetails />} />
    <Route
      path="/"  element={<Navigate to="productlist-product" replace />}
    />
   
  </Routes>
);

export default ProductRoute;
