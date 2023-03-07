import React from "react";

const PictosCase = ({ src, alt, id, name }) => {
  return (
    <div>
      <img src={src} alt={alt} id={`picto${id}`} className="eachPicto" />
      <p>{name}</p>
    </div>
  );
};

export default PictosCase;
