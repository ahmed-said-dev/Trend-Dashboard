import React from "react";

import { Button, Text } from "components";

const MasrofatPagination = (props) => {
  return (
    <>
      <div className={props.className}>
        <Button className="bg-white-A700 border border-blue_gray-100 border-solid cursor-pointer font-ibmplexsansarabic font-semibold min-w-[55px] py-[7px] rounded-lg shadow-bs text-blue_gray-800 text-center text-sm">
          {props?.nextbutton}
        </Button>
        <Text
          className="text-blue_gray-800 text-sm w-auto"
          size="ArMe14BlueGray800"
        >
          {props?.pagetext}
        </Text>
        <Button className="bg-white-A700 border border-blue_gray-100 border-solid cursor-pointer font-ibmplexsansarabic font-semibold min-w-[66px] py-[7px] rounded-lg shadow-bs text-blue_gray-800 text-center text-sm">
          {props?.previousbutton}
        </Button>
      </div>
    </>
  );
};

MasrofatPagination.defaultProps = {
  nextbutton: "التالي",
  pagetext: "صفحة 1 إلى 10",
  previousbutton: "السابق",
};

export default MasrofatPagination;
