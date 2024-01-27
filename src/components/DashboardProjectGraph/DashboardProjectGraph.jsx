import React from "react";
import { List } from "components";
import SalesReportGraphData from "components/SalesReportGraphData/SalesReportGraphData";
import StackedBarChart from "components/StackedBarChart/StackedBarChart";
import SalesReportHeader from "components/SalesReportHeader/SalesReportHeader";

const DashboardProjectGraph = () => {
  return (
    <div>
      <List
        className="flex flex-col font-inter gap-8 items-end max-w-[1098px] p-8 sm:px-5 w-full"
        orientation="vertical"
      >
        <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-1 flex-col items-start justify-start my-0 rounded-[12px] shadow-bs w-full mt-5">
          <div className="flex flex-col gap-5 items-start justify-start p-6 sm:px-5 rounded-[12px] w-full">
            <SalesReportHeader className="flex flex-col gap-5 items-start justify-start w-full" />
            <SalesReportGraphData className="flex flex-col font-ibmplexsans items-center justify-start w-full" />
          </div>
        </div>

        <StackedBarChart />
      </List>
    </div>
  );
};

export default DashboardProjectGraph;
