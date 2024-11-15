// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupAndLogin from './components/SignupAndLogin';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import ProductManagement from './components/ProductManagement';
import UserManagement from './components/UserManagement';
import Transactions from './components/Transactions'; // Import the Transactions component
import './App.css';
import { useState } from 'react';

function App() {
  const [products, setProducts] = useState([]); // Lifted product state

  return (
    <Router>
      <Routes>
        {/* Login and Signup Routes */}
        <Route path="/" element={<SignupAndLogin isLogin={false} />} />
        <Route path="/signup" element={<SignupAndLogin isLogin={false} />} />
        <Route path="/login" element={<SignupAndLogin isLogin={true} />} />

        {/* Routes with Navbar */}
        <Route
          path="/dashboard"
          element={
            <>
              <Navbar />
              <Dashboard products={products} />
            </>
          }
        />
        <Route
          path="/products"
          element={
            <>
              <Navbar />
              <ProductManagement setProducts={setProducts} />
            </>
          }
        />
        <Route
          path="/users"
          element={
            <>
              <Navbar />
              <UserManagement />
            </>
          }
        />
        <Route
          path="/trans"
          element={
            <>
              <Navbar />
              <Transactions />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;