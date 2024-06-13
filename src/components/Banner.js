import React from 'react';

const Banner = () => {
  return (
    <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/banerArt.jpg)`,backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', height: '200px' }}>
      {/* Contenido del banner aquí */}
    </div>
  );
};

export default Banner;
