import React from "react";

function IconLink({ href, pathData }) {
  return (
    <a href={href} className="text-base-content" target="_blank">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="h-7 w-7 fill-current stroke-current"
      >
        {pathData.map((path, index) => (
          <path key={index} d={path}></path>
        ))}
      </svg>
    </a>
  );
}

export default IconLink;
