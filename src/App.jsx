import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/pages/Home";

import Wishlist from "./components/pages/Wishlist";

import Login from "./auth/Login";
import Signup from "./auth/Signup";
import Cart from "./components/pages/Cart";
import Footer from "./components/Footer";
import Filter from "./dashboard/pages/Filter";
import CategoryPage from "./dashboard/pages/CategoryPage";

import DashboardLayout from "./dashboard/DashboardLayout";
import DashboardModule from "./dashboard/pages/DashboardModule";
import AvailableModule from "./dashboard/pages/AvailableModule";
import CatalogueModule from "./dashboard/pages/CatalogueModule";
import Menu from "./dashboard/pages/Menu";
import Orders from "./dashboard/pages/Orders";
import Seeting from "./dashboard/pages/Seeting";
import Logout from "./dashboard/pages/Logout";
import Users from "./dashboard/pages/Users";
import Products from "./dashboard/pages/Products";
import Profile from "./dashboard/pages/Profile";

import MasterModule from "./dashboard/pages/MasterModule";
import InventoryModule from "./dashboard/pages/InventoryModule";
import TransactionModule from "./dashboard/pages/TransactionModule";
import GeneralReport from "./dashboard/pages/GeneralReport";
import FinanceReport from "./dashboard/pages/FinanceReport";

import DashboardHome from "./dashboard/pages/DashboardHome";
import TodaySummary from "./dashboard/pages/TodaySummary";
import QuickStatus from "./dashboard/pages/QuickStatus";
import RecentActivities from "./dashboard/pages/RecentActivities";
import Notifications from "./dashboard/pages/Notifications";

import Wedding from "./dashboard/pages/Categories/Wedding";
import Party from "./dashboard/pages/Categories/Party";
import Casual from "./dashboard/pages/Categories/Casual";
import Regular from "./dashboard/pages/Categories/Regular";
function App() {
  // ==================== Shared State ====================
  const [wishlistItems, setWishlistItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  // ==================== Functions ====================
  const addToWishlist = (item) => {
    if (!wishlistItems.find((i) => i.id === item.id)) {
      setWishlistItems([...wishlistItems, item]);
    }
  };

  const removeFromWishlist = (id) => {
    setWishlistItems(wishlistItems.filter((i) => i.id !== id));
  };

  const addToCart = (item) => {
    if (!cartItems.find((i) => i.id === item.id)) {
      setCartItems([...cartItems, { ...item, qty: 1 }]);
    }
    removeFromWishlist(item.id); // optional
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((i) => i.id !== id));
  };

  // =========================================================
  return (
    <BrowserRouter>
      <Header wishlistItems={wishlistItems} cartItems={cartItems} />
      <Sidebar />

      <div style={{ marginLeft: "0px" }} className="">
        <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<Signup />} />
          {/* Wishlist & Cart */}
          <Route
            path="/wishlist"
            element={
              <Wishlist wishlistItems={wishlistItems} addToCart={addToCart} />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
            }
          />

          {/* Filter Page */}
          <Route path="/filter" element={<Filter />} />

         
          
          

          {/* Dashboard Pages */}
          
          <Route path="/dashboard" element={<DashboardLayout />}>
          
            <Route index element={<DashboardModule />} />
            <Route path="available-modules" element={<AvailableModule />} />
            <Route path="catalogue-modules" element={<CatalogueModule />} />
            <Route path="menu" element={<Menu />} />
            <Route path="orders" element={<Orders />} />
            <Route path="Seeting" element={<Seeting />} />
            <Route path="Logout" element={<Logout />} />
            <Route path="Users" element={<Users />} />
            <Route path="products" element={<Products />} />
            <Route path="Filter" element={<Filter />} />
            <Route path="CategoryPage" element={<CategoryPage/>}/>
            <Route path="Profile" element={<Profile />} />
            <Route path="master-module" element={<MasterModule />} />
            <Route path="inventory-module" element={<InventoryModule />} />
            <Route path="transaction-module" element={<TransactionModule />} />
            <Route path="general-report" element={<GeneralReport />} />
            <Route path="finance-report" element={<FinanceReport />} />
            <Route path="Dashboard-home" element={<DashboardHome />} />
            <Route path="today-summary" element={<TodaySummary />} />
            <Route path="quick-status" element={<QuickStatus />} />
            <Route path="recent-activities" element={<RecentActivities />} />
            <Route path="notifications" element={<Notifications />} />

            <Route path="/dashboard/category/wedding" element={<Wedding />} />
        <Route path="/dashboard/category/party" element={<Party />} />
        <Route path="/dashboard/category/casual" element={<Casual />} />
        <Route path="/dashboard/category/regular" element={<Regular />} />
          </Route>
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
