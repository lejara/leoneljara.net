import * as React from "react";

const options = {
  image_height: 145,
  image_width: 145,
};

const Card = ({ title, children, image_src, image_alt, link, className }) => {
  return (
    <div className={`px-3 w-full relative ${className}`}>
      {image_src ? (
        <img
          className="transform relative translate-y-8 left-1/2 -translate-x-1/2"
          src={image_src}
          alt={image_alt}
          height={options.image_height}
          width={options.image_width}
        />
      ) : (
        <div
          className="m-0"
          style={{
            width: `${options.image_width}px`,
            height: `${options.image_height}px`,
          }}
        ></div>
      )}

      <div className="bg-gray-800 md:h-125 w-full p-5 pt-16 flex flex-col gap-11 rounded-md">
        <div>
          <h3 className="text-3xl md:text-4xl text-center lg:text-left">
            {title}
          </h3>
          <hr className="border-t-2 border-LJ_Green w-3/5 mt-3" />
        </div>

        <div className="text-lg md:text-xl overflow-y-scroll">{children}</div>

        <div className="mt-4 self-end">
          {link && (
            <a
              className="text-xl absolute bottom-8 left-7 underline"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Have a Look
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
