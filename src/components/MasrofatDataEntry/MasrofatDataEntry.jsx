import React from "react";
import MasrofatUpload from "components/MasrofatUpload/MasrofatUpload";

const MasrofatDataEntry = () => {
  return (
    <div>
      <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-1 flex-col items-start justify-start my-0 rounded-[12px] shadow-bs w-full mt-5">
        <MasrofatUpload />
      </div>
    </div>
  );
};

export default MasrofatDataEntry;
