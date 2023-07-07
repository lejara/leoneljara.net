import React from "react";

const SectionTitle = ({ title, adword, right = false, center = false }) => {
  return (
    <div className={`${right && "text-right"} ${center && "text-center"} mx-3`}>
      <h2 className={`text-7xl lg:text-9xl`}>{title}</h2>
      {adword && (
        <h3 className="text-xl lg:text-4xl font-sans transform -translate-y-5  opacity-90">
          {adword}
        </h3>
      )}
    </div>
  );
};

export default SectionTitle;
