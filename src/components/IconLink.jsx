import SvgWrapper from "./SvgWrapper";

function IconLink({ href, pathData, size }) {
  return (
    <a href={href} className="text-base-content" target="_blank">
      <SvgWrapper pathData={pathData} size={size} />
    </a>
  );
}

export default IconLink;
