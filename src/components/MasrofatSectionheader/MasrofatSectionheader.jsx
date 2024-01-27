import React from "react";

import { Text } from "components";

const MasrofatSectionheader = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-end w-full">
          <div className="flex flex-col h-full items-end justify-center w-full">
            <Text
              className="text-base text-gray-900 text-right w-full"
              size="PlArSemiBoldGray16"
            >
              {props?.expensetext}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

MasrofatSectionheader.defaultProps = { expensetext: "المصروفات" };

export default MasrofatSectionheader;
