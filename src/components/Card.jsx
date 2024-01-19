import { handlePhone, handleServices } from "../utils/helper";

function Card({ ...item }) {
  let services = handleServices(item.service);
  services = services.filter((service) => service.toLowerCase() !== "same day");

  return (
    <div className="card w-[22rem] bg-base-100">
      <div className="card-body text-left text-lg">
        <h2 className="font-bold">
          {`${item.name} -`}{" "}
          <a href={`tel:${handlePhone(item.phone)}`}>{item.phone}</a>
        </h2>

        <p>{`${item.date}, ${item.time}`}</p>

        <p className="text-sm">
          <a href={`http://maps.google.com/?q=${item.address}`} target="_blank">
            {item.address}
          </a>
        </p>

        <ul className="ml-4 list-disc">
          {services.map((item, i) => (
            <li key={i}>
              <p>{item}</p>
            </li>
          ))}
        </ul>

        <p className="text-lg font-bold">
          <span>{`Total: ${item.payment}`}</span> -{" "}
          <a href={item.invoice} target="_blank" className="tracking-wider">
            INVOICE
          </a>
        </p>
      </div>
    </div>
  );
}

export default Card;
