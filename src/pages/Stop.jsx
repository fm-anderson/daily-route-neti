import { handleServices, handleAddress, handlePhone } from "../utils/helper";

function Stop({ ...item }) {
  const services = handleServices(item.service);

  return (
    <div className="collapse justify-center rounded-none bg-base-300">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium">
        <p>{`${item.index} - ${handleAddress(item.address)}`}</p>
      </div>

      <div className="collapse-content">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body text-left text-lg">
            <h2 className="font-bold">
              {`${item.name} -`}{" "}
              <a href={`tel:${handlePhone(item.phone)}`}>{item.phone}</a>
            </h2>

            <p>{`${item.date}, ${item.time}`}</p>

            <p className="text-sm">
              <a
                href={`http://maps.google.com/?q=${item.address}`}
                target="_blank"
              >
                {item.address}
              </a>
            </p>

            <ul className="ml-4 list-disc">
              {services.map((serviceItem, i) => (
                <li key={i}>
                  <p>{serviceItem}</p>
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
      </div>
    </div>
  );
}

export default Stop;
