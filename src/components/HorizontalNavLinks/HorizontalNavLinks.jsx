import React from "react";
import { List, Text } from "components";
import { useNavigate } from "react-router-dom";

const HorizontalNavLinks = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="border-b border-blue_gray-50 border-solid flex flex-col items-end justify-start w-full">
        <div className="flex md:flex-col flex-row gap-4 items-center justify-center w-full">
          <List
            className="md:flex-1 sm:flex-col flex-row gap-4 grid sm:grid-cols-1 md:grid-cols-4 grid-cols-7 w-[88%] md:w-full"
            orientation="horizontal"
          >
            <div className="cursor-pointer flex flex-col items-center justify-center pb-[11px] px-1 w-full">
              <Text
                className="text-blue_gray-500 text-sm w-auto"
                size="PlArSemiBold14"
              >
                المستندات
              </Text>
            </div>
            <div className="cursor-pointer flex flex-col items-center justify-center pb-[11px] px-1 w-full">
              <Text
                className="text-blue_gray-500 text-right text-sm w-auto"
                size="PlArSemiBold14"
              >
                محضر إجتماع
              </Text>
            </div>
            <div className="cursor-pointer flex flex-col items-center justify-center pb-[11px] px-1 w-full">
              <Text
                className="text-blue_gray-500 text-right text-sm w-auto"
                size="PlArSemiBold14"
              >
                البنود
              </Text>
            </div>
            <div className="cursor-pointer flex flex-col items-center justify-center pb-[11px] px-1 w-full">
              <Text
                className="text-blue_gray-500 text-right text-sm w-auto"
                size="PlArSemiBold14"
              >
                أعمال خارج العقد
              </Text>
            </div>
            <div
              className="common-pointer cursor-pointer flex flex-col items-center justify-center pb-[11px] px-1 w-full"
              onClick={() => navigate("/Masrofat")}
            >
              <Text
                className="text-blue_gray-500 text-right text-sm w-auto"
                size="PlArSemiBold14"
              >
                المصروفات
              </Text>
            </div>
            <div className="cursor-pointer flex flex-col items-center justify-center pb-[11px] px-1 w-full">
              <Text
                className="text-blue_gray-500 text-right text-sm w-auto"
                size="PlArSemiBold14"
              >
                الفواتير
              </Text>
            </div>
            <div className="cursor-pointer flex flex-col items-center justify-center pb-[11px] px-1 w-full">
              <Text
                className="text-blue_gray-500 text-sm w-auto"
                size="PlArSemiBold14"
              >
                الحالة المالية
              </Text>
            </div>
          </List>
          <Text
            className="border-b-2 border-deep_purple-500 border-solid flex-1 pb-2 pt-0.5 sm:px-5 px-[27px] text-deep_purple-500 text-sm w-full"
            size="PlArSemiBoldPurple14"
          >
            عن المشروع
          </Text>
        </div>
      </div>
    </div>
  );
};

export default HorizontalNavLinks;
