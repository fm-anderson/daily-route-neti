import { useState } from "react";
import { handleAddress, handleSameDay, handleServices } from "../utils/helper";
import ExpandCollapse from "./ExpandCollapse";
import Actions from "./Actions";
import Card from "./Card";

function Stop({ displayIndex, listView, setModalAddress, setCopied, ...item }) {
  const [isChecked, setIsChecked] = useState(false);
  const isSameDay = handleSameDay([item], handleServices);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <>
      {!isChecked && (
        <Actions
          displayIndex={displayIndex}
          listView={listView}
          setModalAddress={setModalAddress}
          {...item}
        />
      )}
      {!listView && (
        <div
          className={`collapse justify-center bg-base-300 ${
            !isChecked && "rounded-t-none"
          }`}
        >
          <input
            type="checkbox"
            onChange={handleCheckboxChange}
            checked={isChecked}
          />
          <div
            className={`collapse-title flex justify-between text-xl font-medium ${
              isSameDay && isChecked && "bg-accent"
            }`}
          >
            <span className="flex gap-2">
              {isChecked && <p>{displayIndex}</p>}
              <p>{`${handleAddress(item.address)}`}</p>
            </span>
            <ExpandCollapse isChecked={isChecked} />
          </div>

          <div className={`collapse-content ${isSameDay && "bg-accent"}`}>
            <Card setCopied={setCopied} {...item} />
          </div>
        </div>
      )}
    </>
  );
}

export default Stop;
