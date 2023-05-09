import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import AboutPage from "./pages/AboutPage"


function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/Products" element={<ProductsPage/>}></Route>
        <Route path="/About" element={<AboutPage/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
