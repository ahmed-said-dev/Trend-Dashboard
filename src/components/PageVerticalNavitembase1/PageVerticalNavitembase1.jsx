import React from "react";
import { Img, Text } from "components";

const PageVerticalNavitembase1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-3 items-center justify-end w-full">
          <Text
            className="text-base text-gray-900 text-right w-auto"
            size="PlArSemiBoldGray16"
          >
            {props?.text}
          </Text>
          <Img
            className="h-6 w-6"
            src="images/img_barchart01.svg"
            alt="barchartOne"
          />
        </div>
      </div>
    </>
  );
};

PageVerticalNavitembase1.defaultProps = { text: "المشروعات" };

export default PageVerticalNavitembase1;
