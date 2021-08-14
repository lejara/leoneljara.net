import * as React from "react";

const Card = ({ title, children, image_src, image_alt, styleName }) => {
  return (
    <div className={`m-2 ${styleName}`}>
      <h3>{title}</h3>
      <img src="" alt={image_alt} />
      <div className="card__content p-4">{children}</div>
    </div>
  );
};

export default Card;
