import * as React from "react";

const Card = ({ title, children, image_src, image_alt, link }) => {
  return (
    <div className={`card`}>
      <img className="card__image" src={image_src} alt={image_alt} />

      <div className="card__content p-5">
        <div className="mt-16">
          <h3 className="card__title">{title}</h3>
          <p className="card__desc mt-5">{children}</p>
          <div className="card__action--link mt-2">
            <a className="link-primary" href={link}>
              Have a Look →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
