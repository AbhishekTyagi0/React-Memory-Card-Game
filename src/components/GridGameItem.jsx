import React from "react";

const GridGameItem = ({ images, id, clickHandler }) => {
  return (
    <div>
      <img
        id={id}
        src={images}
        alt="GIF"
        onClick={(e) => {
          clickHandler(e);
        }}
      />
    </div>
  );
};

export default GridGameItem;
