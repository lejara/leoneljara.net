import * as React from "react";

const Card = ({ title, children, image_src, image_alt, link }) => {
  return (
    <div className={`card`}>
      <img
        className="card__image"
        src={image_src}
        alt={image_alt}
        height={130}
        width={130}
      />

      <div className="card__content p-5">
        <div className="mt-16">
          <h3 className="card__title mb-3">{title}</h3>
          <div className="card__desc">{children}</div>
          <div className="card__action--link mt-2">
            <a
              className="link-primary"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Have a Look →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
