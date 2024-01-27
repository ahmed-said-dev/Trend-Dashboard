import React from "react";
import PagesNaviVertical from "../../components/PagesNaviVertical/PagesNaviVertical";
import Header from "components/Header/Header";
import MasrofatDataEntry from "components/MasrofatDataEntry/MasrofatDataEntry";
import MasrofatTable from "components/MasrofatTable/MasrofatTable";
import { useState } from "react";

const MasrofatPage = () => {
  const [isNaviVisible, setIsNaviVisible] = useState(true);

  const handleBurgerButtonClick = () => {
    setIsNaviVisible(!isNaviVisible);
  };

  return (
    <>
      <div className="absolute bg-gray-50 flex flex-col font-ibmplexsansarabic  justify-start mx-auto md:px-5 top-[0] w-full">
        <div className="flex md:flex-col flex-row md:gap-5 justify-evenly w-full">
          <div className="flex md:flex-1 flex-col items-center justify-start md:px-5 w-[77%] md:w-full dash-details">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="bg-white-A700 border-b border-blue_gray-50 border-solid flex flex-col items-center justify-start max-w-[1098px] pt-8 w-full">
                <Header
                  className="border-b border-blue_gray-50 border-solid flex items-center justify-center pb-4 w-full"
                  onBurgerButtonClick={handleBurgerButtonClick}
                />
              </div>
            </div>
            <MasrofatDataEntry />
            <MasrofatTable />
          </div>

          <PagesNaviVertical isVisible={isNaviVisible} />
        </div>
      </div>
    </>
  );
};

export default MasrofatPage;
