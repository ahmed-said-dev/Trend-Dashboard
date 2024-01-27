import React from "react";
import Header from "components/Header/Header";
import { useState } from "react";
import PagesNaviVertical from "components/PagesNaviVertical/PagesNaviVertical";
import DashboardProjectGraph from "components/DashboardProjectGraph/DashboardProjectGraph";

const ProjectOverviewPage = () => {
  const [isNaviVisible, setIsNaviVisible] = useState(true);

  const handleBurgerButtonClick = () => {
    setIsNaviVisible(!isNaviVisible);
  };

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-ibmplexsansarabic items-center justify-start mx-auto w-full sm:overflow-x-auto md:overflow-x-auto">
        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
          <div className="flex md:flex-1 flex-col items-center justify-start md:px-5 w-[77%] md:w-full dash-details">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="bg-white-A700 border-b border-blue_gray-50 border-solid flex flex-col items-center justify-start max-w-[1098px] pt-8 w-full">
                <Header
                  className="border-b border-blue_gray-50 border-solid flex items-center justify-center pb-4 w-full"
                  onBurgerButtonClick={handleBurgerButtonClick}
                />
              </div>
            </div>

            <div className="bg-white-A700 flex flex-col gap-12 items-end justify-center max-w-[1098px] pt-8 sm:px-5  w-full sm:items-center md:items-center sm:overflow-x-auto md:overflow-x-auto">
              <DashboardProjectGraph />
            </div>
          </div>

          <PagesNaviVertical isVisible={isNaviVisible} />
        </div>
      </div>
    </>
  );
};

export default ProjectOverviewPage;
