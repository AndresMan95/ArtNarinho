import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const ProductCard = ({ product }) => {
  return (<div>
   
    <Card sx={{ margin: 2 }}>
      
      <CardContent>
      <img
            src={`${process.env.PUBLIC_URL}/${product.image}`}
            alt={product.name}
            width="200"
            height="200"
          />
        <Typography variant="h5">{product.name}</Typography>
        <Typography variant="body2">{product.description}</Typography>
        <Typography variant="h6">${product.price}</Typography>
      </CardContent>
    </Card>
  </div>
    
  );
};

export default ProductCard;
