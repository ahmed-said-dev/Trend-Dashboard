import React from "react";
import { Button, Img, Input, Text } from "components";
import MasrofatPagination from "components/MasrofatPagination/MasrofatPagination";
import { useState, useEffect } from "react";
import { MasrofatService } from "./service/MasrofatService";
import { CloseSVG } from "../../assets/images";
import MasrofatTableData from "./MasrofatTableData";

const MasrofatTable = () => {

  const [inputonevalue, setInputonevalue] = React.useState("");

  const [isNaviVisible, setIsNaviVisible] = useState(true);

  const handleBurgerButtonClick = () => {
    setIsNaviVisible(!isNaviVisible);
  };

  const [masrofatData, setMasrofatData] = useState([]);

  useEffect(() => {
    MasrofatService.getProductsMini().then((data) => setMasrofatData(data));
  }, []);

  return (
    <div
      className="flex flex-col items-start justify-start max-w-[1099px] pb-8 sm:px-5 px-8 w-full mt-5"

    >
      <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-col items-end justify-start rounded-[12px] shadow-bs w-full">
        <div className="bg-white-A700 flex flex-col items-start justify-start w-full">
          <div className="flex flex-col items-end justify-start px-4 py-6 w-full">


            <div className="flex md:flex-col flex-row gap-4 items-start justify-end w-full">
              <div className="flex sm:flex-1 sm:flex-col flex-row gap-3 items-center justify-start w-auto sm:w-full">
                <Button
                  className="bg-white-A700 border border-blue_gray-100 border-solid cursor-pointer flex items-center justify-center min-w-[89px] px-3.5 py-[9px] rounded-lg shadow-bs"
                  rightIcon={
                    <Img
                      className="h-5 mb-px ml-2"
                      src="images/img_filterlines.svg"
                      alt="filter-lines"
                    />
                  }
                >
                  <div className="font-semibold text-blue_gray-800 text-left text-sm">
                    فلتر بـ
                  </div>
                </Button>
                <div className="flex flex-col items-end justify-start w-[339px]">
                  <div className="flex flex-col items-end justify-start w-full">
                    <div className="flex flex-col items-end justify-start w-full">
                      <Input
                        name="input_One"
                        placeholder="أبحث عن "
                        value={inputonevalue}
                        onChange={(e) => setInputonevalue(e)}
                        className="p-0 placeholder:text-blue_gray-500 sm:pl-5 text-base text-blue_gray-500 text-left w-full"
                        wrapClassName="bg-white-A700 border border-blue_gray-100 border-solid flex pl-[35px] pr-3.5 py-2.5 rounded-lg shadow-bs w-full"
                        suffix={
                          inputonevalue?.length > 0 ? (
                            <CloseSVG
                              className="mt-0.5 mb-px cursor-pointer h-5 ml-2"
                              onClick={() => setInputonevalue("")}
                              fillColor="#667084"
                              height={20}
                              width={20}
                              viewBox="0 0 20 20"
                            />
                          ) : (
                            <Img
                              className="mt-0.5 mb-px cursor-pointer h-5 ml-2"
                              src="images/img_search_blue_gray_500.svg"
                              alt="search"
                            />
                          )
                        }
                      ></Input>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-1 h-full items-end justify-center w-full">
                <Text
                  className="text-gray-900 text-lg text-right w-full"
                  size="PLArSemiBold18"
                >
                  المصروفات
                </Text>
                <Text
                  className="text-blue_gray-700 text-right text-sm w-full"
                  size="ArRe14BlueGray700"
                >
                  نص تنبؤي يمكن أن يستبدل فى هذا المكان
                </Text>

              </div>
            </div>
          </div>
        </div>
        <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-col items-start justify-start rounded-bl-[12px] rounded-br-[12px] shadow-bs w-full">
          <div
            className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-start justify-start w-full"
            style={{ overflow: "scroll" }}
          >

            <MasrofatTableData />


          </div>
          <MasrofatPagination className="flex flex-row gap-[11px] items-center justify-between outline outline-blue_gray-50 pb-4 pt-3 sm:px-5 px-6 w-full" />
        </div>
      </div>
    </div>
  );
};

export default MasrofatTable;
