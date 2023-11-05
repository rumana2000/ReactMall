import React from "react";
import Layout from "./component/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import Shop from "./pages/Shop";
import About from "./pages/About"
import Contact from "./pages/Contact";
import LogIn from "./pages/Login";
import ProductDetails from "./component/ProductDetails"
function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/products/:productId" element ={<ProductDetails/>}/>
          <Route path="/category/:slug" element={<CategoryPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LogIn />} />
        </Route>
      </Routes>
    </>
  )
}


export default App

