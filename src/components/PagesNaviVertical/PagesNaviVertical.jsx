import React from "react";
import { Img, List, Text } from "components";
import PageVerticalNavitembase from "components/PageVerticalNavitembase/PageVerticalNavitembase";
import PageVerticalNavitembase1 from "components/PageVerticalNavitembase1/PageVerticalNavitembase1";

const PagesNaviVertical = ({ isVisible }) => {
  return (
    <div style={{ display: isVisible ? "block" : "none" }}>
      <div className="nav-vertical-links sm:hidden md:hidden">
        <div className="bg-white-A700 border-blue_gray-50 border-l border-solid flex flex-col h-[1054px] md:h-auto items-start justify-start mb-8 md:px-5 w-[341px]">
          <div className="flex flex-col md:gap-10 gap-[410px] h-full items-end justify-between w-full nav-bar ">
            <div className="flex flex-col gap-6 items-end justify-start pt-8 w-full">
              <div className="flex flex-col items-end justify-start sm:pl-5 pl-6 pr-5 w-full">
                <div className="h-8 relative w-[33%]">
                  <Img
                    className="h-8 m-auto object-cover w-full"
                    src="images/img_linklogotre.png"
                    alt="linklogotre"
                  />
                  <Img
                    className="absolute h-8 inset-y-[0] my-auto object-cover right-[0] w-[9%]"
                    src="images/img_linklogotre_32x8.png"
                    alt="linklogotre_One"
                  />
                </div>
              </div>

              <List
                className="flex flex-col gap-2.5 items-end sm:px-5 px-6 w-full"
                orientation="vertical"
              >
                <PageVerticalNavitembase className="bg-white-A700 flex flex-1 flex-col gap-2 items-center justify-start my-0 p-3 rounded-md w-full" />
                <PageVerticalNavitembase1 className="bg-gray-50_01 flex flex-1 flex-col gap-2 items-center justify-start my-0 p-3 rounded-md w-full" />
                <PageVerticalNavitembase
                  className="bg-white-A700 flex flex-1 flex-col gap-2 items-center justify-start my-0 p-3 rounded-md w-full"
                  text="الفواتير"
                />
                <PageVerticalNavitembase
                  className="bg-white-A700 flex flex-1 flex-col gap-2 items-center justify-start my-0 p-3 rounded-md w-full"
                  text="المصروفات"
                />
                <PageVerticalNavitembase
                  className="bg-white-A700 flex flex-1 flex-col gap-2 items-center justify-start my-0 p-3 rounded-md w-full"
                  text="الجدول الزمنى للمشروع"
                />
                <PageVerticalNavitembase
                  className="bg-white-A700 flex flex-1 flex-col gap-2 items-center justify-start my-0 p-3 rounded-md w-full"
                  text="المشروعات"
                />
                <PageVerticalNavitembase
                  className="bg-white-A700 flex flex-1 flex-col gap-2 items-center justify-start my-0 p-3 rounded-md w-full"
                  text="إدارة الحملات"
                />
              </List>
            </div>
            <div className="flex flex-col items-start justify-start pb-8 px-4 w-full ">
              <div className="border-blue_gray-50 border-solid border-t pt-6 px-2 relative w-full cursor-pointer">
                <div className="flex flex-1 flex-col items-center justify-end mt-auto mx-auto w-full">
                  <div className="flex flex-col items-end justify-start w-auto cursor-pointer">
                    <Text
                      className="text-blue_gray-800 text-sm w-auto"
                      size="ArBo14BlueGray800"
                    >
                      تسجيل الخروج
                    </Text>
                  </div>
                </div>
                <div className="absolute bottom-[0] flex flex-col items-center justify-center left-[0] p-2 rotate-[180deg] rounded-lg w-auto">
                  <Img
                    className="h-5 w-5"
                    src="images/img_arrowdown_blue_gray_500.svg"
                    alt="arrowdown_One"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PagesNaviVertical;
