import React from "react";

import { Button, Text } from "components";

const SalesReportHeader = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row gap-4 items-start justify-start w-full">
          <div className="flex flex-1 flex-col h-full items-start justify-center w-full">
            <Text
              className="text-gray-900 text-lg w-full"
              size="InArSemiBold18"
            >
              {props?.title}
            </Text>
          </div>
          <div className="flex flex-col items-center justify-start w-auto">
            <Button className="bg-white-A700 border border-blue_gray-100 border-solid cursor-pointer font-inter font-semibold min-w-[112px] py-[11px] rounded-lg shadow-bs text-blue_gray-800 text-center text-sm">
              {props?.onviewreportclick}
            </Button>
          </div>
        </div>
        <div className="border-b border-blue_gray-50 border-solid flex flex-col items-start justify-start md:w-full">
          <div className="flex flex-row gap-4 items-start justify-start w-auto">
            <Text
              className="border-b-2 border-deep_purple-500 border-solid pb-3 pt-0.5 px-1 text-deep_purple-500 text-sm w-auto"
              size="InArSemiBold14"
            >
              {props?.duration12months}
            </Text>
            <div className="flex flex-col items-center justify-center pb-[11px] px-1 w-auto">
              <Text
                className="text-blue_gray-500 text-sm w-auto"
                size="InArSemiBold14Bluegray"
              >
                {props?.duration30days}
              </Text>
            </div>
            <div className="flex flex-col items-center justify-center pb-[11px] px-1 w-auto">
              <Text
                className="text-blue_gray-500 text-sm w-auto"
                size="InArSemiBold14Bluegray"
              >
                {props?.duration7days}
              </Text>
            </div>
            <div className="flex flex-col items-center justify-center pb-[11px] px-1 w-auto">
              <Text
                className="text-blue_gray-500 text-sm w-auto"
                size="InArSemiBold14Bluegray"
              >
                {props?.duration24hours}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

SalesReportHeader.defaultProps = {
  title: "Sales report",
  onviewreportclick: "View report",
  duration12months: "12 months",
  duration30days: "30 days",
  duration7days: "7 days",
  duration24hours: "24 hours",
};

export default SalesReportHeader;
