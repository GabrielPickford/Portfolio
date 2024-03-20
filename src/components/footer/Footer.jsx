import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className="div">
    <div className="div-2">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ecdc10d2dd28ed9fefb19b1e97f5440d4557a78bbe9ffeaebebdc479536ea2c7?apiKey=98e930f8e11a4ca795d74fd9501a4b81&"
        className="img"
      />
      <div className="div-3">Copyright © 2024. All rights are reserved</div>
    </div>
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/8fd8f177813c6f03e5f64c59c72c7c75a931e29fd92ec5e630733cf2990e36b8?apiKey=98e930f8e11a4ca795d74fd9501a4b81&"
      className="img-2"
    />
  </div>
  );
};

export default Footer;