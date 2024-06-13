import React from 'react';
import ProductList from '../components/ProductList';
import NavigationBar from '../components/Navbar';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div>
      <NavigationBar />
      <div className="container mt-4">
        <h1>Productos</h1>
        <ProductList />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
