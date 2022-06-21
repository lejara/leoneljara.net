import * as React from "react";

const Card = ({
  title,
  children,
  image_src,
  image_alt,
  link,
  titleTop = false,
}) => {
  return (
    <div className={`card`}>
      {image_src ? (
        <img
          className="card__image"
          src={image_src}
          alt={image_alt}
          height={130}
          width={130}
        />
      ) : (
        <div
          className="card__image"
          style={{ width: "130px", height: "130px" }}
        ></div>
      )}

      <div className="card__content p-5">
        <div className={`${!titleTop && "mt-16"}`}>
          <h3 className="text-3xl mb-3">{title}</h3>
          <div className="card__desc text-xl">{children}</div>

          {link && (
            <div className="card__action--link mt-2">
              <a
                className="link-primary text-xl"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Have a Look →
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
