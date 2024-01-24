import { svgPaths } from "../utils/consts";
import { abbreviateName, handleServices } from "../utils/helper";
import SvgWrapper from "./SvgWrapper";

function Card({ setCopied, ...item }) {
  let services = handleServices(item.service);
  services = services.filter((service) => service.toLowerCase() !== "same day");

  const copyToClipboard = async (text) => {
    try {
      setCopied(true);
      await navigator.clipboard.writeText(text);
      setTimeout(() => setCopied(false), 700);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className="card w-[22rem] bg-base-100">
      <div className="card-body text-left text-lg">
        <span className="flex">
          <p className="font-bold">
            {`${abbreviateName(item.name)} -`} <span>{item.phone}</span>
          </p>
          <span onClick={() => copyToClipboard(item.phone)}>
            <SvgWrapper pathData={svgPaths.copy} size={6} />
          </span>
        </span>

        <p>{`${item.date}, ${item.time}`}</p>

        <span className="flex justify-between text-sm">
          {item.address}
          <span
            className="opacity-60"
            onClick={() => copyToClipboard(item.address)}
          >
            <SvgWrapper pathData={svgPaths.copy} size={6} />
          </span>
        </span>

        <ul className="ml-4 list-disc">
          {services.map((item, i) => (
            <li key={i}>
              <p>{item}</p>
            </li>
          ))}
        </ul>
        <span className="flex justify-between">
          <p className="text-lg font-bold">
            <span>{`Total: ${item.payment}`}</span> -{" "}
            <a href={item.invoice} target="_blank" className="tracking-wider">
              INVOICE
            </a>
          </p>
          <span
            onClick={() => copyToClipboard(item.invoice)}
            className="text-secondary"
          >
            <SvgWrapper pathData={svgPaths.copy} size={6} />
          </span>
        </span>
      </div>
    </div>
  );
}

export default Card;
