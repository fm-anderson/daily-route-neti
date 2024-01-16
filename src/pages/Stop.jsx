function Stop() {
  return (
    <div className="collapse justify-center rounded-none bg-base-300">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium">
        <p>1 - Danvers, MA (Apt 000)</p>
      </div>

      <div className="collapse-content">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body text-left text-lg">
            <span className="flex justify-between">
              <h2 className="font-bold">
                Pedro Doe - <a href="tel:7774449999">777 444 9999</a>
              </h2>
              <input type="checkbox" checked="checked" className="checkbox" />
            </span>

            <p>Jan 15, 10 AM - 01 PM</p>

            <p>
              <a
                href={`http://maps.google.com/?q=${"180 Newcastle Ln, Danvers, NH 03333"}`}
                target="_blank"
              >
                180 Newcastle Ln, Danvers, NH 03333
              </a>
            </p>

            <ul>
              <li>
                <p>item</p>
              </li>
              <li>
                <p>item</p>
              </li>
              <li>
                <p>item</p>
              </li>
            </ul>

            <p className="text-lg font-bold">
              <span>Total: $173.97</span> -{" "}
              <a href="#" className="tracking-wider">
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
