import { useState } from "react";
import { handleAddress } from "../utils/helper";
import ExpandCollapse from "./ExpandCollapse";
import Actions from "./Actions";
import Card from "./Card";

function Stop({ displayIndex, ...item }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <>
      {!isChecked && <Actions displayIndex={displayIndex} {...item} />}
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
        <div className="collapse-title flex justify-between text-xl font-medium">
          <span className="flex gap-2">
            {isChecked && <p>{displayIndex}</p>}
            <p>{`${handleAddress(item.address)}`}</p>
          </span>
          <ExpandCollapse isChecked={isChecked} />
        </div>

        <div className="collapse-content">
          <Card {...item} />
        </div>
      </div>
    </>
  );
}

export default Stop;
