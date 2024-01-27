import React from "react";
import { Text } from "components";

const ProjectOverviewHorizontaltabs = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-4 items-start justify-start w-auto">
          <Text
            className="border-b-2 border-deep_purple-500 border-solid pb-3 pt-0.5 px-1 text-deep_purple-500 text-sm w-auto"
            size="InArSemiBold14"
          >
            {props?.duration}
          </Text>
          <div className="flex flex-col items-center justify-center pb-[11px] px-1 w-auto">
            <Text
              className="text-blue_gray-500 text-sm w-auto"
              size="InArSemiBold14Bluegray"
            >
              {props?.durationOne}
            </Text>
          </div>
          <div className="flex flex-col items-center justify-center pb-[11px] px-1 w-auto">
            <Text
              className="text-blue_gray-500 text-sm w-auto"
              size="InArSemiBold14Bluegray"
            >
              {props?.durationTwo}
            </Text>
          </div>
          <div className="flex flex-col items-center justify-center pb-[11px] px-1 w-auto">
            <Text
              className="text-blue_gray-500 text-sm w-auto"
              size="InArSemiBold14Bluegray"
            >
              {props?.durationThree}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

ProjectOverviewHorizontaltabs.defaultProps = {
  duration: "12 months",
  durationOne: "30 days",
  durationTwo: "7 days",
  durationThree: "24 hours",
};

export default ProjectOverviewHorizontaltabs;
