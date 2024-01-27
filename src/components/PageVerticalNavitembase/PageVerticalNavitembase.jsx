import React from "react";
import { Img, Text } from "components";

const PageVerticalNavitembase = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="cursor-pointer flex flex-row gap-3 items-center justify-end w-full">
          <Text
            className="text-base text-blue_gray-800 text-right w-auto"
            size="PlexSemiBold16"
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

PageVerticalNavitembase.defaultProps = { text: "نظرة عامة" };

export default PageVerticalNavitembase;
