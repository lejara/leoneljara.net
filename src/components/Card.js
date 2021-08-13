import * as React from "react";

const Card = ({ image_alt, styleName }) => {
  return (
    <div className={`m-2 ${styleName}`}>
      <img src="" alt={image_alt} />
      <div className="card__content p-4">content in card</div>
    </div>
  );
};

export default Card;
