import React from "react";

const SectionTitle = ({ title, adword, right = false }) => {
  return (
    <div>
      <h2 className={`${right && "text-right"} text-9xl  mx-3`}>{title}</h2>
      {adword && <h3 className="text-5xl font-sans">{adword}</h3>}
    </div>
  );
};

export default SectionTitle;
