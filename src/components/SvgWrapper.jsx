function SvgWrapper({ pathData, size }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className={`h-${size} w-${size} fill-current stroke-current`}
    >
      {pathData.map((path, index) => (
        <path key={index} d={path}></path>
      ))}
    </svg>
  );
}

export default SvgWrapper;
