import React from "react";
import { Button, Img, Input } from "components";
import { CloseSVG } from "../../assets/images";
import ProjectDetails from "components/ProjectDetails/ProjectDetails";
import HorizontalNavLinks from "components/HorizontalNavLinks/HorizontalNavLinks";

const Header = ({ onBurgerButtonClick }) => {
  const [inputvalue, setInputvalue] = React.useState("");

  
  return (
    <>
      <header className="border-b border-blue_gray-50 border-solid flex items-center justify-center pb-4 w-full">
        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between sm:px-5 px-8 w-full">
          <div className="header-row my-[3px]">
            <div className="flex flex-row gap-4 items-center justify-start">
              <div className="flex flex-col items-start justify-start w-10">
                <div className="border border-gray-900_61 border-solid h-10 md:h-6 pl-2 pt-2 relative rounded-[50%] w-10">
                  <Img
                    className="absolute h-6 inset-[0] justify-center m-auto w-6"
                    src="images/img_user01.svg"
                    alt="userOne"
                  />
                  <div className="absolute bg-green-A700 bottom-[0] h-2.5 outline outline-[1px] outline-white-A700 right-[0] rounded-[50%] w-2.5"></div>
                </div>
              </div>
              <div className="flex flex-row gap-1 items-start justify-start w-auto">
                <Button className="bg-white-A700 flex h-10 items-center justify-center p-2.5 rounded-md w-10">
                  <Img
                    className="h-5"
                    src="images/img_bell01.svg"
                    alt="bellOne"
                  />
                </Button>
                <Button className="bg-white-A700 flex h-10 items-center justify-center p-2.5 rounded-md w-10">
                  <Img
                    className="h-5"
                    src="images/img_search.svg"
                    alt="search"
                  />
                </Button>
              </div>
            </div>
            <div className="mobile-menu">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="flex sm:flex-1 sm:flex-col flex-row gap-6 sm:hidden items-center justify-end w-[503px] sm:w-full">
            <div className="flex flex-col items-start justify-start w-[339px]">
              <div className="flex flex-col items-end justify-start w-full">
                <div className="flex flex-col items-end justify-start w-full">
                  <Input
                    name="input"
                    placeholder="أبحث عن "
                    value={inputvalue}
                    onChange={(e) => setInputvalue(e)}
                    className="font-ibmplexsansarabic p-0 placeholder:text-blue_gray-500 sm:pl-5 text-base text-blue_gray-500 text-left w-full"
                    wrapClassName="bg-white-A700 border border-blue_gray-100 border-solid flex pl-[35px] pr-3.5 py-2.5 rounded-lg shadow-bs w-full"
                    suffix={
                      inputvalue?.length > 0 ? (
                        <CloseSVG
                          className="mt-0.5 mb-px cursor-pointer h-5 ml-2"
                          onClick={() => setInputvalue("")}
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
            <Img
              className="h-[46px] w-[46px] burger-icon cursor-pointer"
              src="images/img_arrowdown.svg"
              alt="arrowdown_One"
              onClick={onBurgerButtonClick}
            />
          </div>
        </div>
      </header>
      <div className="bg-white-A700 flex flex-col gap-12 items-end justify-center max-w-[1098px] pt-8 sm:px-5 px-8 w-full sm:items-center md:items-center">
        <ProjectDetails />
        <HorizontalNavLinks />
      </div>
    </>
  );
};

Header.defaultProps = {};

export default Header;
