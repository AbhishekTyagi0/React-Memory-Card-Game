import React from "react";

const GridGameItem = ({ images, id }) => {
  return (
    <div>
      <img src={images} alt="GIF" />
    </div>
  );
};

export default GridGameItem;
