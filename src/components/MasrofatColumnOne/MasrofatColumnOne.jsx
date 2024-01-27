import React from "react";

import { Img, Text } from "components";

const MasrofatColumnOne = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="border border-blue_gray-100_01 border-solid flex flex-col items-center justify-end px-3.5 py-2.5 rounded-lg w-full">
          <div className="flex flex-col gap-2.5 items-center justify-start w-full">
            <div className="flex sm:flex-col flex-row gap-2 items-center justify-start w-[95%] md:w-full">
              {!!props?.checkmark ? (
                <Img
                  className="h-[23px] w-6"
                  alt="checkmark"
                  src={props?.checkmark}
                />
              ) : null}
              <div className="flex flex-col items-center justify-end w-full">
                <div className="flex flex-col items-center justify-start w-auto">
                  <Text
                    className="text-base text-gray-600 text-right w-auto"
                    size="PlexRegular16Gray600"
                  >
                    {props?.label}
                  </Text>
                </div>
              </div>
            </div>
            <Img
              className="h-px w-full"
              src="images/img_helpertextwrapper.svg"
              alt="helpertextwrapp"
            />
          </div>
        </div>
      </div>
    </>
  );
};

MasrofatColumnOne.defaultProps = { label: "بند المصروف" };

export default MasrofatColumnOne;
