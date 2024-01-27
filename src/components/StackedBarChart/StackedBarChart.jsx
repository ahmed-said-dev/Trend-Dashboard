import React from "react";
import { Button, Text } from "components";
import StackedBarChartDetails from "components/StackedBarChartDetails/StackedBarChartDetails";
import ProjectOverviewHorizontaltabs from "components/ProjectOverviewHorizontaltabs/ProjectOverviewHorizontaltabs";

const StackedBarChart = () => {
  return (
    <div>
      <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-1 flex-col items-start justify-start my-0 rounded-[12px] shadow-bs w-full h-[450px]">
        <div className="flex flex-col gap-5 items-start justify-start p-6 sm:px-5 rounded-[12px] w-full">
          <div className="flex flex-col gap-5 items-start justify-start w-full">
            <div className="flex md:flex-col flex-row gap-4 items-start justify-start w-full">
              <div className="flex flex-col items-center justify-start w-auto">
                <Button className="bg-white-A700 border border-blue_gray-100 border-solid cursor-pointer font-semibold min-w-[112px] py-[11px] rounded-lg shadow-bs text-blue_gray-800 text-center text-sm">
                  View report
                </Button>
              </div>
              <div className="flex flex-1 flex-col h-full items-end justify-center w-full">
                <Text
                  className="text-gray-900 text-lg text-right w-full"
                  size="InArSemiBold18"
                >
                  Store traffic
                </Text>
              </div>
            </div>
            <ProjectOverviewHorizontaltabs className="border-b border-blue_gray-50 border-solid flex flex-col gap-2 items-end justify-start w-full" />
          </div>
        </div>
        <StackedBarChartDetails className="flex flex-col font-ibmplexsans items-center justify-start w-full" />
      </div>
    </div>
  );
};

export default StackedBarChart;
