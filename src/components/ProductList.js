/* import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const ProductCard = ({ product }) => {
  return (
    <Card sx={{ margin: 2 }}>
      <CardContent>
        <Typography variant="h5">{product.name}</Typography>
        <Typography variant="body2">{product.description}</Typography>
        <Typography variant="h6">${product.price}</Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard; */

import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import mockProducts from '../data/mockData';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simula una llamada a la API cargando los datos simulados
    setProducts(mockProducts);
  }, []);

  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;

