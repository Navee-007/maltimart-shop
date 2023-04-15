import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import ProductDetails from "../pages/ProductDetails";
import Checkout from "../pages/Checkout";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
// import Profile from "../profile/Profile";

// import AddProducts from "../admin/AddProducts";
import Address from "../profile/Address";
import Profile from "../profile/Profile";
import Orders from "../profile/Orders"

// import ProtectedRoute from "./ProtectedRoute";

const Routers = () => {
  return (
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="home" element={<Home />} />☻
      <Route path="shop" element={<Shop />} />
      <Route path="shop/:id" element={<ProductDetails />} />
      <Route path="cart" element={<Cart />} />
      {/* <Route path="profile" element={<Profile />} /> */}

     
        <Route path="checkout" element={<Checkout />} />
        <Route path="profile" element={<Profile />} />
        <Route path="address" element={<Address />} />
        {/* <Route path="dashboard/add-product" element={<AddProducts />} /> */}
        <Route path="orders" element={<Orders />} />

     


      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />


    </Routes>
  );
};

export default Routers;
