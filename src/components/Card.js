import * as React from "react";

const Card = ({ title, children, image_src, image_alt }) => {
  return (
    <div className={`card`}>
      <img className="card__image" src={image_src} alt={image_alt} />

      <div className="card__content p-4">
        <h3>{title}</h3>
        <div className="card__desc">{children}</div>
      </div>
    </div>
  );
};

export default Card;
